import { UseFormRegisterReturn, UseFormSetValue } from 'react-hook-form';
import { Inputs } from '../../../types/inputs';
import { useState } from 'react';
import clsx from 'clsx';
import { Button } from '@nextui-org/button';
import { GrAttachment } from 'react-icons/gr';

function FileInput({
  setValue,
  className,
  register,
}: {
  setValue: UseFormSetValue<Inputs>;
  className?: string;
  register: UseFormRegisterReturn;
}) {
  const [fileName, setFileName] = useState<string>('');

  const inputFileHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) {
      setFileName('');
      setValue('photo', null, { shouldValidate: true });
      return;
    }
    if (e.target.files?.length) {
      setFileName(e.target.files[0].name);
      const file = e.target.files[0];
      setValue('file', file, { shouldValidate: true });
    }
  };

  return (
    <div
      className={clsx(
        'flex items-center justify-between max-w-[400px] ',
        className,
      )}
    >
      <label htmlFor="file" className="w-full cursor-pointer">
        <input hidden type="file" id="file" onChange={inputFileHandler} />
        <input type="hidden" {...register} />
        <Button
          fullWidth
          className="max-w-[400px] pointer-events-none bg-gray-light"
        >
          <GrAttachment />
          <p>{fileName || 'Attach a File'}</p>
        </Button>
      </label>
    </div>
  );
}

export default FileInput;
