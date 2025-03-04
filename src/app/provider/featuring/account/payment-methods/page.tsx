import PaymentOptions from './_components/PaymentOptions';
import AddPaymentMethod from './_components/AddPaymentMethod';

function Page() {
  return (
    <div className="flex gap-6 mb:flex-col">
      <div className="flex flex-col gap-6 flex-1">
        <h6>Payment Options</h6>
        <PaymentOptions />
      </div>
      <div className="flex flex-col gap-6 flex-1">
        <h6>Add payment method</h6>
        <AddPaymentMethod />
      </div>
    </div>
  );
}

export default Page;
