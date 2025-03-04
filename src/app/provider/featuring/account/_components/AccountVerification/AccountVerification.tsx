import { Button } from "@nextui-org/button";

function AccountVerification() {
  return (
    <div>
      <h6 className="mb-2">Change Password</h6>
      <p className="mb-6">
        Update your password for enhanced account security.
      </p>
      <Button className=" max-w-[25%]" color="secondary" fullWidth>
        Verify
      </Button>
    </div>
  );
}

export default AccountVerification;
