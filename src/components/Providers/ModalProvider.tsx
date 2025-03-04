'use client';

import { ReactNode, useContext, useState, createContext } from 'react';

export enum ModalType {
  SignIn = 'SignIn',
  SignUp = 'SignUp',
  ForgotPassword = 'ForgotPassword',
  AddFighter = 'AddFighter',
  Welcome = 'Welcome',
  FightersList = 'FightersList',
  CheckEmail = 'CheckEmail',
  RejectParticipation = 'RejectParticipation',
  WeAreSorry = 'WeAreSorry',
  ApplyAFighter = 'ApplyAFighter',
  FeatureFighter = 'FeatureFighter',
}

const ModalContext = createContext<{
  modal: ReactNode | null;
  openModal: (modal: ReactNode | ModalType) => void;
  closeModal: () => void;
  modalData: {
    eventID?: string;
    assigneeID?: string;
  };
  setEventID: (eventID: string) => void;
  setAssigneeID: (assigneeID: string) => void;
}>({
  modal: null,
  openModal: () => {},
  closeModal: () => {},
  modalData: {
    eventID: '',
    assigneeID: '',
  },
  setEventID: () => {},
  setAssigneeID: () => {},
});

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modal, setModal] = useState<ReactNode | ModalType | null>(null);
  const [modalData, setModalData] = useState<{
    eventID?: string;
    assigneeID?: string;
  }>({});

  const openModal = (modal: ReactNode | ModalType) => {
    setModal(modal);
  };

  const closeModal = () => {
    setModal(null);
  };

  const setEventID = (eventID: string) => {
    setModalData({ eventID });
  };

  const setAssigneeID = (assigneeID: string) => {
    setModalData({ assigneeID });
  };

  return (
    <ModalContext.Provider
      value={{
        modal,
        openModal,
        closeModal,
        setEventID,
        modalData,
        setAssigneeID,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

// Custom hook to use the modal context
export const useModal = () => {
  return useContext(ModalContext);
};
