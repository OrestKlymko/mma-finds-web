import { Button } from '@nextui-org/button';
import Image from 'next/image';

function HeroBlackSection() {
  return (
    <section className="bg-[#131313] px-32 pt-28 flex flex-row-reverse mb:flex-col justify-center items-center gap-32 mb:px-4 mb:pt-12">
      <div className="flex flex-col justify-center gap-20">
        <div className="flex flex-col gap-7">
          <h2 className="capitalize text-6xl font-medium text-white leading-tight">
            your ultimate <br />{' '}
            <span className="text-green-800">matchmaking platform</span>
          </h2>
          <p className="capitalize text-white font-light">
            safe time. expend possibilities. streamline communication. Earn
            passive income.
          </p>
        </div>
        <div>
          <div className="flex gap-4 max-w-sm">
            <Button
              size="lg"
              className="rounded-md bg-white  h-[3.3rem]"
              fullWidth
              radius="none"
            >
              <Image
                className="invert"
                src="/icons/apple-logo.svg"
                alt="Play Market"
                width={26}
                height={26}
              />
              <div className="text-black ml-1 flex flex-col items-start leading-none">
                <span className="text-sm font-light">Get it on</span>
                <span className="text-md leading-none">App Store</span>
              </div>
            </Button>
            <Button
              className="rounded-md bg-white h-[3.3rem]"
              size="lg"
              fullWidth
              radius="none"
            >
              <Image
                src="/icons/google-play.svg"
                alt="Play Market"
                width={26}
                height={26}
              />
              <div className="text-black ml-1 flex flex-col items-start leading-none">
                <span className="text-sm font-light">Get it on</span>
                <span className="text-md leading-none">Google Play</span>
              </div>
            </Button>
          </div>
        </div>
      </div>
      <div className="shrink-0">
        <Image
          className="h-auto w-full"
          src="/images/mobileonblack.png"
          width={700}
          height={900}
          alt="hero-image"
        />
      </div>
    </section>
  );
}

export default HeroBlackSection;
