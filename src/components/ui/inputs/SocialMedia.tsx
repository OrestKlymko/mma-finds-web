import { Select, SelectItem } from "@heroui/select";
import { ChangeEvent, useState } from "react";
import CustomInput from "./CustomInput";
import { UseFormRegisterReturn } from "react-hook-form";
import { Button } from "@nextui-org/button";

function SocialMedia({
  registerInstagram,
  registerX,
  registerFacebook,
}: {
  registerInstagram: UseFormRegisterReturn;
  registerX: UseFormRegisterReturn;
  registerFacebook: UseFormRegisterReturn;
}) {
  const availableOptions = [
    { key: "Facebook", value: "Facebook", register: registerFacebook },
    { key: "X", value: "X", register: registerX },
    { key: "Instagram", value: "Instagram", register: registerInstagram },
  ];

  const [selectedMedia, setSelectedMedia] = useState<
    { key: string; value: string; register: UseFormRegisterReturn }[]
  >([]);
  const [remainingOptions, setRemainingOptions] = useState(availableOptions);
  const [showSelect, setShowSelect] = useState(true);

  const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedMedia = availableOptions.find(
      (item) => e.target.value === item.key
    );

    if (selectedMedia) {
      setSelectedMedia((prev) => [...prev, selectedMedia]);
      setRemainingOptions((prev) =>
        prev.filter((item) => item.key !== selectedMedia.key)
      );
    }

    setShowSelect(false); // Hide select after choosing an option
  };

  return (
    <div className="flex flex-col items-start gap-2">
      {selectedMedia.map((media) => (
        <CustomInput
          key={media.key}
          label={media.value}
          register={media.register}
        />
      ))}

      {showSelect && remainingOptions.length > 0 && (
        <Select
          variant="bordered"
          label="Social Media*"
          labelPlacement="outside"
          fullWidth
          size="md"
          onChange={onChangeSelect}
          classNames={{
            selectorIcon: "scale-[1.4] rotate-[270deg]",
            trigger: "border border-black",
            label: "text-[0.75rem]",
          }}
        >
          {remainingOptions.map((item) => (
            <SelectItem key={item.key} value={item.key}>
              {item.value}
            </SelectItem>
          ))}
        </Select>
      )}

      {selectedMedia.length > 0 && remainingOptions.length > 0 && (
        <Button
          className="bg-[#3D3D3D] text-white"
          onPress={() => setShowSelect(true)}
        >
          Add more social media links
        </Button>
      )}
    </div>
  );
}

export default SocialMedia;
