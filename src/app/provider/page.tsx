import Image from 'next/image';
import FeatureCard from '../../components/ui/FeatureCard';
import OfferCard from '../../components/ui/OfferCard';
import Avatar from '../../components/ui/Avatar';
import Link from 'next/link';

function OffersPage() {
  return (
    <>
      <section className="bg-black flex flex-col items-center justify-center  min-h-[340px] px-4  gap-2">
        <Image
          className="invert"
          src="/logo.svg"
          width={300}
          height={40}
          alt="logo"
        />
        <h1 className="text-white mb:text-center">
          Your Ultimate Fight Match Platform
        </h1>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <FeatureCard
            title="invite friends"
            description="Refer new users to earn extra credits!"
            href="/provider/featuring/friends"
            linkText="Invite friends"
          />
          <FeatureCard
            title="Feature Your Fighter"
            description="Purchase credits to raise your fighter's standing!"
            href="/provider/featuring/feature"
            linkText="Purchase Credits"
          />
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-screen-xl mx-auto ">
          <div className="flex justify-between items-center">
            <h3 className="mb-6">My Events</h3>
            <Link
              className="text-base font-medium text-green"
              href="/provider/events"
            >
              See All
            </Link>
          </div>
          <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <OfferCard
              title="OKTAGON 50"
              date="20.03.2023"
              image="/images/fighter-modal-bg.jpg"
              eventDate="20.03.2023, Saturday"
              eventPlace="Prague, Czech Republic"
              eventDuration="5PM · 11PM CET"
              link="/provider/events/oktagon-50"
            />
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-screen-xl mx-auto ">
          <div className="flex items-center justify-between">
            <h3 className="mb-6">New Features</h3>{' '}
            <Link
              className="text-base font-medium text-green"
              href="/provider/featuring/feature"
            >
              See All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <FeatureCard
              description="New Feature Added!
Simply slide left to edit all of your
notifications!"
              href="/provider/featuring/feature"
              linkText="Invite friends"
            />
            <FeatureCard
              description="New Feature Added!
Simply slide left to edit all of your
notifications!"
              href="/provider/featuring/feature"
              linkText="Purchase Credits"
            />
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-screen-xl mx-auto ">
          <div className="flex items-center justify-between">
            <h3 className="mb-6">My Offers</h3>{' '}
            <Link
              className="text-base font-medium text-green"
              href="/provider/offers"
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
            />
            <OfferCard
              title="OKTAGON 50"
              date="20.03.2023"
              image="/images/fighter-modal-bg.jpg"
              organization="Oktagon MMA"
              weightClass="Lightweight"
              place="Prague, Czech Republic"
              purse="€5000-€6000"
            />
            <OfferCard
              title="OKTAGON 50"
              date="20.03.2023"
              image="/images/fighter-modal-bg.jpg"
              organization="Oktagon MMA"
              weightClass="Lightweight"
              place="Prague, Czech Republic"
              purse="€5000-€6000"
            />
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-screen-xl mx-auto ">
          <div className="flex items-center justify-between">
            <h3 className="mb-6">Messages</h3>{' '}
            <Link
              className="text-base font-medium text-green"
              href="/provider/messages"
            >
              See All
            </Link>
          </div>
          <div className="flex gap-4 mb:grid mb:grid-cols-3 ">
            <Avatar src="/images/boxer-avatar.jpg" />
            <Avatar src="/images/boxer-avatar.jpg" />
            <Avatar src="/images/boxer-avatar.jpg" />
            <Avatar src="/images/boxer-avatar.jpg" />
            <Avatar src="/images/boxer-avatar.jpg" />
          </div>
        </div>
      </section>
    </>
  );
}

export default OffersPage;
