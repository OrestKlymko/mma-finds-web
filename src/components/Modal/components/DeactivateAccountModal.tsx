"use client";
import { IoMdClose } from "react-icons/io";
import { useModal } from "../../Providers/ModalProvider";
import { Button } from "@nextui-org/button";

function DeactivateAccountModal() {
  const { closeModal } = useModal();
  return (
    <div className="w-[800px] h-[450px] max-h-[90dvh] bg-white overflow-hidden rounded-3xl flex flex-col gap-4 relative items-center justify-center ">
      <button onClick={closeModal}>
        <IoMdClose className="absolute top-4 right-4 text-2xl text-black" />
      </button>
      <h3 className="text-red">Deactivate Account</h3>
      <p className="text-center">
        Are you sure you want to deactivate your account? This action hides your
        profile and <br />
        fighters from MMA Finds, but allows you to reactivate later.
      </p>
      <Button className="bg-red text-white text-sm max-w-[300px] w-full">
        Deactivate Account
      </Button>
    </div>
  );
}

export default DeactivateAccountModal;
