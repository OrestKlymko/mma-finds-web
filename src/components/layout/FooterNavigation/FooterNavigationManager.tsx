import Link from "next/link";

function FooterNavigationManager() {
  return (
    <>
      <div className="flex flex-col gap-5">
        <h6>MMA Finds Center </h6>
        <ul className="flex flex-col gap-4">
          <li>
            <Link href="/">Balance Overview</Link>
          </li>
          <li>
            <Link href="/fighters">My Fighters</Link>
          </li>
          <li>
            <Link href="/">Account</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-5">
        <h6>Legal</h6>
        <ul className="flex flex-col gap-4">
          <li>
            <a href="#">Terms and Conditions</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-5">
        <h6>Featuring</h6>
        <ul className="flex flex-col gap-4">
          <li>
            <Link href="/">How It Works</Link>
          </li>
          <li>
            <Link href="/">Featured Fighters</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-5">
        <h6>Support</h6>
        <ul className="flex flex-col gap-4">
          <li>
            <Link href="/">FAQs</Link>
          </li>
          <li>
            <Link href="/">Ticket Submission</Link>
          </li>
          <li>
            <Link href="/">My Tickets</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default FooterNavigationManager;
