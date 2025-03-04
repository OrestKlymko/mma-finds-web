import Image from 'next/image';

function MainModalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-2 mb:grid-cols-1 overflow-hidden rounded-3xl bg-white mb:w-full">
      <div className="w-[450px] h-[650px] mb:hidden">
        <Image
          className="block object-cover object-right h-full"
          src="/images/fighter-modal-bg.jpg"
          width={450}
          height={600}
          alt="fighter"
        />
      </div>
      <div className="w-full h-[650px] bg-white overflow-y-auto p-8">
        {children}
      </div>
    </div>
  );
}

export default MainModalLayout;
