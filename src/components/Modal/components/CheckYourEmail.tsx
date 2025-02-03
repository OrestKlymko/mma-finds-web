import { Button } from "@nextui-org/button";
import { useModal } from "../../Providers/ModalProvider";
import { IoIosArrowBack } from "react-icons/io";
import { FaCheck } from "react-icons/fa";

function CheckYourEmail() {
  const { closeModal } = useModal();
  return (
    <>
      <button
        className="flex items-center gap-1 mb-12"
        onClick={() => closeModal()}
      >
        <IoIosArrowBack className="w-3 h-3" />
        <span className="text-[0.75rem]">Back</span>
      </button>
      <div className="pt-8 flex flex-col items-center gap-12 justify-center">
        <div>
          <h3 className="text-center">Check your email</h3>
          <p>
            We have send you a reset password link to your registered email
            address{" "}
          </p>
        </div>
        <div className="w-1/4 aspect-square rounded-full bg-green flex items-center justify-center p-6">
          <FaCheck className="w-full h-full" color="white" />
        </div>
        <div className="flex flex-col gap-3 w-full">
          <Button className="bg-black text-white" fullWidth>
            Go to Email
          </Button>
          <Button className="bg-zinc-700 text-white" fullWidth>
            Resent Link
          </Button>
        </div>
      </div>
    </>
  );
}

export default CheckYourEmail;
