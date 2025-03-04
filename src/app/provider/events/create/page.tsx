import Breadcrumbs from '../../../../components/Breadcrums/Breadcrums';
import CreateEventForm from '../../../../components/CreateEventFrom/CreateEventFrom';

function Page() {
  return (
    <>
      <section className="bg-black flex flex-col items-center justify-center  min-h-[200px]  gap-2">
        <h2 className="text-white">Create an Event</h2>
      </section>
      <section className="py-4 border-b-2 border-gray px-4">
        <Breadcrumbs />
      </section>
      <section className="py-7 px-4 min-h-[60dvh]">
        <div className="max-w-screen-xl mx-auto">
          <CreateEventForm />
        </div>
      </section>
    </>
  );
}

export default Page;
