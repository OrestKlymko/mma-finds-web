import Breadcrumbs from '../../../../../components/Breadcrums/Breadcrums';

import FighterCard from '../../../../../components/ui/FighterCard';

import FighterPage from '../../../../../components/page-componetns/FighterPage';

function Page() {
  return (
    <>
      <section className="py-4 border-b-2 border-t-2 border-gray">
        <Breadcrumbs />
      </section>
      <FighterPage />
      <section className="py-7 px-4">
        <div className="max-w-screen-xl mx-auto">
          <h6 className="mb-6">Submitted Fighters</h6>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <FighterCard isPromoter />
            <FighterCard isPromoter />
            <FighterCard isPromoter />
            <FighterCard isPromoter />
          </div>
        </div>
      </section>
    </>
  );
}

export default Page;
