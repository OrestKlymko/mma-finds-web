"use client";

import { ReactNode, useContext, useState, createContext } from "react";

export enum ModalType {
  SignIn = "SignIn",
  SignUp = "SignUp",
  ForgotPassword = "ForgotPassword",
  AddFighter = "AddFighter",
  Welcome = "Welcome",
  FightersList = "FightersList",
  CheckEmail = "CheckEmail",
}

const ModalContext = createContext<{
  modal: ModalType | null;
  openModal: (modalName: ModalType) => void;
  closeModal: () => void;
}>({
  modal: null,
  openModal: () => {},
  closeModal: () => {},
});

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modal, setModal] = useState<ModalType | null>(null);

  const openModal = (modalName: ModalType) => {
    setModal(modalName);
  };

  const closeModal = () => {
    setModal(null);
  };

  return (
    <ModalContext.Provider value={{ modal, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

// Custom hook to use the modal context
export const useModal = () => {
  return useContext(ModalContext);
};
