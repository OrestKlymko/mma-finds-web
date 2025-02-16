"use client";
import { IoIosArrowForward } from "react-icons/io";
import { useModal } from "../../../../../components/Providers/ModalProvider";
import DeactivateAccountModal from "../../../../../components/Modal/components/DeactivateAccountModal";
import DeleteAccountModal from "../../../../../components/Modal/components/DeleteAccountModal";

function Page() {
  const { openModal } = useModal();
  return (
    <div className="flex flex-col gap-6">
      <p className="max-w-[600px]">
        If you need a break, you can simply deactivate your account. And if you
        decide to permanently leave MMA Finds, you have the option to delete
        your account.
      </p>
      <div className="flex gap-6">
        <div className="w-full flex-1 gap-7 rounded-md flex justify-between items-center bg-gray-light px-8 py-6">
          <div className="flex flex-col gap-2">
            <h6 className="text-red">Deactivate Account</h6>
            <p>
              Choose to deactivate your account for a temporary break. This
              action hides your profile and fighters from MMA Finds, but allows
              you to reactivate later.
            </p>
          </div>
          <IoIosArrowForward
            className="shrink-0 text-base cursor-pointer text-red"
            onClick={() => openModal(<DeactivateAccountModal />)}
          />
        </div>
        <div className="w-full flex-1 gap-7 rounded-md flex justify-between items-center bg-gray-light px-8 py-6">
          <div className="flex flex-col gap-2">
            <h6 className="text-red">Delete Account</h6>
            <p>
              Opt for a permanent deletion to completely erase your data from
              MMA Finds. Be aware that this is a final step; you cannot recover
              any files or information once your account is deleted.
            </p>
          </div>
          <IoIosArrowForward
            className="shrink-0 text-base cursor-pointer text-red"
            onClick={() => openModal(<DeleteAccountModal />)}
          />
        </div>
      </div>
    </div>
  );
}

export default Page;
