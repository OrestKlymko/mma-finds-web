import Avatar from "./Avatar";

interface MailItemProps {
  name: string;
  date: string;
  message: string;
  avatar: string;
  isOnline?: boolean;
}

function MailItem({ name, date, message, avatar, isOnline }: MailItemProps) {
  return (
    <div className="flex items-center gap-4 p-4 hover:bg-gray-light cursor-pointer">
      <Avatar src={avatar} className="w-12" isOnline={isOnline} />
      <div>
        <h6>{name}</h6>
        <p>{message}</p>
      </div>
      <span className="ml-auto">{date}</span>
    </div>
  );
}

export default MailItem;
