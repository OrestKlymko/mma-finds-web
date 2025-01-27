import Image from "next/image";
import { ModalType, useModal } from "../../../Providers/ModalProvider";
import { Button } from "@nextui-org/button";

function WelcomeModal() {
  const { closeModal, openModal } = useModal();

  return (
    <div className="w-[800px] h-fit bg-white overflow-hidden rounded-3xl flex flex-col items-center justify-center gap-4 py-20">
      <div className="w-20 aspect-square overflow-hidden rounded-full">
        <Image
          className="block object-cover object-center h-full w-full"
          src="/images/fighter-modal-bg.jpg"
          width={80}
          height={80}
          alt="fighter"
        />
      </div>
      <p>Welcome, name!</p>
      <h2>It's Time to Add Fighters</h2>
      <p className="text-center">
        It is a friendly reminder to create profiles for the fighters <br />
        you represent and add them to your account.
      </p>
      <Button
        className="bg-green text-white max-w-[340px] mt-5"
        fullWidth
        onPress={() => openModal(ModalType.AddFighter)}
      >
        Create Fighter's Account
      </Button>
      <button type="button" className="capitalize" onClick={closeModal}>
        add fighters later
      </button>
    </div>
  );
}

export default WelcomeModal;
