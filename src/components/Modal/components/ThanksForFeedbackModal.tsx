'use client';

import { IoMdClose } from 'react-icons/io';
import { useModal } from '../../Providers/ModalProvider';
import { FaCheck } from 'react-icons/fa6';

function ThanksForFeedbackModal() {
  const { closeModal } = useModal();
  return (
    <div className="w-[800px] h-[450px] max-h-[90dvh] bg-white overflow-hidden rounded-3xl flex flex-col gap-4 relative items-center justify-center ">
      <button onClick={closeModal}>
        <IoMdClose className="absolute top-4 right-4 text-2xl text-black" />
      </button>

      <div className="w-[70px] aspect-square rounded-full bg-green flex items-center justify-center p-3">
        <FaCheck className="w-full h-full" color="white" />
      </div>
      <h3>Thanks for sharing an idea!</h3>
      <p className="text-center">
        Your contribution is valued, and we appreciate your effort in helping us
        enhance the user <br />
        experience. We'll carefully consider your suggestion to make our app
        even better.
      </p>
    </div>
  );
}

export default ThanksForFeedbackModal;
