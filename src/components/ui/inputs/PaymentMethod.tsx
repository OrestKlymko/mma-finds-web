import Image from "next/image";

function PaymentMethod() {
  return (
    <div className="flex flex-col gap-2">
      <label
        className="flex items-center justify-between h-10 py-2 px-2 rounded-md border"
        htmlFor="credit"
      >
        <div className="flex gap-[2px] items-center h-full mr-1">
          <Image
            className="h-full w-auto"
            src="/images/visa.png"
            width={61}
            height={61}
            alt="payment-method"
          />
          <Image
            className="h-full w-auto"
            src="/images/Master.png"
            width={61}
            height={61}
            alt="payment-method"
          />
          <Image
            className="h-full w-auto"
            src="/images/discover.png"
            width={61}
            height={61}
            alt="payment-method"
          />
          <Image
            className="h-full w-auto"
            src="/images/american-express.png"
            width={61}
            height={61}
            alt="payment-method"
          />
        </div>
        <p className="mr-auto">Debit / Credit Card</p>
        <input type="radio" id="credit" name="payment" value="credit" />
      </label>
      <label
        className="flex items-center justify-between h-10 py-2 px-2 rounded-md border"
        htmlFor="paypal"
      >
        <div className="flex gap-[2px] items-center h-full">
          <Image
            className="h-full w-auto"
            src="/images/paypal.png"
            width={61}
            height={61}
            alt="payment-method"
          />
        </div>

        <input type="radio" id="paypal" name="payment" value="credit" />
      </label>
    </div>
  );
}

export default PaymentMethod;
