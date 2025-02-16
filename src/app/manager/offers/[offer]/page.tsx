import Image from "next/image";
import Breadcrumbs from "../../../../components/Breadcrums/Breadcrums";
import FightDetails from "../../../../components/ui/Table";
import { Button } from "@nextui-org/button";
import OfferCard from "../../../../components/ui/OfferCard";
import { IoIosHeart } from "react-icons/io";
import SubmitFighterSection from "./_components/SubmitFighterSection";
import { Suspense } from "react";

function Page() {
  const fightData = [
    { label: "Date", value: "2023-10-15" },
    { label: "Location", value: "Las Vegas, NV" },
    { label: "Referee", value: "John Doe" },
    { label: "Rounds", value: "5", isBold: true },
    { label: "Title Fight", value: "Yes", isBold: true },
  ];

  const fighterRequirements = [
    { label: "Gender", value: "Male" },
    { label: "Weight Class", value: "Welterweight" },
    { label: "Based In", value: "Europe" },
    { label: "Minimum Fights", value: "3" },
    { label: "Maximum Fights", value: "12" },
    { label: "Minimum Win/Loss Ratio", value: "2:1" },
    {
      label: "Additional Information",
      value:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
    },
  ];
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className="py-4 border-b-2 border-t-2 border-gray px-4">
        <Breadcrumbs />
      </section>
      <section className="py-12">
        <div className="max-w-screen-xl mx-auto h-96">
          <Image
            className="w-full h-full object-cover object-center"
            width={1000}
            height={600}
            src="/images/boxer-avatar.jpg"
            alt="banner"
          />
        </div>
      </section>
      <SubmitFighterSection />
      <section className="py-7 px-4">
        <div className="max-w-screen-xl mx-auto flex gap-20">
          <div className="w-3/4">
            <h2 className="text-green mb-20 uppercase">Oktagon 32</h2>
            <h6 className="mb-6 capitalize">about the event</h6>
            <p className="mb-12">
              Lorem ipsum dolor sit amet consectetur adipiscing elit torquent,
              tempus cras quam metus morbi molestie faucibus senectus placerat,
              ante posuere sapien nam per varius maximus. Parturient sed mattis
              aliquam feugiat semper iaculis imperdiet primis conubia phasellus,
              aliquet scelerisque praesent nascetur pharetra magnis venenatis
              maecenas orci fringilla, amet sem hac ut placerat mi tristique
              cras rhoncus.
            </p>

            <div className="flex flex-col gap-6">
              <FightDetails title="Fight Info" data={fightData} />
              <FightDetails
                title="Fighter Requirements"
                data={fighterRequirements}
              />
            </div>
          </div>
          <div className="w-1/4 shrink-0">
            <Button className="capitalize mb-20" fullWidth color="secondary">
              submit fighter
            </Button>

            <div>
              <h6 className="mb-6">Event information</h6>
              <div className="flex gap-2 flex-col mb-4">
                <Button fullWidth className="bg-yellow capitalize">
                  title fighter
                </Button>
                <div className="py-3 w-full bg-gray rounded-md flex items-center justify-center">
                  <p className=" text-sm font-medium">
                    Time left to apply: 5 days
                  </p>
                </div>
                <Button fullWidth className="bg-gray capitalize">
                  <IoIosHeart className="w-6 h-6" color="#980909" />
                  add to resenctry saved
                </Button>
              </div>
              <div className="flex gap-2 items-center">
                <div className="flex items-center justify-center h-12 aspect-square p-3 bg-gray rounded-md">
                  <Image
                    className="h-full w-auto"
                    src="/icons/calendar.svg"
                    width={48}
                    height={45}
                    alt="icon"
                  />
                </div>
                <span className="blok w-[2px] bg-gray self-stretch"></span>
                <div className="self-center">
                  <h4>27.01.2024</h4>
                  <p>Saturday, 5PM · 11PM CET</p>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <div className="flex items-center justify-center h-12 aspect-square p-3 bg-gray rounded-md">
                  <Image
                    className="h-full w-auto"
                    src="/icons/map-marker.svg"
                    width={48}
                    height={45}
                    alt="icon"
                  />
                </div>
                <span className="blok w-[2px] bg-gray self-stretch"></span>
                <div className="self-center">
                  <h4>Utilita Arena</h4>
                  <p>Arena Way, Newcastle upon Tyne NE4 7NA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-7 px-4">
        <div className="max-w-screen-xl mx-auto ">
          <h6 className="mb-6">Other Offers You May Like</h6>
          <div className="grid grid-cols-3 gap-4">
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
    </Suspense>
  );
}

export default Page;
