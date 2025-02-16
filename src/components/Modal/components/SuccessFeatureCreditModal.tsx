"use client";

import { IoMdClose } from "react-icons/io";
import { useModal } from "../../Providers/ModalProvider";
import { FaCheck } from "react-icons/fa6";

function SuccessFeatureCreditModal() {
  const { closeModal } = useModal();
  return (
    <div className="w-[800px] h-[450px] max-h-[90dvh] bg-white overflow-hidden rounded-3xl flex flex-col gap-4 relative items-center justify-center ">
      <button onClick={closeModal}>
        <IoMdClose className="absolute top-4 right-4 text-2xl text-black" />
      </button>

      <div className="w-[70px] aspect-square rounded-full bg-green flex items-center justify-center p-3">
        <FaCheck className="w-full h-full" color="white" />
      </div>
      <h3>Success!</h3>
      <p className="text-center">
        Your feature credits purchase was successful. <br />
        They&apos;ve been added to yourBalance Overview.
      </p>
    </div>
  );
}

export default SuccessFeatureCreditModal;
