import { IoMdClose } from 'react-icons/io';
import { useModal } from '../../Providers/ModalProvider';
import { Button } from '@nextui-org/button';
import { FaCheck } from 'react-icons/fa6';

function PublicOfferHasBeenPublishedModal() {
  const { closeModal } = useModal();

  return (
    <div className="w-[800px] h-[450px] max-h-[90dvh] bg-white overflow-hidden rounded-3xl flex flex-col gap-4 relative items-center justify-center ">
      <button onClick={closeModal}>
        <IoMdClose className="absolute top-4 right-4 text-2xl text-black" />
      </button>
      <div className="w-[70px] aspect-square rounded-full bg-green flex items-center justify-center p-3">
        <FaCheck className="w-full h-full" color="white" />
      </div>
      <p>Exciting news!</p>
      <h3 className="text-black">
        Your public fight offer has been published!
      </h3>
      <p className="text-center">
        The public fight offer is now live, and we&apos;re awaiting <br />
        submissions from the best fighters around!
      </p>

      <Button className="bg-green text-white text-sm max-w-[300px] w-full">
        Continue
      </Button>
    </div>
  );
}

export default PublicOfferHasBeenPublishedModal;
