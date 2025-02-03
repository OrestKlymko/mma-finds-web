import { Button } from "@nextui-org/button";
import { ModalType, useModal } from "../../Providers/ModalProvider";
import Link from "next/link";
import FighterCard from "../../ui/FighterCard";

function MyFightersModal() {
  const { closeModal, openModal } = useModal();
  return (
    <div className="pt-8 flex flex-col gap-4">
      <h3 className="text-center">My Fighters</h3>
      <FighterCard />

      <Button
        className="bg-green text-white  mt-5"
        fullWidth
        onPress={() => openModal(ModalType.AddFighter)}
      >
        Create Fighter&apos;s Account
      </Button>
      <Link
        href="/plans"
        className="text-[0.875rem] block mx-auto"
        onClick={closeModal}
      >
        Continue to choose a plan
      </Link>
    </div>
  );
}

export default MyFightersModal;
