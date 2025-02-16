"use client";
import { Button } from "@nextui-org/button";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

const AddPaymentMethod = () => {
  const [selected, setSelected] = useState("card");
  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");

  const setValue = (
    e: ChangeEvent<HTMLInputElement>,
    setter: Dispatch<SetStateAction<string>>
  ) => {
    setter(e.target.value);
  };

  return (
    <div className="rounded-lg">
      {/* Card Payment */}
      <div
        className={`border rounded-md p-4 mb-2 ${
          selected === "card" ? "border-green-500" : ""
        }`}
        onClick={() => setSelected("card")}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/images/visa.png" alt="Visa" className="h-6" />
            <img src="/images/Master.png" alt="Mastercard" className="h-6" />
            <img
              src="/images/american-express.png"
              alt="Amex"
              className="h-6"
            />
            <img src="/images/discover.png" alt="Discover" className="h-6" />
          </div>
          <input
            type="radio"
            checked={selected === "card"}
            readOnly
            className="accent-green-600"
          />
        </div>
        {selected === "card" && (
          <Input
            setValue={setValue}
            setCardholderName={setCardholderName}
            cardholderName={cardholderName}
            setCardNumber={setCardNumber}
            cardNumber={cardNumber}
            setExpiry={setExpiry}
            expiry={expiry}
            setCvc={setCvc}
            cvc={cvc}
          />
        )}
      </div>

      {/* PayPal */}
      <div
        className={`border p-4 rounded-lg mb-2 flex flex-col gap-2`}
        onClick={() => setSelected("paypal")}
      >
        <div className="flex items-center justify-between">
          <img src="/images/paypal.png" alt="PayPal" className="h-6" />
          <input
            type="radio"
            checked={selected === "paypal"}
            readOnly
            className="accent-green-600"
          />
        </div>

        {selected === "paypal" && (
          <Input
            setValue={setValue}
            setCardholderName={setCardholderName}
            cardholderName={cardholderName}
            setCardNumber={setCardNumber}
            cardNumber={cardNumber}
            setExpiry={setExpiry}
            expiry={expiry}
            setCvc={setCvc}
            cvc={cvc}
          />
        )}
      </div>

      {/* Apple Pay */}
      <div
        className={`border p-4 rounded-lg flex flex-col ${
          selected === "applepay" ? "border-green-500" : ""
        }`}
        onClick={() => setSelected("applepay")}
      >
        <div className="flex items-center justify-between">
          <img src="/images/apple-pay.png" alt="Apple Pay" className="h-6" />
          <input
            type="radio"
            checked={selected === "applepay"}
            readOnly
            className="accent-green-600"
          />
        </div>

        {selected === "applepay" && (
          <Input
            setValue={setValue}
            setCardholderName={setCardholderName}
            cardholderName={cardholderName}
            setCardNumber={setCardNumber}
            cardNumber={cardNumber}
            setExpiry={setExpiry}
            expiry={expiry}
            setCvc={setCvc}
            cvc={cvc}
          />
        )}
      </div>

      <Button className="mt-4" color="secondary" onPress={() => {}}>
        Add Payment Method
      </Button>
    </div>
  );
};

function Input({
  setValue,
  setCardholderName,
  cardholderName,
  setCardNumber,
  cardNumber,
  setExpiry,
  expiry,
  setCvc,
  cvc,
}: {
  setValue: (
    e: ChangeEvent<HTMLInputElement>,
    setter: Dispatch<SetStateAction<string>>
  ) => void;
  setCardholderName: Dispatch<SetStateAction<string>>;
  cardholderName: string;
  setCardNumber: Dispatch<SetStateAction<string>>;
  cardNumber: string;
  setExpiry: Dispatch<SetStateAction<string>>;
  expiry: string;
  setCvc: Dispatch<SetStateAction<string>>;
  cvc: string;
}) {
  return (
    <div>
      <input
        onChange={(e) => setValue(e, setCardholderName)}
        value={cardholderName}
        type="text"
        placeholder="Cardholder Name"
        className="w-full border-b p-2 mt-2 text-sm"
      />
      <input
        type="text"
        onChange={(e) => setValue(e, setCardNumber)}
        value={cardNumber}
        placeholder="Card Number"
        className="w-full border-b p-2 mt-2 text-sm"
      />
      <div className="flex space-x-2 mt-2">
        <input
          type="text"
          onChange={(e) => setValue(e, setExpiry)}
          value={expiry}
          placeholder="MM/YY"
          className="w-1/2 border-b p-2  text-sm"
        />
        <input
          type="text"
          onChange={(e) => setValue(e, setCvc)}
          value={cvc}
          placeholder="CVC"
          className="w-1/2 border-b p-2  text-sm"
        />
      </div>
    </div>
  );
}

export default AddPaymentMethod;
