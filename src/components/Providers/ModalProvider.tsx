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
  RejectParticipation = "RejectParticipation",
  WeAreSorry = "WeAreSorry",
  ApplyAFighter = "ApplyAFighter",
  FeatureFighter = "FeatureFighter",
}

const ModalContext = createContext<{
  modal: ReactNode | null;
  openModal: (modal: ReactNode | ModalType) => void;
  closeModal: () => void;
}>({
  modal: null,
  openModal: () => {},
  closeModal: () => {},
});

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modal, setModal] = useState<ReactNode | ModalType | null>(null);

  const openModal = (modal: ReactNode | ModalType) => {
    setModal(modal);
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
