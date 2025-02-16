import clsx from "clsx";
import { useState } from "react";
import CustomInput from "../../ui/inputs/CustomInput";
import PaymentMethod from "../../ui/inputs/PaymentMethod";
import { Button } from "@nextui-org/button";
import { useModal } from "../../Providers/ModalProvider";
import SuccessFeatureCreditModal from "./SuccessFeatureCreditModal";

const options = [
  { key: "1 Feature Credit", price: "€9,99" },
  { key: "5 Feature Credit", price: "€39,99" },
  { key: "10 Feature Credit", price: "€69,99" },
];

function ChoseCreditOptionModal() {
  const [option, setOption] = useState({
    key: "1 Feature Credit",
    price: "€9,99",
  });
  const [promoCode, setPromoCode] = useState<string>("");
  const { openModal } = useModal();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPromoCode(e.target.value);
  };

  const onApplyPromo = () => {
    console.log("apply", promoCode);
  };
  const onPay = () => {
    openModal(<SuccessFeatureCreditModal />);
  };

  return (
    <div className="w-full max-w-[900px] h-full max-h-[600px] grid grid-cols-2 gap-8 overflow-hidden rounded-3xl bg-white px-20 py-16">
      <div className="flex flex-col justify-center gap-4">
        <div>
          <h3 className="font-medium">Choose Credit Option</h3>
          <p>You currently have 0 credits left.</p>
          <p>Purchase credits to feature your fighter.</p>
        </div>
        <ul className="flex flex-col gap-3">
          {options.map((opt) => (
            <li key={opt.key}>
              <div
                className={clsx(
                  "flex justify-between items-center px-6 py-6 rounded-md",
                  {
                    "bg-green text-white": option.key === opt.key,
                    "bg-gray": option.key !== opt.key,
                  }
                )}
                onClick={() => setOption(opt)}
              >
                <p>{opt.key}</p>
                <p>{opt.price}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="border rounded-md p-6 flex flex-col gap-6">
        <h3 className="font-medium">Summary</h3>
        <div className="flex flex-col gap-2">
          <div
            className={clsx(
              "flex justify-between items-center px-6 py-6 rounded-md bg-gray"
            )}
          >
            <p>{option.key}</p>
            <p>{option.price}</p>
          </div>
          <CustomInput
            value={promoCode}
            onChange={onChange}
            placeholder="Enter your promo code here"
            endContent={
              <button className="font-medium" onClick={onApplyPromo}>
                Apply
              </button>
            }
          />
        </div>

        <h3 className="font-medium">Payment Method</h3>
        <PaymentMethod />
        <Button className="bg-black text-white" onPress={onPay}>
          Pay {option.price}
        </Button>
      </div>
    </div>
  );
}

export default ChoseCreditOptionModal;
