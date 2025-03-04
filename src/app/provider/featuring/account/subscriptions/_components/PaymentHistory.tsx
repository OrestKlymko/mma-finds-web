import Link from "next/link";
import { LuDownload } from "react-icons/lu";

function PaymentHistory() {
  return (
    <div>
      <h6 className="mb-6">Payment History</h6>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between px-6 p-2">
          <p className="font-medium flex-1">Plan</p>
          <p className="font-medium flex-1 text-center">Billed on</p>
          <p className="font-medium flex-1 text-center">Amount Billed</p>
          <p className="font-medium flex-grow-0 text-center flex-1">Invoice</p>
        </div>
        <Payment
          plan="Annual Standard Plan"
          buildOn="01.01.2024"
          amountBilled="199.99"
          invoice="link"
        />
        <Payment
          plan="Annual Standard Plan"
          buildOn="01.01.2024"
          amountBilled="199.99"
          invoice="link"
        />
        <Payment
          plan="Annual Standard Plan"
          buildOn="01.01.2024"
          amountBilled="199.99"
          invoice="link"
        />
      </div>
    </div>
  );
}

function Payment({
  plan,
  buildOn,
  amountBilled,
  invoice,
}: {
  plan: string;
  buildOn: string;
  amountBilled: string;
  invoice: string;
}) {
  return (
    <div className="flex items-center justify-between bg-gray-light py-4 px-6">
      <p className="flex-1">{plan}</p>
      <p className="flex-1 text-center">{buildOn}</p>
      <p className="flex-1 text-center">{amountBilled}$</p>
      <Link
        className="flex-1 flex-grow-0  flex justify-center pr-2"
        href={invoice}
      >
        <LuDownload className="text-base " />
      </Link>
    </div>
  );
}

export default PaymentHistory;
