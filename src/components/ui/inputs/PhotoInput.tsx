import { useState } from 'react';
import { UseFormRegisterReturn, UseFormSetValue } from 'react-hook-form';
import { LuUpload } from 'react-icons/lu';
import clsx from 'clsx';
import { getPhotoWidthHeight } from '../../../lib/getPhotoDetails';
import { Inputs } from '../../../types/inputs';
import Image from 'next/image';

export type PhotoDetails = {
  file: File;
  width: number;
  height: number;
};

function PhotoInput({
  setValue,
  className,
  label,
  register,
  type,
}: {
  setValue: UseFormSetValue<Inputs>;
  className?: string;
  label: string;
  register: UseFormRegisterReturn;
  type?: 'avatar' | 'poster';
}) {
  const [fileName, setFileName] = useState<string>('');
  const [photoUrl, setPhotoUrl] = useState<string>('');

  const inputFileHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) {
      setFileName('');
      setValue('photo', null, { shouldValidate: true });
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
        setValue('photo', photoDetails, { shouldValidate: true });
        const imageUrls = URL.createObjectURL(e.target.files[0]);
        setPhotoUrl(imageUrls);
      } catch (error) {
        console.error(error);
        throw new Error("Couldn't upload file");
      }
    }
  };

  return (
    <div
      className={clsx('flex justify-between', className, {
        'flex-col items-start gap-2': type === 'poster',
        'flex-row items-center': type !== 'poster',
      })}
    >
      <div>
        <p className="text-base text-gray-500">{label}</p>
        <p className="text-[0.7rem] text-gray-500">
          {fileName || 'Please insert your logo or photo.'}
        </p>
      </div>
      <label
        htmlFor="file"
        className={clsx(
          'flex w-14 items-center justify-center p-3 shadow-plain cursor-pointer relative',
          {
            'w-14 aspect-square rounded-full': type !== 'poster',
            'w-full aspect-[2.8] rounded-md': type === 'poster',
          },
        )}
      >
        <input
          hidden
          type="file"
          id="file"
          accept=".jpg, .jpeg, .png"
          onChange={inputFileHandler}
        />
        <input type="hidden" {...register} />
        {photoUrl ? (
          <div
            className={clsx('w-full h-full overflow-hidden absolute inset-0', {
              'rounded-md': type === 'poster',
              'rounded-full': type !== 'poster',
            })}
          >
            <Image
              width={28}
              height={28}
              src={photoUrl}
              alt="photo"
              className="w-full h-full object-cover object-center"
            />
          </div>
        ) : (
          <LuUpload className="w-full" />
        )}
      </label>
    </div>
  );
}

export default PhotoInput;
