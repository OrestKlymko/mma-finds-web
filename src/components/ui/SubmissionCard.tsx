"use client";
import { RxCross2 } from "react-icons/rx";
import { useModal } from "../Providers/ModalProvider";
import { CancelSubmission } from "../Modal/components/SubmissionModals/CancelSubmission";

type SubmissionCardProps = {
  name: string;
  date: string;
  type: string;
  overviewDate: string;
};

function SubmissionCard({
  name,
  date,
  type,
  overviewDate,
}: SubmissionCardProps) {
  const { openModal } = useModal();
  return (
    <div className="flex items-center gap-4 py-8 px-12 cursor-pointer justify-between bg-gray">
      <div>
        <h4 className="uppercase mb-2">
          {name} | {date}
        </h4>
        <p className="font-medium">Type of submission: {type}</p>
        <p className="font-medium">Offer will be reviewed in: {overviewDate}</p>
      </div>
      <RxCross2
        className="text-red text-2xl"
        onClick={() => openModal(<CancelSubmission />)}
      />
    </div>
  );
}

export default SubmissionCard;
