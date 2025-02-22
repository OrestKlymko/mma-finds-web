'use client';

import { IoMdClose } from 'react-icons/io';
import { useModal } from '../../Providers/ModalProvider';
import { FaCheck } from 'react-icons/fa6';

function ThanksForReportModal() {
  const { closeModal } = useModal();
  return (
    <div className="w-[800px] h-[450px] max-h-[90dvh] bg-white overflow-hidden rounded-3xl flex flex-col gap-4 relative items-center justify-center ">
      <button onClick={closeModal}>
        <IoMdClose className="absolute top-4 right-4 text-2xl text-black" />
      </button>

      <div className="w-[70px] aspect-square rounded-full bg-green flex items-center justify-center p-3">
        <FaCheck className="w-full h-full" color="white" />
      </div>
      <h3>Thanks for letting us know!</h3>
      <p className="text-center">
        Your vigilance is crucial in maintaining the quality of our app. We
        appreciate your effort, and rest <br />
        assured, our team is working diligently to address and resolve the
        issue.
      </p>
    </div>
  );
}

export default ThanksForReportModal;
