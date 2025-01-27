"use client";

import { ModalType, useModal } from "../../Providers/ModalProvider";
import Portal from "../Portal/Portal";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import { IoIosArrowBack } from "react-icons/io";
import CreateFighterForm from "../CreateFighterForm/CreateFighterForm";
import MainModalLayout from "./layout/MainModalLoayout";
import CreateFitherModalLayout from "./layout/CreateFitherModalLayout";
import WelcomeModal from "./components/WelcomeModal";
import MyFightersModal from "./components/MyFightersModal";

const Modal = () => {
  const { modal, closeModal } = useModal();

  if (!modal) return null; // No modal to show

  return (
    <Portal onClose={closeModal}>
      {(modal === ModalType.SignUp || modal === ModalType.SignIn) && (
        <MainModalLayout>
          <button className="flex items-center gap-1 mb-5" onClick={closeModal}>
            <IoIosArrowBack className="w-3 h-3" />
            <span className="text-[0.75rem]">Back</span>
          </button>
          {modal === ModalType.SignIn && <SignIn />}
          {modal === ModalType.SignUp && <SignUp />}
        </MainModalLayout>
      )}

      {modal === ModalType.Welcome && <WelcomeModal />}

      {modal === ModalType.AddFighter && (
        <CreateFitherModalLayout>
          <CreateFighterForm />
        </CreateFitherModalLayout>
      )}

      {modal === ModalType.FightersList && <MyFightersModal />}
    </Portal>
  );
};

export default Modal;
