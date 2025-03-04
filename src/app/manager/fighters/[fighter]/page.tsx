import Breadcrumbs from '../../../../components/Breadcrums/Breadcrums';
import FighterPage from '../../../../components/page-componetns/FighterPage';

import FighterCard from '../../../../components/ui/FighterCard';
import Link from 'next/link';
import { FiPlus } from 'react-icons/fi';

function Page() {
  return (
    <>
      <section className="py-4 border-b-2 border-t-2 border-gray px-4">
        <Breadcrumbs />
      </section>
      <FighterPage />
      <section className="py-7 px-4">
        <div className="max-w-screen-xl mx-auto">
          <h6 className="mb-6">Other Fighters</h6>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <FighterCard />
            <FighterCard />
            <FighterCard />
            <FighterCard />

            <Link
              href="/manager/fighters/create"
              className="w-[28%] bg-green flex flex-col gap-2 items-center justify-center h-full text-white rounded-md hover:bg-emerald-800"
            >
              <FiPlus className="w-8 h-8" color="white" />
              <div className="flex flex-col items-center">
                <p>Create Fighter</p>
                <p>Profile</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Page;
