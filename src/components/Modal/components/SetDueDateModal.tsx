'use client';
import { IoMdClose } from 'react-icons/io';
import { useModal } from '../../Providers/ModalProvider';
import { RiCalendarScheduleLine } from 'react-icons/ri';
import { Button } from '@nextui-org/button';
import { useState } from 'react';
import { Select, SelectItem } from '@heroui/select';
import PublicOfferHasBeenPublishedModal from './PublicOfferHasBeenPublishedModal';

const items = [
  { key: '1', label: '1' },
  { key: '2', label: '2' },
];

function SetDueDate({ isRenew }: { isRenew?: boolean }) {
  const { closeModal, openModal } = useModal();
  const [value, setValue] = useState('');

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };

  const handelClick = () => {
    openModal(<PublicOfferHasBeenPublishedModal />);
  };
  return (
    <div className="w-[800px] h-[450px] max-h-[90dvh] bg-white overflow-hidden rounded-3xl flex flex-col gap-4 relative items-center justify-center ">
      <button onClick={closeModal}>
        <IoMdClose className="absolute top-4 right-4 text-2xl text-black" />
      </button>
      <RiCalendarScheduleLine className="text-blck w-24 h-24" />
      <h3 className="text-black">
        {isRenew ? 'Set a new due date!' : 'Set a Due Date!'}
      </h3>
      <p className="text-center">
        {isRenew ? (
          <>
            Please extend the due date for the current fight offer,
            <br />
            allowing managers to submit their applications on time.
          </>
        ) : (
          <>
            It’s important to set a due date by which <br />
            managers must submit their fighter applications.
          </>
        )}
        It’s important to set a due date by which <br />
        managers must submit their fighter applications.
      </p>
      <Select
        className="max-w-[300px] w-full"
        onChange={handleSelectionChange}
        selectedKeys={value}
        variant="bordered"
        label="Set a Due Date*"
        labelPlacement="outside"
        fullWidth
        size="md"
        classNames={{
          selectorIcon: 'scale-[1.4] rotate-[270deg]',
          trigger: 'border border-black',
          label: 'text-[0.75rem]',
        }}
      >
        {items.map((item) => (
          <SelectItem key={item.key}>{item.label}</SelectItem>
        ))}
      </Select>
      <Button
        onPress={handelClick}
        className="bg-black text-white text-sm max-w-[300px] w-full"
      >
        Create Public Fight Offer
      </Button>
    </div>
  );
}

export default SetDueDate;
