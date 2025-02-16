import Image from "next/image";

function PaymentOptions() {
  const paymentOptions = [
    {
      number: "**** **** **** 1234",
      isDefault: true,
      type: "Visa",
    },
    {
      number: "**** **** **** 5678",
      isDefault: false,
      type: "MasterCard",
    },
  ];
  return (
    <div className="flex flex-col gap-2">
      {paymentOptions.map((option) => (
        <div
          key={option.number}
          className="flex items-center gap-2 border border-black rounded-md justify-between py-2 px-4"
        >
          <div className="h-full">
            {option.type === "Visa" && (
              <Image
                className="h-full w-auto"
                src={`/images/visa.png`}
                width={36}
                height={24}
                alt={option.type}
              />
            )}
            {option.type === "MasterCard" && (
              <Image
                className="h-full w-auto"
                src={`/images/Master.png`}
                width={36}
                height={36}
                alt={option.type}
              />
            )}
          </div>
          <p className="flex-1">{option.number}</p>
          <div className="flex items-center justify-between bg-gray-light p-2 rounded-md">
            <p className="flex-1 text-center">
              {option.isDefault ? "Default" : "Backup"}
            </p>
          </div>
          {!option.isDefault && (
            <button className="text-green">Set as Default</button>
          )}
        </div>
      ))}
    </div>
  );
}

export default PaymentOptions;
