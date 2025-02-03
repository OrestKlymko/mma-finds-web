import Image from "next/image";
import FeatureCard from "../../components/ui/FeatureCard";
import FighterCard from "../../components/ui/FighterCard";
import OfferCard from "../../components/ui/OfferCard";
import Avatar from "../../components/ui/Avatar";

function OffersPage() {
  return (
    <>
      <section className="bg-black flex flex-col items-center justify-center  min-h-[340px]  gap-2">
        <Image
          className="invert"
          src="/logo.svg"
          width={300}
          height={40}
          alt="logo"
        />
        <h1 className="text-white">Your Ultimate Fight Match Platform</h1>
      </section>
      <section className="py-12">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <FeatureCard
            title="invite friends"
            description="Refer new users to earn extra credits!"
            href="/invite"
            linkText="Invite friends"
          />
          <FeatureCard
            title="Feature Your Fighter"
            description="Purchase credits to raise your fighter's standing!"
            href="/invite"
            linkText="Purchase Credits"
          />
        </div>
      </section>
      <section className="py-12">
        <div className="max-w-screen-xl mx-auto ">
          <h3 className="mb-6">My Fighters</h3>
          <div className="grid grid-cols-3 gap-6">
            <FighterCard />
            <FighterCard />
            <FighterCard />
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="max-w-screen-xl mx-auto ">
          <h3 className="mb-6">My Submissions </h3>
          <div className="grid grid-cols-3 gap-6">
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
      <section className="py-12">
        <div className="max-w-screen-xl mx-auto ">
          <h3 className="mb-6">New Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <FeatureCard
              description="Refer new users to earn extra credits!"
              href="/invite"
              linkText="Invite friends"
            />
            <FeatureCard
              description="Purchase credits to raise your fighter's standing!"
              href="/invite"
              linkText="Purchase Credits"
            />
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="max-w-screen-xl mx-auto ">
          <h3 className="mb-6">My Submissions </h3>
          <div className="grid grid-cols-3 gap-6">
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
      <section className="py-12">
        <div className="max-w-screen-xl mx-auto ">
          <h3 className="mb-6">Messages</h3>
          <div className="flex gap-4">
            <Avatar src="/images/boxer-avatar.jpg" />
            <Avatar src="/images/boxer-avatar.jpg" />
            <Avatar src="/images/boxer-avatar.jpg" />
            <Avatar src="/images/boxer-avatar.jpg" />
            <Avatar src="/images/boxer-avatar.jpg" />
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="max-w-screen-xl mx-auto ">
          <h3 className="mb-6">My Submissions </h3>
          <div className="grid grid-cols-3 gap-6">
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
