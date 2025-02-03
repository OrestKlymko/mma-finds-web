"use client";

import { useState } from "react";
import CustomRadioGroup from "../../components/ui/inputs/CustomRadioQroup";
import { countries } from "../../constants/contries";
import { MMARules } from "../../constants/MMARules";
import { promotion } from "../../constants/promotions";
import { weightClass } from "../../constants/weightClass";
import { useRouter, useSearchParams } from "next/navigation";
import { IoIosArrowForward } from "react-icons/io";
import { Button } from "@nextui-org/button";
import clsx from "clsx";

enum ActiveFilterList {
  countries = "countries",
  promotions = "promotions",
  rules = "rules",
  weight = "weight",
}

function FighterFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [place, setPlace] = useState<string | null>(
    searchParams.get("position") || null
  );
  const [promotions, setPromotions] = useState<string | null>(
    searchParams.get("promotions") || null
  );
  const [rules, setRules] = useState<string | null>(
    searchParams.get("rules") || null
  );
  const [weight, setWeight] = useState<string | null>(
    searchParams.get("weight") || null
  );

  const [activeFilters, setActiveFilters] = useState<ActiveFilterList | null>(
    null
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let fn = setPromotions;
    let value = place;
    switch (e.target.name) {
      case "countries":
        fn = setPlace;
        value = place;
        break;
      case "promotions":
        fn = setPromotions;
        value = promotions;
        break;
      case "rules":
        fn = setRules;
        value = rules;
        break;
      case "weight":
        fn = setWeight;
        value = weight;
        break;
    }
    if (value === e.target.value) {
      fn(null);
      return;
    }
    fn(e.target.value);
  };

  const setItems = (type: ActiveFilterList) => {
    switch (type) {
      case ActiveFilterList.countries:
        return countries;
      case ActiveFilterList.promotions:
        return promotion;
      case ActiveFilterList.rules:
        return MMARules;
      case ActiveFilterList.weight:
        return weightClass;
    }
  };

  const setName = (type: ActiveFilterList) => {
    switch (type) {
      case ActiveFilterList.countries:
        return "countries";
      case ActiveFilterList.promotions:
        return "promotions";
      case ActiveFilterList.rules:
        return "rules";
      case ActiveFilterList.weight:
        return "weight";
    }
  };

  const setChecked = (type: ActiveFilterList) => {
    switch (type) {
      case ActiveFilterList.countries:
        return place;
      case ActiveFilterList.promotions:
        return promotions;
      case ActiveFilterList.rules:
        return rules;
      case ActiveFilterList.weight:
        return weight;
    }
  };

  const showResults = () => {
    searchParams.get("position");
    const params = new URLSearchParams(searchParams.toString());
    if (place) {
      params.set("position", place);
    } else {
      params.delete("position");
    }
    if (promotions) {
      params.set("promotions", promotions);
    } else {
      params.delete("promotions");
    }
    if (rules) {
      params.set("rules", rules);
    } else {
      params.delete("rules");
    }
    if (weight) {
      params.set("weight", weight);
    } else {
      params.delete("weight");
    }
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  const onClearAll = async () => {
    setPlace(null);
    setPromotions(null);
    setRules(null);
    setWeight(null);
    setActiveFilters(null);
    router.replace("/manager/offers", { scroll: false });
  };

  return (
    <div className="">
      <button
        className="absolute top-4 right-4 capitalize text-[0.85rem] font-semibold text-green"
        onClick={onClearAll}
      >
        clear all
      </button>
      <p className="text-medium font-medium text-center">Filters</p>
      {!activeFilters && (
        <div className="flex flex-col gap-8 items-center">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <CustomRadioGroup
                label="Event Place"
                bgColor="green"
                name="countries"
                items={countries}
                width="fit"
                containerWidth={400}
                onChange={handleChange}
                checked={place}
                type="checkbox"
              />
              <div
                className="flex items-center mt-6 cursor-pointer"
                onClick={() => setActiveFilters(ActiveFilterList.countries)}
              >
                <p className="text-green">+{countries.length} more</p>
                <IoIosArrowForward className="text-green w-3 h-3" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <CustomRadioGroup
                label="Promotions"
                bgColor="green"
                name="promotions"
                items={promotion}
                width="fit"
                containerWidth={400}
                onChange={handleChange}
                checked={promotions}
                type="checkbox"
              />
              <div
                className="flex items-center mt-6 cursor-pointer"
                onClick={() => setActiveFilters(ActiveFilterList.promotions)}
              >
                <p className="text-green">+{promotion.length} more</p>
                <IoIosArrowForward className="text-green w-3 h-3" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <CustomRadioGroup
                label="MMA Rules"
                bgColor="green"
                name="rules"
                items={MMARules}
                width="fit"
                containerWidth={400}
                onChange={handleChange}
                checked={rules}
                type="checkbox"
              />
            </div>
            <div className="flex items-center gap-2">
              <CustomRadioGroup
                label="Weight Class"
                bgColor="green"
                name="weight"
                items={weightClass}
                width="fit"
                containerWidth={400}
                onChange={handleChange}
                checked={weight}
                type="checkbox"
              />
              <div
                className="flex items-center mt-6 cursor-pointer"
                onClick={() => setActiveFilters(ActiveFilterList.weight)}
              >
                <p className="text-green">+{weightClass.length} more</p>
                <IoIosArrowForward className="text-green w-3 h-3" />
              </div>
            </div>
          </div>
          <Button
            className="max-w-[12rem] w-full mx-auto"
            color="secondary"
            onPress={showResults}
          >
            Show Results
          </Button>
        </div>
      )}
      {activeFilters && (
        <div className="flex flex-col gap-8 h-[387px]">
          <FilterListDetailed
            items={setItems(activeFilters)}
            onChange={handleChange}
            checked={setChecked(activeFilters)}
            name={setName(activeFilters)}
          />
          <Button
            className="max-w-[12rem] w-full mx-auto bottom-4 shrink-0"
            color="secondary"
            onPress={() => {
              showResults();
              setActiveFilters(null);
            }}
          >
            Apply
          </Button>
        </div>
      )}
    </div>
  );
}

export default FighterFilter;

function FilterListDetailed({
  items,
  onChange,
  checked,
  name,
}: {
  items: { key: string; value: string }[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: string | null;
  name: string;
}) {
  return (
    <div className="flex flex-col overflow-y-auto">
      {items.map((item) => (
        <div
          key={item.key}
          className="flex items-center justify-between even:bg-gray-light p-3"
        >
          <label className="flex items-center justify-between w-full cursor-pointer">
            <p>{item.value}</p>
            <input
              className="hidden "
              type="checkbox"
              name={name}
              value={item.key}
              onChange={onChange}
              checked={checked === item.key}
            />
            <div className="w-3 h-3 border border-black rounded-full p-[0.06rem] flex items-center justify-center">
              <div
                className={clsx(
                  "w-full h-full rounded-full peer-checked:bg-green",
                  {
                    "bg-green": checked === item.key,
                  }
                )}
              ></div>
            </div>
          </label>
        </div>
      ))}
    </div>
  );
}
