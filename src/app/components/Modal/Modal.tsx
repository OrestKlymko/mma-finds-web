"use client";

import Image from "next/image";
import { ModalType, useModal } from "../../Providers/ModalProvider";
import Portal from "../Portal/Portal";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import { Button } from "@nextui-org/button";
import { IoIosArrowBack } from "react-icons/io";
import { div } from "framer-motion/client";
import CreateFighterForm from "../CreateFighterForm/CreateFighterForm";

const Modal = () => {
  const { modal, closeModal, openModal } = useModal();

  if (!modal) return null; // No modal to show

  return (
    <Portal onClose={closeModal}>
      {(modal === ModalType.SignUp || modal === ModalType.SignIn) && (
        <div className="grid grid-cols-2 overflow-hidden rounded-3xl bg-white">
          <div className="w-[400px] h-[650px]">
            <Image
              className="block object-cover object-right h-full"
              src="/images/fighter-modal-bg.jpg"
              width={400}
              height={600}
              alt="fighter"
            />
          </div>
          <div className="w-[400px] h-[650px] bg-white overflow-y-auto p-8">
            <button
              className="flex items-center gap-1 mb-5"
              onClick={closeModal}
            >
              <IoIosArrowBack className="w-3 h-3" />
              <span className="text-[0.75rem]">Back</span>
            </button>

            {modal === ModalType.SignIn && <SignIn />}
            {modal === ModalType.SignUp && <SignUp />}
          </div>
        </div>
      )}

      {modal === ModalType.Welcome && (
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
      )}

      {modal === ModalType.AddFighter && (
        <div className="w-[800px] h-[650px] bg-white overflow-hidden rounded-3xl flex flex-col">
          <div
            className="bg-center bg-cover p-5"
            style={{
              background:
                "linear-gradient(rgba(10, 10, 10, 0.6), rgba(10, 10, 10, 0.6)), url('/images/fighter-modal-bg.jpg')",
            }}
          >
            <h3 className="text-white text-center">Create Fighter's Profile</h3>
          </div>
          <div className="p-11 overflow-y-auto">
            <CreateFighterForm />
          </div>
        </div>
      )}
    </Portal>
  );
};

export default Modal;
