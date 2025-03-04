import clsx from 'clsx';
import Avatar from './Avatar';

interface MailItemProps {
  name: string;
  date: string;
  message: string;
  avatar: string;
  isOnline?: boolean;
  isActive?: boolean;
}

function MailItem({
  name,
  date,
  message,
  avatar,
  isOnline,
  isActive,
}: MailItemProps) {
  return (
    <div
      className={clsx(
        'flex items-center gap-4 p-4 hover:bg-gray-light cursor-pointer w-full',
        {
          'bg-gray-light': isActive,
        },
      )}
    >
      <Avatar src={avatar} className="w-12" isOnline={isOnline} />
      <div>
        <h6>{name}</h6>
        <p className={clsx('truncate', { 'font-medium': isActive })}>
          {message}
        </p>
      </div>
      <span className="ml-auto text-gray-text">{date}</span>
    </div>
  );
}

export default MailItem;
