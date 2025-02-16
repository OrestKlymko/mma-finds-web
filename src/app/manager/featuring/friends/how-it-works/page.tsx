import IconInfo from "../../../../../components/ui/IconInfo";
import { BsFillPeopleFill } from "react-icons/bs";
import { BiSolidDiscount } from "react-icons/bi";
import { FaMoneyBillWave } from "react-icons/fa";

function Page() {
  return (
    <div className="w-full flex flex-col gap-4">
      <p>Earning with referrals is easy! Just follow these simple steps:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <IconInfo
          title="Invite Friends"
          description="Share your unique referral link with friends and encourage them to join our platform."
          Icon={BsFillPeopleFill}
        />
        <IconInfo
          title="They Save"
          description="When your friends sign up on MMA Finds, they will get
a 10% discount on their first order."
          Icon={BiSolidDiscount}
        />
        <IconInfo
          title="You Earn"
          description="After their order is complete, you will receive 10% of their
purchase in credits for your next order."
          Icon={FaMoneyBillWave}
        />
      </div>
    </div>
  );
}

export default Page;
