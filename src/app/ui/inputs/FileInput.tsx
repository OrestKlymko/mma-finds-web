import { useState } from "react";
import { getPhotoWidthHeight } from "../../lib/getPhotoDetails";
import { UseFormSetValue } from "react-hook-form";
import { LuUpload } from "react-icons/lu";
import clsx from "clsx";

export type PhotoDetails = {
  file: File;
  width: number;
  height: number;
};

function FileInput({
  setValue,
  className,
  label,
  register,
}: {
  setValue: UseFormSetValue<any>;
  className?: string;
  label: string;
  register: any;
}) {
  const [fileName, setFileName] = useState<string>("");

  const inputFileHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) {
      setFileName("");
      setValue("photo", {}, { shouldValidate: true });
      return;
    }
    if (e.target.files?.length) {
      setFileName(e.target.files[0].name);
      try {
        const photoResolution = await getPhotoWidthHeight(e.target.files);
        const photoDetails: PhotoDetails = {
          ...photoResolution,
          file: e.target.files[0],
        };
        setValue("photo", photoDetails, { shouldValidate: true });
      } catch (error) {
        throw new Error("Couldn't upload file");
      }
    }
  };

  return (
    <div className={clsx("flex items-center justify-between", className)}>
      <div>
        <p className="text-base text-gray-500">{label}</p>
        <p className="text-[0.7rem] text-gray-500">
          {fileName || "Please insert your logo or photo."}
        </p>
      </div>
      <label
        htmlFor="file"
        className="flex w-14 aspect-square flex-col items-center justify-center p-3 shadow-plain rounded-full cursor-pointer"
      >
        <input
          hidden
          type="file"
          id="file"
          accept=".jpg, .jpeg, .png"
          onChange={inputFileHandler}
          {...register}
        />
        <LuUpload className="w-full" />
      </label>
    </div>
  );
}

export default FileInput;
