"use client";
import { IoMdClose } from "react-icons/io";
import { useModal } from "../../Providers/ModalProvider";
import PlansList from "../../Plans-list/PlansList";
import { useUser } from "../../Providers/UserProvider";

function ChangeSubscriptionModal() {
  const { user } = useUser();
  const { closeModal } = useModal();
  return (
    <div className="p-6 max-h-[90dvh] max-w-[95%] h-full bg-white overflow-y-auto rounded-3xl flex flex-col gap-8 relative items-center justify-center ">
      <button onClick={closeModal}>
        <IoMdClose className="absolute top-4 right-4 text-2xl text-black" />
      </button>
      <div className="h-full">
        <div className="flex flex-col items-center">
          <p>Hello, {user?.name}!</p>
          <h3>Choose your plan</h3>
        </div>
        <PlansList isAuthorized />
      </div>
    </div>
  );
}

export default ChangeSubscriptionModal;
