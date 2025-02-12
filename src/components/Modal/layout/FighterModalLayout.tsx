import Image from "next/image";
import { ReactNode } from "react";
import { IoMdClose } from "react-icons/io";
import { useModal } from "../../Providers/ModalProvider";

function FighterModalLayout({ children }: { children: ReactNode }) {
  const { closeModal } = useModal();
  return (
    <div className="w-[800px] h-[550px] max-h-[90dvh] bg-white overflow-hidden rounded-3xl flex flex-col relative">
      <button onClick={closeModal}>
        <IoMdClose className="absolute top-4 right-4 text-2xl text-white" />
      </button>
      <div className="h-[45%] w-full overflow-hidden">
        <Image
          className="w-full h-auto object-cover object-center"
          src="/images/fighter-modal-bg.jpg"
          width={800}
          height={325}
          alt="modal-image"
        />
      </div>
      <div className="h-[55%] py-7 px-4 flex flex-col items-center justify-center  gap-4">
        {children}
      </div>
    </div>
  );
}

export default FighterModalLayout;
