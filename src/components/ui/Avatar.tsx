import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { FaPen } from 'react-icons/fa6';

function Avatar({
  src,
  isOnline,
  className,
  isEditable,
  fighter,
}: {
  src?: string;
  isOnline?: boolean;
  isEditable?: boolean;
  className?: string;
  fighter?: string;
}) {
  return (
    <div className="relative h-full">
      <div
        className={`rounded-full aspect-square overflow-hidden ${className}`}
      >
        <Image
          className="w-full h-full object-cover object-center"
          width={128}
          height={128}
          src={src ?? '/images/avatar.png'}
          alt="avatar"
        />
      </div>

      {!isEditable && (
        <div
          className={clsx(
            'absolute bottom-0 right-0 w-1/4 h-1/4 rounded-full border-2 border-white',
            {
              'bg-gray-dark': !isOnline,
              'bg-green': isOnline,
            },
          )}
        ></div>
      )}

      {isEditable && fighter && (
        <Link
          href={`/manager/fighters/${fighter}/edit`}
          className={clsx(
            'absolute bottom-0 right-0 w-1/4 h-1/4 rounded-full border-2 border-white bg-green flex items-center justify-center p-2',
          )}
        >
          <FaPen className="text-white w-full h-full" />
        </Link>
      )}
    </div>
  );
}

export default Avatar;
