import { Input } from '@nextui-org/input';
import { useState } from 'react';
import { IoEyeOutline } from 'react-icons/io5';
import { IoEyeOffOutline } from 'react-icons/io5';
import { FaCheckCircle } from 'react-icons/fa';
import clsx from 'clsx';
import { UseFormRegisterReturn } from 'react-hook-form';

function Password({
  label,
  register,
  validation,
  className,
}: {
  register: UseFormRegisterReturn;
  validation?: boolean;
  className?: string;
  label?: string;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [password, setPassword] = useState('');

  const validatePassword = (password: string) => {
    const lengthValid = password.length >= 8 && password.length <= 20;
    const uppercaseValid = /[A-Z]/.test(password);
    const numberValid = /[0-9]/.test(password);
    return { lengthValid, uppercaseValid, numberValid };
  };

  const getStrength = () => {
    const { lengthValid, uppercaseValid, numberValid } =
      validatePassword(password);
    const validCount = [lengthValid, uppercaseValid, numberValid].filter(
      Boolean,
    ).length;
    return validCount;
  };

  const strength = getStrength();

  const { lengthValid, uppercaseValid, numberValid } =
    validatePassword(password);

  return (
    <div className="flex flex-col gap-3">
      <Input
        className={clsx(className)}
        type={isVisible ? 'text' : 'password'}
        {...register}
        fullWidth
        label={label ? label : 'Password'}
        labelPlacement="outside"
        variant="bordered"
        size="md"
        onChange={(e) => setPassword(e.target.value)}
        classNames={{
          inputWrapper: 'border border-black',
          input: 'z-10',
          label: 'text-sm',
        }}
        data-focus={isVisible}
        data-filled={password.length > 0}
        endContent={
          <button
            type="button"
            onClick={() => setIsVisible(!isVisible)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10"
          >
            {isVisible ? (
              <IoEyeOffOutline className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <IoEyeOutline className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        }
      />

      {validation && (
        <div>
          <div>
            <ul className="flex gap-1 w-full">
              <li
                className={clsx(
                  'h-[0.125rem] w-full',
                  strength > 0 ? 'bg-green opacity-100' : 'bg-black opacity-30',
                )}
              ></li>
              <li
                className={clsx(
                  'h-[0.125rem] w-full',
                  strength > 1 ? 'bg-green opacity-100' : 'bg-black opacity-30',
                )}
              ></li>
              <li
                className={clsx(
                  'h-[0.125rem] w-full',
                  strength > 2 ? 'bg-green opacity-100' : 'bg-black opacity-30',
                )}
              ></li>
            </ul>
            <p className="text-sm font-light text-end opacity-50">
              Password Strength
            </p>
          </div>
          <div className="px-4">
            <p className="text-sm">Your password must contain:</p>
            <ul className="text-sm font-light">
              <li className="flex items-center gap-2">
                <FaCheckCircle
                  className={clsx(
                    lengthValid ? 'fill-green opacity-100' : 'opacity-40',
                    'w-3 h-3',
                  )}
                />
                <p className={clsx(numberValid ? 'opacity-100' : 'opacity-40')}>
                  Between 8 to 20 characters
                </p>
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle
                  className={clsx(
                    uppercaseValid ? 'fill-green opacity-100' : 'opacity-40',
                    'w-3 h-3',
                  )}
                />
                <p className={clsx(numberValid ? 'opacity-100' : 'opacity-40')}>
                  1 uppercase letter
                </p>
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle
                  className={clsx(
                    numberValid ? 'fill-green opacity-100' : 'opacity-40',
                    'w-3 h-3',
                  )}
                />
                <p className={clsx(numberValid ? 'opacity-100' : 'opacity-40')}>
                  1 or more numbers
                </p>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Password;
