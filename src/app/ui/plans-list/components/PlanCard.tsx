"use client";
import { Button } from "@nextui-org/button";
import clsx from "clsx";
import Image from "next/image";

interface PlanCard {
  title: string;
  price: string;
  isBestSeller?: boolean;
  features: Feature[];
}

type Feature = {
  isHighlighted: boolean;
  text: string;
};

function PlanCard({
  features,
  isAuthorized,
}: {
  features: PlanCard;
  isAuthorized?: boolean;
}) {
  const { isBestSeller, title, price, features: featureList } = features;
  return (
    <li
      className={clsx("py-12 relative flex flex-col gap-10 justify-between", {
        "bg-[#3d3d3d] text-white": isBestSeller,
        "bg-gray": !isBestSeller,
      })}
    >
      <Image
        className={clsx("mx-auto absolute top-4 right-4", {
          hidden: !isBestSeller,
        })}
        src="/images/bestseller.png"
        width={30}
        height={40}
        alt="bestseller"
      />
      <div className="">
        <h2
          className={clsx("uppercase text-center font-medium leading-none", {
            "text-green": !isBestSeller,
            "text-white": isBestSeller,
          })}
        >
          {title}
        </h2>
        <p
          className={clsx("text-center text-base font-medium leading-none", {
            "text-green": !isBestSeller,
            "text-white": isBestSeller,
          })}
        >
          €{price}/<span className="text-sm font-normal">month</span>
        </p>
      </div>
      <ul>
        {featureList.map((feature, index) => (
          <li
            className={clsx("p-2 font-thin text-center ", {
              "odd:bg-[#484848]": isBestSeller,
              "odd:bg-gray-second": !isBestSeller,
            })}
            key={index}
          >
            <p className={clsx({ "font-medium": feature.isHighlighted })}>
              {feature.text}
            </p>
          </li>
        ))}
      </ul>
      <div className="px-4 mt-auto ">
        <Button
          size="sm"
          className={clsx("bg-green text-white", {
            "bg-yellow text-black": isBestSeller,
          })}
          fullWidth
        >
          Get Started
        </Button>
      </div>
    </li>
  );
}

export default PlanCard;
