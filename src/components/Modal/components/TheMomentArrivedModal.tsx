'use client';

import { Button } from '@nextui-org/button';

import FighterModalLayout from '../layout/FighterModalLayout';

function TheMomentArrivedModal() {
  return (
    <FighterModalLayout>
      <div className="flex flex-col items-center gap-1">
        <p>The moment has arrived!</p>
        <h6 className="text-green capitalize text-base">
          Your list of submitted fighters in now ready!
        </h6>
      </div>
      <p className="text-center">
        Your complete list of submitted fighters is now ready for review. <br />
        Take a look and choose the perfect match!
      </p>
      <Button className="bg-green text-white text-sm w-full max-w-[300px]">
        See the List
      </Button>
    </FighterModalLayout>
  );
}

export default TheMomentArrivedModal;
