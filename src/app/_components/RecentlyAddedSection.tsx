function RecentlyAddedSection() {
  return (
    <section id="news" className="py-28 px-4 mb:py-6">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-7">
        <h2>Recently added to your platform</h2>
        <p className="font-light text-sm">
          Discover the latest additions in our continuous improvement journey.
        </p>
        <ul className="grid lg:grid-cols-3 gap-7 sm:grid-cols-1 w-full text-base">
          <li className="py-12 px-6 bg-black  text-white rounded-sm">
            <p className="capitalize">New feature added!</p>
            <p className="max-w-[95%]">
              Simplify slide left to edit all of your notifications!
            </p>
          </li>
          <li className="py-12 px-6 bg-black text-white rounded-sm">
            <p className="capitalize">New feature added!</p>
            <p className="max-w-[95%]">
              Simplify slide left to edit all of your notifications!
            </p>
          </li>
          <li className="py-12 px-6 bg-black text-white rounded-sm">
            <p className="capitalize">New feature added!</p>
            <p className="max-w-[95%]">
              Simplify slide left to edit all of your notifications!
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default RecentlyAddedSection;
