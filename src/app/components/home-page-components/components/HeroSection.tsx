import { Button } from "@nextui-org/button";
import Image from "next/image";

function HeroSection() {
  return (
    <section className="bg-gray px-32 py-28 flex justify-between items-center">
      <div className="flex flex-col justify-center gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="uppercase text-5xl font-extrabold">
            your ultimate <br />{" "}
            <span className="text-green">matchmaking platform</span>
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
          <p className="text-[0.75rem] mb-1 font-thin">
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
      <div>
        <Image
          className="h-auto w-[32rem]"
          src="/images/mobile-app.png"
          width={700}
          height={900}
          alt="hero-image"
        />
      </div>
    </section>
  );
}

export default HeroSection;
