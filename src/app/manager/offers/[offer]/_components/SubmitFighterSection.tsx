"use client";
import { Button } from "@nextui-org/button";
import { useModal } from "../../../../../components/Providers/ModalProvider";
import RejectParticipationModal from "../../../../../components/Modal/components/FightersModals/RejectParticipationModal";
import ApplyFighterModal from "../../../../../components/Modal/components/FightersModals/ApplyFighterModal";
import ChoseCreditOptionModal from "../../../../../components/Modal/components/ChoseCreditOptionModal";

function SubmitFighterSection() {
  const { openModal } = useModal();
  return (
    <section className=" px-4">
      <div className="max-w-screen-xl mx-auto bg-gray flex flex-col items-center gap-4 rounded-md p-4">
        <p className="text-base text-center">Congratulations!</p>
        <h6 className="text-center">
          <span className="text-green">Name Name</span> has been chosen for{" "}
          <br />
          the fight you submitted him for.
        </h6>
        <div className="flex gap-2 w-full max-w-[600px]">
          <Button
            className="capitalize flex-1"
            color="secondary"
            onPress={() =>
              openModal(
                <ApplyFighterModal name="Oktagon 53" date="21.02.1992" />
              )
            }
          >
            Confirm Participation
          </Button>
          <Button
            className="capitalize bg-black text-white flex-1"
            onPress={() => openModal(<ChoseCreditOptionModal />)}
          >
            Contact Oktagon MMA via Chat
          </Button>
        </div>
        <button
          className="text-red-600"
          onClick={() => openModal(<RejectParticipationModal />)}
        >
          Reject Participation
        </button>
      </div>
    </section>
  );
}

export default SubmitFighterSection;
