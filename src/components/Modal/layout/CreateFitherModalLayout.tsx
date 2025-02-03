function CreateFitherModalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[800px] h-[650px] bg-white overflow-hidden rounded-3xl flex flex-col">
      <div
        className="bg-center bg-cover p-5"
        style={{
          background:
            "linear-gradient(rgba(10, 10, 10, 0.6), rgba(10, 10, 10, 0.6)), url('/images/fighter-modal-bg.jpg')",
        }}
      >
        <h3 className="text-white text-center">
          Create Fighter&apos;s Profile
        </h3>
      </div>
      <div className="p-11 overflow-y-auto">{children}</div>
    </div>
  );
}

export default CreateFitherModalLayout;
