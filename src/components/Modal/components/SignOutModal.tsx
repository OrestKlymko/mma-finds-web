"use client";
import { IoMdClose } from "react-icons/io";
import { useModal } from "../../Providers/ModalProvider";
import { Button } from "@nextui-org/button";
import { IoLogOutOutline } from "react-icons/io5";

function SignOutModal() {
  const { closeModal } = useModal();
  return (
    <div className="w-[800px] h-[450px] max-h-[90dvh] bg-white overflow-hidden rounded-3xl flex flex-col gap-4 relative items-center justify-center ">
      <button onClick={closeModal}>
        <IoMdClose className="absolute top-4 right-4 text-2xl text-black" />
      </button>
      <IoLogOutOutline className="text-green w-24 h-24" />
      <h3>Are you sure you want to sign out?</h3>
      <p className="text-center">
        You will be signed out of your account and will need to sign in again to{" "}
        <br />
        access your personalized profile.
      </p>
      <Button
        className="bg-green text-white text-sm max-w-[300px] w-full"
        onPress={closeModal}
      >
        Stay Signed In
      </Button>
      <button className="text-red">Sign Out</button>
    </div>
  );
}

export default SignOutModal;
