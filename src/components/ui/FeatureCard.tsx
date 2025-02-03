import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

interface FeatureCardProps {
  title?: string;
  description: string;
  href?: string;
  linkText?: string;
  bg?: string;
}

function FeatureCard({ title, description, href, linkText }: FeatureCardProps) {
  return (
    <div className="flex flex-col gap-6">
      {title && <h3 className="capitalize">{title}</h3>}
      <div className="rounded-md flex justify-between items-center p-12 bg-black text-white h-64">
        <p className="text-base max-w-[42%]">{description}</p>
        {href && linkText && (
          <div className="self-end flex items-center gap-1">
            <Link className="self-end" href={href}>
              {linkText}
            </Link>
            <IoIosArrowForward className="w-3 h-3" />
          </div>
        )}
      </div>
    </div>
  );
}

export default FeatureCard;
