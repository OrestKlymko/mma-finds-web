import Image from 'next/image';

function DarkModeSection() {
  return (
    <section className="py-28 px-4 mb:py-12">
      <div className="max-w-screen-xl mx-auto flex mb:flex-col-reverse mb:gap-4 justify-between items-center">
        <div className="flex-1 mb-8 md:mb-0 md:mr-8">
          <h3 className="text-gray-500 uppercase tracking-wider text-sm mb-2 opacity-50">
            SWITCH SEAMLESSLY
          </h3>
          <h1 className="text-4xl font-bold mb-4">
            Dark And Light Modes Available On Our App
          </h1>
          <p className="text-gray-600 mb-6 text-sm font-thin">
            Enhance your app experience with MMA Finds customizable display
            options. Choose Dark Mode for sophistication, Light Mode for
            clarity, or let System Mode adapt seamlessly. Your satisfaction is
            our priority, ensuring comfort and enjoyment every time you use our
            app.
          </p>
          <div className="flex space-x-4">
            <Image
              className="w-[75%] mb:w-full"
              src="/images/dark-mode-check.png"
              width={700}
              height={900}
              alt="check-image"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-end">
          <Image
            className="w-[75%] mb:w-full"
            src="/images/dark-mode.png"
            width={700}
            height={900}
            alt="check-image"
          />
        </div>
      </div>
    </section>
  );
}

export default DarkModeSection;
