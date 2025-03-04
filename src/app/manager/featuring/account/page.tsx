import AccountVerification from './_components/AccountVerification/AccountVerification';
import ChangeAccountDetailsForm from './_components/ChangeAccountDetailsForm/ChangeAccountDetailsForm';
import ChangePassword from './_components/ChangePassword/ChangePassword';

function Page() {
  return (
    <div className="flex flex-col gap-12 mb:gap-4">
      <ChangeAccountDetailsForm />
      <ChangePassword />
      <AccountVerification />
    </div>
  );
}

export default Page;
