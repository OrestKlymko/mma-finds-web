function Page() {
  return (
    <div className="w-full flex flex-col gap-8">
      <div className="w-full bg-gray-light p-4 rounded-md self-start">
        <h6 className="text-2xl text-center">Balance Overview</h6>
      </div>
      <div className="flex gap-12">
        <div className="flex flex-col gap-2 w-1/2">
          <h6>Referral Credits</h6>
          <div className="py-3 px-2 rounded-md bg-gray-light">
            <h4>€100</h4>
          </div>
          <p>
            Want to earn more credits? Refer new users to earn extra credits to
            use on your next order.{" "}
          </p>
          <h4>Earn Now!</h4>
        </div>
        <div className="flex flex-col gap-2 w-1/2">
          <h6>Feature Credits</h6>
          <div className="py-3 px-2 rounded-md bg-gray-light">
            <h4>0 Credits</h4>
          </div>
          <p>
            Purchase credits to raise your fighter's standing, boosting their
            visibility and increasing their chances for selection.
          </p>
          <h4>Purchase Now!</h4>
        </div>
      </div>
    </div>
  );
}

export default Page;
