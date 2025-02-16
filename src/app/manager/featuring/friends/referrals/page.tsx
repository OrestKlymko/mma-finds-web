import CopyLink from "../../../../../components/ui/CopyLink";

function page() {
  return (
    <div className="w-full flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <p>None of your friends have joined us through your referrals!</p>
        <p>
          Share your unique referral link with friends and inspire them to join
          our platform and community.
        </p>
      </div>
      <CopyLink link="https://linktocopy.com" />
    </div>
  );
}

export default page;
