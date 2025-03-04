import { Input } from '@nextui-org/input';
import clsx from 'clsx';
import { ChangeEvent, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import styles from './Input.module.scss';
import { UseFormRegisterReturn } from 'react-hook-form';

function ConfirmInput({
  placeholder,
  register,
  checkValue,
  isPassword,
  label,
}: {
  label?: string;
  placeholder?: string;
  isPassword?: boolean;
  register: UseFormRegisterReturn;
  checkValue: () => string;
}) {
  const [isCorrect, setIsCorrect] = useState(false);
  // const [isVisible, setIsVisible] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsCorrect(e.target.value === checkValue());
  };

  return (
    <Input
      className={clsx(styles.input)}
      type={!isPassword ? 'text' : 'password'}
      {...register}
      placeholder={placeholder}
      onChange={onChange}
      label={label}
      labelPlacement="outside"
      fullWidth
      variant="bordered"
      size="md"
      classNames={{
        inputWrapper: 'border border-black',
        input: 'z-10',
        label: 'text-sm',
      }}
      endContent={
        <div className="flex items-center gap-2 absolute right-[0.75rem] top-1/2 -translate-y-1/2 z-10">
          <FaCheckCircle
            className={clsx(
              !isCorrect ? 'opacity-40' : 'fill-green',
              'w-4 h-4',
            )}
          />
          {/* {isPassword && (
            <button
              aria-label="toggle password visibility z-10"
              className="focus:outline-none"
              type="button"
              onClick={() => setIsVisible(!isVisible)}
            >
              {isVisible ? (
                <IoEyeOffOutline className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <IoEyeOutline className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          )} */}
        </div>
      }
    />
  );
}

export default ConfirmInput;
