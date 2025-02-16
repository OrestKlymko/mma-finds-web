"use client";
import { Button } from "@nextui-org/button";
import { ImGift } from "react-icons/im";
import { IoMdClose } from "react-icons/io";
import { useModal } from "../../Providers/ModalProvider";

function EarnModal() {
  const { closeModal } = useModal();
  return (
    <div className="w-[800px] h-[450px] max-h-[90dvh] bg-white overflow-hidden rounded-3xl flex flex-col gap-4 relative items-center justify-center ">
      <button onClick={closeModal}>
        <IoMdClose className="absolute top-4 right-4 text-2xl text-black" />
      </button>
      <ImGift className="text-green w-24 h-24" />
      <h3 className="text-green">Share & earn up to €100!</h3>
      <p className="text-center">
        Give your friends a 10% discount on their first order, <br />
        and you&apos;ll both enjoy the benefits.
      </p>
      <Button className="bg-green text-white text-sm max-w-[300px] w-full">
        Invite Friends
      </Button>
    </div>
  );
}

export default EarnModal;
