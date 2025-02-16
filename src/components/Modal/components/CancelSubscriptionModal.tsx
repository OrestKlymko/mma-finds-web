"use client";
import { IoMdClose } from "react-icons/io";
import { useModal } from "../../Providers/ModalProvider";
import { Button } from "@nextui-org/button";

function CancelSubscriptionModal() {
  const { closeModal } = useModal();
  return (
    <div className="w-[800px] h-[450px] max-h-[90dvh] bg-white overflow-hidden rounded-3xl flex flex-col gap-8 relative items-center justify-center ">
      <button onClick={closeModal}>
        <IoMdClose className="absolute top-4 right-4 text-2xl text-black" />
      </button>
      <h3>Cancel Subscription</h3>
      <p className="text-center">
        Are you sure you want to cancel your subscription? Canceling your
        subscription <br />
        will downgrade you to the free version of our app, resulting in the loss
        of all <br />
        premier features included in your current subscription plan.
      </p>
      <div className="flex flex-col items-center gap-4 w-full">
        <Button fullWidth className="max-w-[300px]" color="secondary">
          Keep Current Subscription
        </Button>
        <button className="text-red">Cancel Subscription</button>
      </div>
    </div>
  );
}

export default CancelSubscriptionModal;
