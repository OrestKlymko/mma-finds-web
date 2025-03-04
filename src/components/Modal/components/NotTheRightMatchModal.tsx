import { Button } from '@nextui-org/button';

import FighterModalLayout from '../layout/FighterModalLayout';

function NotTheRightMatchModal() {
  return (
    <FighterModalLayout>
      <p>Not the Right Match!</p>
      <h6 className="text-red text-base">
        Jon Doe&apos;s Manager Rejects His Participation!
      </h6>
      <p className="text-center">
        Unfortunately, Jon Doe&apos;s manager has rejected his participation in
        the upcoming fight at your event. <br />
        Don&apos;t worry, there are more opportunities ahead. Choose another
        talented fighter from the list of <br />
        submissions for your event!
      </p>

      <div className="flex flex-col gap-2 items-center">
        <Button
          className="bg-gray-dark text-black text-sm max-w-[300px] w-full"
          color="secondary"
        >
          See the List
        </Button>
      </div>
    </FighterModalLayout>
  );
}

export default NotTheRightMatchModal;
