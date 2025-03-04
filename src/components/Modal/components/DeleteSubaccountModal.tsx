'use client';
import { IoMdClose } from 'react-icons/io';
import { useModal } from '../../Providers/ModalProvider';
import { Button } from '@nextui-org/button';

function DeleteSubaccountModal() {
  const { closeModal } = useModal();
  return (
    <div className="w-[800px] h-[450px] max-h-[90dvh] bg-white overflow-hidden rounded-3xl flex flex-col gap-4 relative items-center justify-center ">
      <button onClick={closeModal}>
        <IoMdClose className="absolute top-4 right-4 text-2xl text-black" />
      </button>
      <h3 className="text-red">Delete Account</h3>
      <p className="text-center">
        Are you sure you want to delete this account? Be aware that this is a
        final step; <br />
        all tasks for this account will be removed as well as the whole account
        and its details.
      </p>
      <Button className="bg-red text-white text-sm max-w-[300px] w-full">
        Delete Account
      </Button>
    </div>
  );
}

export default DeleteSubaccountModal;
