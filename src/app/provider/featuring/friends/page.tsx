"use client";

import CopyLink from "../../../../components/ui/CopyLink";

function Page() {
  return (
    <div className="w-full flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <p>Earn up to €500 in credits with Referrals!</p>
        <p>
          Referring friends to our platform gives you exclusive rewards! <br />
          For each friend you refer, you’ll receive up to €100 in credits to use
          on your next order.
        </p>
      </div>
      <CopyLink link="https://linktocopy.com" />
    </div>
  );
}

export default Page;
