"use client";

import { Select, SelectItem } from "@heroui/select";
import { Input } from "@nextui-org/input";
import Image from "next/image";
import { useEffect, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type SelectData = {
  flag: string;
  callingCode: string;
};

type Countries = {
  flags: {
    png: string;
  };
  idd: {
    root: string;
    suffixes: string[];
  };
  callingCode: string;
};

function PhoneInput({ register }: { register: UseFormRegisterReturn }) {
  const [selectData, setSelectData] = useState<SelectData[]>([]);
  const [flag, setFlag] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [value, setInputValue] = useState<string>("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=idd,flags"
        );
        const data = await response.json();
        const countries = data
          .map((country: Countries) => ({
            flag: country.flags.png,
            callingCode:
              country.idd.root +
              (country.idd.suffixes ? country.idd.suffixes[0] : ""),
          }))
          .filter((country: Countries) => country.callingCode !== "undefined")
          .sort((a: SelectData, b: SelectData) =>
            a.callingCode.localeCompare(b.callingCode)
          );
        setSelectData(countries);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
    setFlag("https://flagcdn.com/w320/sk.png");
    setCode("+421");
  }, []);

  useEffect(() => {
    setInputValue(`(${code})`);
  }, [code]);

  return (
    <Input
      className="pl-0"
      labelPlacement="outside"
      {...register}
      fullWidth
      type="tel"
      variant="bordered"
      label="Phone number*"
      size="md"
      radius="sm"
      value={value}
      onChange={(e) => {
        setInputValue(e.target.value);
      }}
      classNames={{
        inputWrapper: "border border-black pl-0",
        input: "ml-[-0.675rem]",
        label: "text-[0.75rem]",
      }}
      startContent={
        <Select
          startContent={
            <Image
              width={24}
              height={24}
              src={flag || "https://flagcdn.com/w320/sk.png"}
              alt="flag"
              className="w-6 mr-2"
            />
          }
          className="border-r-0 w-20 bg-transparent hover:bg-none"
          variant="bordered"
          size="md"
          autoFocus={false}
          classNames={{
            trigger: "border-0 shadow-none hover:bg-transparent pr-0",
            popoverContent: "w-32",
          }}
          aria-label="Select country code"
          onChange={(e) => {
            const selectedCountry = selectData.find(
              (data) => data.flag === e.target.value
            );
            if (selectedCountry) {
              setFlag(selectedCountry.flag);
              setCode(selectedCountry.callingCode);
            }
          }}
        >
          {selectData.map((data) => (
            <SelectItem
              className="text-white"
              key={data.flag}
              textValue="a"
              aria-label="Select country code"
            >
              <div className="flex items-center">
                <Image
                  width={16}
                  height={16}
                  src={data.flag}
                  alt="flag"
                  className="w-6 mr-2"
                />
                <span className="text-black">{data.callingCode}</span>
              </div>
            </SelectItem>
          ))}
        </Select>
      }
    />
  );
}

export default PhoneInput;
