import Breadcrumbs from "../../../../../components/Breadcrums/Breadcrums";
import CreateFighterForm from "../../../../../components/CreateFighterForm/CreateFighterForm";

function Page() {
  return (
    <>
      <section className="bg-black flex flex-col items-center justify-center  min-h-[200px]  gap-2">
        <h2 className="text-white">Edit fighter profile</h2>
      </section>
      <section className="py-4 border-b-2 border-gray">
        <Breadcrumbs />
      </section>
      <section className="py-7 px-4">
        <div className="max-w-screen-xl mx-auto">
          <CreateFighterForm />
        </div>
      </section>
    </>
  );
}

export default Page;
