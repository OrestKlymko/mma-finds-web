import { Button } from '@nextui-org/button';
import FighterModalLayout from '../layout/FighterModalLayout';

function YouReachMaxAmount() {
  return (
    <FighterModalLayout>
      <h6 className="text-green text-base">Opps!</h6>
      <p className="text-center">
        You&apos;ve reached the maximum number of events per year <br />
        for which you are allowed to post fight offers with your current
        subscription plan.
      </p>

      <div className="flex flex-col gap-2 items-center">
        <div className="p-3 bg-gray-light rounded-md">
          <p>You can publish new events starting from: 4.3.2025</p>
        </div>
        <div className="flex gap-2 items-center w-full max-w-[300px] justify-center">
          <div className="w-full h-[1px] bg-black"></div>
          <p className="text-sm">or</p>
          <div className="w-full h-[1px] bg-black"></div>
        </div>
        <Button
          className="bg-green text-white text-sm max-w-[300px] w-full"
          color="secondary"
        >
          Upgrade Plan
        </Button>
      </div>
    </FighterModalLayout>
  );
}

export default YouReachMaxAmount;
