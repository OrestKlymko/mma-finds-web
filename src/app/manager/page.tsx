import Image from 'next/image';
import FeatureCard from '../../components/ui/FeatureCard';
import FighterCard from '../../components/ui/FighterCard';
import OfferCard from '../../components/ui/OfferCard';
import Avatar from '../../components/ui/Avatar';
import Link from 'next/link';

function OffersPage() {
  return (
    <>
      <section className="bg-black flex flex-col items-center justify-center  min-h-[340px]  gap-2 px-4">
        <Image
          className="invert"
          src="/logo.svg"
          width={300}
          height={40}
          alt="logo"
        />
        <h1 className="text-white text-center">
          Your Ultimate Fight Match Platform
        </h1>
      </section>
      <section className="py-12 px-4 mb:py-6">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <FeatureCard
            title="invite friends"
            description="Refer new users to earn extra credits!"
            href="/manager/featuring/friends"
            linkText="Invite friends"
          />
          <FeatureCard
            title="Feature Your Fighter"
            description="Purchase credits to raise your fighter's standing!"
            href="/manager/featuring/feature"
            linkText="Purchase Credits"
          />
        </div>
      </section>
      <section className="py-12 px-4 mb:py-6">
        <div className="max-w-screen-xl mx-auto ">
          <div className="flex justify-between items-center mb-6">
            <h3 className="">My Fighters</h3>
            <Link
              className="text-base font-medium text-green"
              href="/manager/fighters"
            >
              See All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FighterCard />
            <FighterCard />
            <FighterCard />
          </div>
        </div>
      </section>
      <section className="py-12 px-4 mb:py-6">
        <div className="max-w-screen-xl mx-auto ">
          <div className="flex items-center justify-between mb-6">
            <h3 className="">My Submissions</h3>{' '}
            <Link
              className="text-base font-medium text-green"
              href="/manager/submissions"
            >
              See All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <OfferCard
              title="OKTAGON 50"
              date="20.03.2023"
              image="/images/fighter-modal-bg.jpg"
              applied='John "The Punisher" Smith'
              reviewDate="2 Da"
              isTitle
            />
            <OfferCard
              title="OKTAGON 50"
              date="20.03.2023"
              image="/images/fighter-modal-bg.jpg"
              applied='John "The Punisher" Smith'
              reviewDate="2 Days"
              isTitle
            />
            <OfferCard
              title="OKTAGON 50"
              date="20.03.2023"
              image="/images/fighter-modal-bg.jpg"
              applied='John "The Punisher" Smith'
              reviewDate="2 Days"
              isTitle
            />
          </div>
        </div>
      </section>
      <section className="py-12 px-4 mb:py-6">
        <div className="max-w-screen-xl mx-auto ">
          <div className="flex items-center justify-between mb-6">
            <h3 className="">New Features</h3>{' '}
            <Link
              className="text-base font-medium text-green"
              href="/manager/featuring/feature"
            >
              See All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <FeatureCard
              description="New Feature Added!
Simply slide left to edit all of your
notifications!"
              href="/manager/featuring/feature"
              linkText="Invite friends"
            />
            <FeatureCard
              description="New Feature Added!
Simply slide left to edit all of your
notifications!"
              href="/manager/featuring/feature"
              linkText="Purchase Credits"
            />
          </div>
        </div>
      </section>
      <section className="py-12 px-4 mb:py-6">
        <div className="max-w-screen-xl mx-auto ">
          <div className="flex items-center justify-between mb-6">
            <h3 className="">Recently Saved</h3>{' '}
            <Link
              className="text-base font-medium text-green"
              href="/manager/saved"
            >
              See All
            </Link>
          </div>
          <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <OfferCard
              title="OKTAGON 50"
              date="20.03.2023"
              image="/images/fighter-modal-bg.jpg"
              organization="Oktagon MMA"
              weightClass="Lightweight"
              place="Prague, Czech Republic"
              purse="€5000-€6000"
              isSaved
            />
            <OfferCard
              title="OKTAGON 50"
              date="20.03.2023"
              image="/images/fighter-modal-bg.jpg"
              organization="Oktagon MMA"
              weightClass="Lightweight"
              place="Prague, Czech Republic"
              purse="€5000-€6000"
              isSaved
            />
            <OfferCard
              title="OKTAGON 50"
              date="20.03.2023"
              image="/images/fighter-modal-bg.jpg"
              organization="Oktagon MMA"
              weightClass="Lightweight"
              place="Prague, Czech Republic"
              purse="€5000-€6000"
              isSaved
            />
          </div>
        </div>
      </section>
      <section className="py-12 px-4 mb:py-6">
        <div className="max-w-screen-xl mx-auto ">
          <div className="flex items-center justify-between mb-6">
            <h3 className="">Messages</h3>{' '}
            <Link
              className="text-base font-medium text-green"
              href="/manager/messages"
            >
              See All
            </Link>
          </div>
          <div className="flex gap-4 mb:grid mb:grid-cols-3">
            <Avatar src="/images/boxer-avatar.jpg" />
            <Avatar src="/images/boxer-avatar.jpg" />
            <Avatar src="/images/boxer-avatar.jpg" />
            <Avatar src="/images/boxer-avatar.jpg" />
            <Avatar src="/images/boxer-avatar.jpg" />
          </div>
        </div>
      </section>
      <section className="py-12 px-4 mb:py-6">
        <div className="max-w-screen-xl mx-auto ">
          <div className="flex items-center justify-between mb-6">
            <h3 className="">Fight Offers Feed</h3>
            <Link
              className="text-base font-medium text-green"
              href="/manager/offers"
            >
              See All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <OfferCard
              title="OKTAGON 50"
              date="20.03.2023"
              image="/images/fighter-modal-bg.jpg"
              organization="Oktagon MMA"
              weightClass="Lightweight"
              place="Prague, Czech Republic"
              purse="€5000-€6000"
              isSaved
            />
            <OfferCard
              title="OKTAGON 50"
              date="20.03.2023"
              image="/images/fighter-modal-bg.jpg"
              organization="Oktagon MMA"
              weightClass="Lightweight"
              place="Prague, Czech Republic"
              purse="€5000-€6000"
              isSaved
            />
            <OfferCard
              title="OKTAGON 50"
              date="20.03.2023"
              image="/images/fighter-modal-bg.jpg"
              organization="Oktagon MMA"
              weightClass="Lightweight"
              place="Prague, Czech Republic"
              purse="€5000-€6000"
              isSaved
            />
            <OfferCard
              title="OKTAGON 50"
              date="20.03.2023"
              image="/images/fighter-modal-bg.jpg"
              organization="Oktagon MMA"
              weightClass="Lightweight"
              place="Prague, Czech Republic"
              purse="€5000-€6000"
              isSaved
            />
            <OfferCard
              title="OKTAGON 50"
              date="20.03.2023"
              image="/images/fighter-modal-bg.jpg"
              organization="Oktagon MMA"
              weightClass="Lightweight"
              place="Prague, Czech Republic"
              purse="€5000-€6000"
              isSaved
            />
            <OfferCard
              title="OKTAGON 50"
              date="20.03.2023"
              image="/images/fighter-modal-bg.jpg"
              organization="Oktagon MMA"
              weightClass="Lightweight"
              place="Prague, Czech Republic"
              purse="€5000-€6000"
              isSaved
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default OffersPage;
