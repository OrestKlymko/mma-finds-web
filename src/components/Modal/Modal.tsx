"use client";

import { ModalType, useModal } from "../Providers/ModalProvider";
import Portal from "../Portal/Portal";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import CreateFighterForm from "../CreateFighterForm/CreateFighterForm";
import MainModalLayout from "./layout/MainModalLoayout";
import CreateFitherModalLayout from "./layout/CreateFitherModalLayout";
import WelcomeModal from "./components/WelcomeModal";
import MyFightersModal from "./components/MyFightersModal";
import CheckYourEmail from "./components/CheckYourEmail";
import ResetPassword from "./components/ResetPassword";

const ModalContent = ({ type }: { type: ModalType }) => {
  switch (type) {
    case ModalType.SignIn:
      return <SignIn />;
    case ModalType.SignUp:
      return <SignUp />;
    case ModalType.ForgotPassword:
      return <ResetPassword />;
    case ModalType.AddFighter:
      return <CreateFighterForm />;
    case ModalType.FightersList:
      return <MyFightersModal />;
    case ModalType.CheckEmail:
      return <CheckYourEmail />;
    default:
      return null;
  }
};

const Modal = () => {
  const { modal, closeModal } = useModal();

  if (!modal) return null;

  return (
    <Portal onClose={closeModal}>
      {(modal === ModalType.SignUp ||
        modal === ModalType.SignIn ||
        modal === ModalType.ForgotPassword ||
        modal === ModalType.FightersList) && (
        <MainModalLayout>
          <ModalContent type={modal} />
        </MainModalLayout>
      )}

      {modal === ModalType.Welcome && <WelcomeModal />}

      {modal === ModalType.AddFighter && (
        <CreateFitherModalLayout>
          <CreateFighterForm />
        </CreateFitherModalLayout>
      )}
    </Portal>
  );
};

export default Modal;
