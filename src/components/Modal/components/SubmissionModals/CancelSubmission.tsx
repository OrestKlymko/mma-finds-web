import { Button } from "@nextui-org/button";
import FighterModalLayout from "../../layout/FighterModalLayout";
import Link from "next/link";
import { useModal } from "../../../Providers/ModalProvider";
import { RxCross2 } from "react-icons/rx";

export function CancelSubmission() {
  const { openModal } = useModal();
  return (
    <FighterModalLayout>
      <h6 className="text-red text-base">Cancel Submission</h6>
      <p className="text-center">
        Before finalizing, are you sure about canceling John&apos;s submission
        for the upcoming fight?
      </p>
      <Button className="bg-[#3D3D3D] text-white text-sm max-w-[300px] w-full">
        Keep Submission
      </Button>
      <button
        className="text-xs text-red"
        onClick={() => openModal(<SubmissionCanceledModal />)}
      >
        Cancel Submission
      </button>
    </FighterModalLayout>
  );
}

function SubmissionCanceledModal() {
  return (
    <FighterModalLayout>
      <div className="w-[70px] aspect-square rounded-full bg-red flex items-center justify-center p-3">
        <RxCross2 className="w-full h-full" color="white" />
      </div>
      <h6 className="text-base text-red">Submission Canceled</h6>
      <p className="text-center">
        Submission for John has been officially canceled. The promotion team
        will be notified accordingly. <br />
        Thank you for your confirmation.
      </p>
      <Link className="w-full flex justify-center" href={"/"}>
        <Button className="bg-[#3D3D3D] text-white mx-auto text-sm max-w-[300px] w-full">
          Home
        </Button>
      </Link>
    </FighterModalLayout>
  );
}
