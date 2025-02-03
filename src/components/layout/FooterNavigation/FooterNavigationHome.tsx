import { Button } from "@nextui-org/button";
import Link from "next/link";

function FooterNavigationHome() {
  return (
    <>
      <div className="flex flex-col gap-5">
        <h6>Quick Links</h6>
        <ul className="flex flex-col gap-4">
          <li>
            <Link href="/#benefits">Features</Link>
          </li>
          <li>
            <Link href="/#plans">Pricing Plans</Link>
          </li>
          <li>
            <Link href="/#FAQ">FAQs</Link>
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
        <h6>Contact Us</h6>
        <ul className="flex flex-col gap-4">
          <li className="flex gap-2">
            <p>General Info:</p>
            <a href="mailto:help@mmafinds.com">help@mmafinds.com</a>
          </li>
          <li className="flex gap-2">
            <p>Suppport:</p>
            <a href="mailto:help@mmafinds.com">help@mmafinds.com</a>
          </li>
        </ul>
        <Link className="w-full" href="/#contact_us">
          <Button className="bg-black text-white" fullWidth>
            Contact Form
          </Button>
        </Link>
      </div>
    </>
  );
}

export default FooterNavigationHome;
