import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowForward, IoIosHeart } from 'react-icons/io';

function FighterCard({ isPromoter }: { isPromoter?: boolean }) {
  const mock = {
    name: 'John "the punisher" Doe',
    class: 'middleweight',
    professionalRecord: '10-5-2',
    amateurRecord: '5-2-1',
    age: 25,
    basedIn: 'Europe',
    foundationStyle: 'Wrestling',
    isSaved: true,
  };

  return (
    <div className="rounded-md bg-gray flex gap-4 p-4 items-center">
      <div className="overflow-hidden rounded-full aspect-square w-[25%]">
        <Image
          className="h-full w-full aspect-square object-cover object-center"
          width={55}
          height={55}
          src="/images/boxer-avatar.jpg"
          alt="fighter"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h4 className="">{mock.name}</h4>
        <ul className="flex flex-col gap-0 text-sm">
          {isPromoter && (
            <li>
              <p className="font-semibold">
                Age: <span className="font-normal">{mock.age}</span>
              </p>
            </li>
          )}
          {isPromoter && (
            <li>
              <p className="font-semibold">
                Based In: <span className="font-normal">{mock.basedIn}</span>
              </p>
            </li>
          )}
          <li>
            <p className="font-semibold">
              Weight Class: <span className="font-normal">{mock.class}</span>
            </p>
          </li>
          <li>
            <p className="font-semibold">
              Professional MMA Record:{' '}
              <span className="font-normal">{mock.professionalRecord}</span>
            </p>
          </li>
          <li>
            <p className="font-semibold">
              Amateur MMA Record:{' '}
              <span className="font-normal">{mock.class}</span>
            </p>
          </li>
          {isPromoter && (
            <li>
              <p className="font-semibold">
                Foundation Style:{' '}
                <span className="font-normal">{mock.foundationStyle}</span>
              </p>
            </li>
          )}
        </ul>
      </div>
      {isPromoter && (
        <div className="flex flex-col justify-between h-full ml-auto">
          {mock.isSaved && <IoIosHeart className="w-6 h-6" color="#980909" />}
          <Link href={''} className="my-auto">
            <IoIosArrowForward className="w-full h-full" color="green" />
          </Link>
        </div>
      )}
    </div>
  );
}

export default FighterCard;
