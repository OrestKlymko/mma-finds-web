"use client";
import { Button } from "@nextui-org/button";
import FighterModalLayout from "../../layout/FighterModalLayout";
import { useModal } from "../../../Providers/ModalProvider";
import { useRouter } from "next/navigation";

function RejectParticipationModal() {
  const { openModal } = useModal();
  const onReject = () => {
    openModal(<RejectParticipationModal2 />);
  };
  return (
    <FighterModalLayout>
      <h6 className="text-red text-base">Reject Participation</h6>
      <p className="text-center">
        Before finalizing, are you sure about rejecting John's submission <br />
        for the upcoming fight?
      </p>
      <Button
        className="bg-red text-white text-sm max-w-[300px] w-full"
        onPress={onReject}
      >
        Reject Participation
      </Button>
    </FighterModalLayout>
  );
}

function RejectParticipationModal2() {
  const router = useRouter();
  const { closeModal } = useModal();

  const onClick = () => {
    router.push("/manager");
    closeModal();
  };
  return (
    <FighterModalLayout>
      <h6 className="text-base">We Are Sorry!</h6>
      <p className="text-center">
        The submission of John for this offer has been officially canceled.{" "}
        <br />
        We'll notify Oktagon about your decision.
      </p>
      <Button
        className=" text-white text-sm max-w-[300px] w-full"
        color="secondary"
      >
        Fight Offers Feed
      </Button>

      <button className="text-xs " onClick={onClick}>
        Return Home
      </button>
    </FighterModalLayout>
  );
}

export default RejectParticipationModal;
