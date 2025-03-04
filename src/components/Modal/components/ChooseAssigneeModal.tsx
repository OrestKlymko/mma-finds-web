import Image from 'next/image';
import { useModal } from '../../Providers/ModalProvider';

function ChooseAssigneeModal() {
  const { setAssigneeID, closeModal } = useModal();

  const onClick = () => {
    setAssigneeID('John Doe');
    closeModal();
  };

  return (
    <div className="w-full max-w-[800px] h-full max-h-[600px] flex flex-col items-center gap-8 overflow-hidden rounded-3xl bg-white px-12 py-16">
      <h3>Assignee</h3>
      <p className="text-xl">Please select an assignee for this task.</p>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 overflow-y-auto w-full">
        <li onClick={onClick}>
          <AssigneeCard
            name="John Doe"
            avatar="/images/fighter-modal-bg.jpg"
            jobFunction="Fighter"
          />
        </li>
        <li onClick={onClick}>
          <AssigneeCard
            name="John Doe"
            avatar="/images/fighter-modal-bg.jpg"
            jobFunction="Fighter"
          />
        </li>
        <li onClick={onClick}>
          <AssigneeCard
            name="John Doe"
            avatar="/images/fighter-modal-bg.jpg"
            jobFunction="Fighter"
          />
        </li>
      </ul>
    </div>
  );
}

function AssigneeCard({
  name,
  avatar,
  jobFunction,
}: {
  name: string;
  avatar: string;
  jobFunction: string;
}) {
  return (
    <div className="flex  gap-2 p-4 rounded-md bg-gray-light  cursor-pointer">
      <div className="flex gap-2 items-center">
        <div className="rounded-full overflow-hidden h-12 aspect-square shrink-0">
          <Image
            className="w-full h-full object-cover object-center"
            src={avatar}
            width={24}
            height={24}
            alt="avatar"
          />
        </div>
        <div>
          <h6 className="text-green">{name}</h6>
          <p>Job Function: {jobFunction}</p>
        </div>
      </div>
    </div>
  );
}

export default ChooseAssigneeModal;
