import { SubmitHandler, useForm } from "react-hook-form";
import { useModal } from "../../Providers/ModalProvider";
import { IoIosArrowBack } from "react-icons/io";
import ConfirmInput from "../../ui/inputs/ConfirmInput";
import { Button } from "@nextui-org/button";
import Password from "../../ui/inputs/Pasword";

type Inputs = {
  password: string;
  confirmPassword: string;
};

function ResetPassword() {
  const {
    register,

    handleSubmit,
    getValues,
  } = useForm<Inputs>();
  const { closeModal } = useModal();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data, "data");
  };

  return (
    <>
      <button
        className="flex items-center gap-1 mb-5"
        onClick={() => closeModal}
      >
        <IoIosArrowBack className="w-3 h-3" />
        <span className="text-[0.75rem]">Back</span>
      </button>
      <div className="pt-8 flex flex-col gap-4 justify-center">
        <div>
          <h3 className="capitalize">Reset your password</h3>
          <p>Enter your new password</p>
        </div>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
          <Password
            validation
            register={register("password", {
              required: true,
            })}
          />
          <ConfirmInput
            isPassword
            checkValue={() => getValues("confirmPassword")}
            label="Confirm Password*"
            register={register("confirmPassword", {
              required: true,
              validate: (value) => value === getValues("password"),
            })}
          ></ConfirmInput>
          <Button className="bg-black text-white  mt-5" fullWidth>
            Recover Password
          </Button>
        </form>
      </div>
    </>
  );
}

export default ResetPassword;
