"use client";
import { Button } from "@nextui-org/button";
import { useModal } from "../../../../../components/Providers/ModalProvider";
import CancelSubscriptionModal from "../../../../../components/Modal/components/CancelSubscriptionModal";
import ChangeSubscriptionModal from "../../../../../components/Modal/components/ChangeSubscripionModal";
import PaymentHistory from "./_components/PaymentHistory";

function Page() {
  return (
    <div className="">
      <h6 className="mb-6">Your Current Subscription Plan</h6>
      <div className="flex flex-col md:flex-row gap-12 mb-24">
        <CurrentPlan />
        <NextPayment />
      </div>
      <div>
        <PaymentHistory />
      </div>
    </div>
  );
}

function CurrentPlan() {
  const { openModal } = useModal();
  const currentPlan = {
    title: "Annual Standard Plan",
    end: "1.1.2025",
    price: "199.99",
  };
  return (
    <div className="flex flex-col gap-6 flex-1">
      <div>
        <div className="flex justify-between items-center bg-gray-light py-10 px-6">
          <div>
            <h6>{currentPlan.title}</h6>
            <p>End on: {currentPlan.end}</p>
          </div>
          <h6>{currentPlan.price}$</h6>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button
          color="secondary"
          onPress={() => openModal(<ChangeSubscriptionModal />)}
        >
          Change Subscription Plan
        </Button>
        <button
          className="text-red"
          onClick={() => openModal(<CancelSubscriptionModal />)}
        >
          Cancel Subscription
        </button>
      </div>
    </div>
  );
}

function NextPayment() {
  const currentPlan = {
    end: "1.1.2025",
    price: "199.99",
  };
  return (
    <div className="flex flex-col gap-6 flex-1">
      <div>
        <div className="flex justify-between items-center bg-gray-light py-10 px-6">
          <div>
            <h6>Next Payment</h6>
            <p>On: {currentPlan.end}</p>
          </div>
          <h6>{currentPlan.price}$</h6>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button className="bg-[#3D3D3D]" color="secondary">
          Manage Payments
        </Button>
      </div>
    </div>
  );
}

export default Page;
