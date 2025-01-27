import { Button } from "@nextui-org/button";
import FighterCard from "../../../ui/FighterCard";
import { ModalType, useModal } from "../../../Providers/ModalProvider";
import MainModalLayout from "../layout/MainModalLoayout";
import Link from "next/link";

function MyFightersModal() {
  const { modal, closeModal, openModal } = useModal();
  return (
    <MainModalLayout>
      <div className="pt-8 flex flex-col gap-4">
        <h3 className="text-center">My Fighters</h3>
        <FighterCard />
        <FighterCard />
        <FighterCard />
        <FighterCard />
        <FighterCard />
        <FighterCard />
        <FighterCard />
        <FighterCard />

        <Button
          className="bg-green text-white  mt-5"
          fullWidth
          onPress={() => openModal(ModalType.AddFighter)}
        >
          Create Fighter's Account
        </Button>
        <Link
          href="/plans"
          className="text-[0.875rem] block mx-auto"
          onClick={closeModal}
        >
          Continue to choose a plan
        </Link>
      </div>
    </MainModalLayout>
  );
}

export default MyFightersModal;
