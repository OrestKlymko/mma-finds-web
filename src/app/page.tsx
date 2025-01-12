import { Button, ButtonGroup } from "@nextui-org/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="bg-neutral-100 px-28 py-48">
        <div className="flex flex-col justify-center gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="uppercase text-4xl font-bold">
              your ultimate <br />{" "}
              <span className="text-green-800">matchmaking platform</span>
            </h1>
            <p className="capitalize">
              safe time. expend possibilities. streamline communication. Earn
              passive income.
            </p>
          </div>
          <div className="flex gap-2 max-w-sm ">
            <Button
              className="rounded-md"
              fullWidth
              color="secondary"
              radius="none"
            >
              Find a Fight
            </Button>
            <Button className="rounded-md bg-white" fullWidth radius="none">
              Find a Fighter
            </Button>
          </div>
          <div>
            <p className="text-[0.5rem] mb-1">
              Easily manage everything with on-the-go through our app.
            </p>
            <div className="flex gap-2 max-w-sm">
              <Button className="rounded-md bg-black" fullWidth radius="none">
                <Image
                  src="/icons/apple-logo.svg"
                  alt="Play Market"
                  width={20}
                  height={20}
                />
                <div className="text-white ml-1 flex flex-col items-start leading-none gap-1">
                  <span className="text-[0.6rem]">Get it on</span>
                  <span className="text-[0.8rem]">Google Play</span>
                </div>
              </Button>
              <Button className="rounded-md bg-black" fullWidth radius="none">
                <Image
                  src="/icons/google-play.svg"
                  alt="Play Market"
                  width={20}
                  height={20}
                />
                <div className="text-white ml-1 flex flex-col items-start leading-none gap-1">
                  <span className="text-[0.6rem]">Get it on</span>
                  <span className="text-[0.8rem]">Google Play</span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center px-4 py-8">
        <h3 className="text-gray-500 uppercase tracking-wider text-sm mb-2">
          WHY US
        </h3>
        <h1 className="text-2xl font-bold text-center mb-4">
          Our Platforms Benefits
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mb-6">
          At MMA Finds, we carefully analyzed each step, ensuring that we
          simplified processes to make them quick and effortless.
        </p>{" "}
        <ButtonGroup className="flex mb-8 rounded-sm w-full max-w-sm">
          <Button color="secondary" fullWidth radius="sm">
            Manager
          </Button>
          <Button
            className="rounded-r-sm bg-slate-100"
            color="default"
            fullWidth
          >
            Promotion
          </Button>
        </ButtonGroup>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-6xl">
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow">
            <div className="text-3xl text-green-600 mb-4">🔄</div>
            <h3 className="text-lg font-semibold mb-2 text-center">
              Save Time
            </h3>
            <p className="text-gray-600 text-center text-[0.75rem]">
              We've streamlined the matchmaking process to eliminate the need
              for time-consuming communication with fighter representatives.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow">
            <div className="text-3xl text-green-600 mb-4">⤢</div>
            <h3 className="text-lg font-semibold mb-2 text-center">
              Expand Possibilities
            </h3>
            <p className="text-gray-600 text-center text-[0.75rem]">
              With exclusive access to our extensive network of fighter
              representatives, discovering the ideal match for your event has
              never been easier.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow">
            <div className="text-3xl text-green-600 mb-4">⭐</div>
            <h3 className="text-lg font-semibold mb-2 text-center">
              Streamline Communication
            </h3>
            <p className="text-gray-600 text-center text-[0.75rem]">
              Enjoy the simplicity of a single platform for all your matchmaking
              needs, eliminating the challenge of managing multiple
              communication channels with fighter representatives.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow">
            <div className="text-3xl text-green-600 mb-4">📈</div>
            <h3 className="text-lg font-semibold mb-2 text-center">
              Earn Passive Income
            </h3>
            <p className="text-gray-600 text-center text-[0.75rem]">
              Generate passive income while contributing to the growth of our
              vibrant community.
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col md:flex-row items-center md:items-start justify-between px-28 py-48">
        {/* Left Section */}
        <div className="flex-1 mb-8 md:mb-0 md:mr-8">
          <h3 className="text-gray-500 uppercase tracking-wider text-sm mb-2">
            SWITCH SEAMLESSLY
          </h3>
          <h1 className="text-3xl font-bold mb-4">
            Dark And Light Modes Available On Our App
          </h1>
          <p className="text-gray-600 mb-6">
            Enhance your app experience with MMA Finds customizable display
            options. Choose Dark Mode for sophistication, Light Mode for
            clarity, or let System Mode adapt seamlessly. Your satisfaction is
            our priority, ensuring comfort and enjoyment every time you use our
            app.
          </p>
          <div className="flex space-x-4">
            <div className="flex flex-col items-center">
              <div className="w-12 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-800">Light</span>
              </div>
              <input type="radio" name="theme" className="mt-2" />
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-20 bg-gray-800 rounded-lg flex items-center justify-center">
                <span className="text-white">Dark</span>
              </div>
              <input
                type="radio"
                name="theme"
                className="mt-2"
                defaultChecked
              />
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-20 bg-gray-400 rounded-lg flex items-center justify-center">
                <span className="text-gray-800">System</span>
              </div>
              <input type="radio" name="theme" className="mt-2" />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-end">
          <div className="grid grid-cols-2 gap-4">
            <div className="w-40 h-80 bg-gray-800 text-white rounded-lg p-4 shadow-lg">
              <h4 className="text-lg font-semibold mb-4">Welcome Back!</h4>
              <p className="text-sm mb-2">
                Enter your registration email and password.
              </p>
              <Button color="default" className="w-full mb-2">
                Sign In
              </Button>
              <Button color="primary" className="w-full mb-2">
                Sign in with Google
              </Button>
              <Button color="secondary" className="w-full">
                Sign in with Facebook
              </Button>
            </div>

            <div className="w-40 h-80 bg-gray-800 text-white rounded-lg p-4 shadow-lg">
              <h4 className="text-lg font-semibold mb-4">
                Choose Credit Option
              </h4>
              <p className="text-sm mb-2">
                You currently have 0 credits left. Purchase credits to feature
                your fighter.
              </p>
              <Button color="success" className="w-full mb-2">
                1 Feature Credit - €9,99
              </Button>
              <Button color="success" className="w-full mb-2">
                5 Feature Credits - €39,99
              </Button>
              <Button color="success" className="w-full">
                10 Feature Credits - €69,99
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
