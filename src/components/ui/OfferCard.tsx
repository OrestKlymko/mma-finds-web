import Image from "next/image";
import { IoIosHeart } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

interface OfferCardProps {
  image: string;
  title: string;
  date: string;
  applied?: string;
  reviewDate?: string;
  organization?: string;
  place?: string;
  weightClass?: string;
  purse?: string;
  isSaved?: boolean;
  isTitle?: boolean;
}

function OfferCard({
  image,
  title,
  date,
  applied,
  reviewDate,
  organization,
  place,
  weightClass,
  purse,
  isSaved,
  isTitle,
}: OfferCardProps) {
  return (
    <div className="w-full bg-gray rounded-medium flex flex-col">
      <div className="aspect-[2] w-full overflow-hidden">
        <Image
          className="w-full h-full object-cover object-center"
          src={image}
          alt={title}
          width={300}
          height={150}
        />
      </div>
      <div className="p-8 relative">
        {isTitle && (
          <div className="absolute top-0 right-0 py-1 px-5 bg-yellow flex items-center justify-center">
            <p>Title Fight</p>
          </div>
        )}
        <div className="flex items-center justify-between ">
          <h4 className="uppercase mb-3">
            {title} | {date}
          </h4>
          {isSaved && <IoIosHeart className="w-6 h-6" color="#980909" />}
        </div>
        {applied && (
          <p className="font-medium">
            Fighter Applied: <span className="text-green">{applied}</span>
          </p>
        )}
        {reviewDate && (
          <p className="font-medium">Offer will be reviewed in: {reviewDate}</p>
        )}
        {organization && (
          <p className="font-medium">Organization: {organization}</p>
        )}
        {place && <p className="font-medium">Event Place: {place}</p>}
        {weightClass && (
          <p className="font-medium">Weight Class: {weightClass}</p>
        )}
        {purse && <p className="font-medium">Purse: {purse}</p>}
        <div className="absolute bottom-8 right-8 w-4 h-4">
          <IoIosArrowForward className="w-full h-full" color="green" />
        </div>
      </div>
    </div>
  );
}

export default OfferCard;
