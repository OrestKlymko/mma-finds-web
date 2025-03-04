'use client';

import { IoMdClose } from 'react-icons/io';
import { useModal } from '../../Providers/ModalProvider';
import { FaCheck } from 'react-icons/fa6';
import { Button } from '@nextui-org/button';

function FighterHasBeenSelected() {
  const { closeModal } = useModal();
  return (
    <div className="w-[800px] h-[450px] max-h-[90dvh] bg-white overflow-hidden rounded-3xl flex flex-col gap-4 relative items-center justify-center ">
      <button onClick={closeModal}>
        <IoMdClose className="absolute top-4 right-4 text-2xl text-black" />
      </button>

      <div className="w-[70px] aspect-square rounded-full bg-green flex items-center justify-center p-3">
        <FaCheck className="w-full h-full" color="white" />
      </div>
      <p>Thank You!</p>
      <h3>
        <span className="text-green">John &quot;The Punisher&quot; Smith</span>{' '}
        has been selected for a fight!{' '}
      </h3>
      <p className="text-center">
        Their manager will be notified shortly. <br />
        Stay tuned for confirmation of John&quot;s participation.
      </p>
      <Button className="max-w-[300px]" fullWidth color="secondary">
        Continue
      </Button>
    </div>
  );
}

export default FighterHasBeenSelected;
