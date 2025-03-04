import { Button } from '@nextui-org/button';
import Breadcrumbs from '../../../components/Breadcrums/Breadcrums';
import Image from 'next/image';

import { IoIosSearch } from 'react-icons/io';
import { Input } from '@nextui-org/input';
import OfferCard from '../../../components/ui/OfferCard';
import Link from 'next/link';
import { FiPlus } from 'react-icons/fi';

function Page() {
  return (
    <>
      <section className="bg-black flex flex-col items-center justify-center  min-h-[340px] gap-6 px-4">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-white text-3xl font-semibold">My Events</h1>
          <p className="text-medium text-white">View all of your events.</p>
        </div>
        <div className="w-full max-w-[550px] relative">
          <div className="flex items-center gap-1 w-full">
            <Input
              placeholder="Search for Fighter..."
              fullWidth
              endContent={
                <button>
                  <IoIosSearch className="text-xl" />
                </button>
              }
            />
            <Button className="min-w-9 px-2" color="secondary">
              <Image
                src="/icons/filter.svg"
                width={16}
                height={16}
                alt="settings"
              />
            </Button>
          </div>
        </div>
      </section>
      <section className="py-4 border-b-2 border-gray px-4">
        <Breadcrumbs />
      </section>
      <section className="py-7 px-4 min-h-[60dvh]">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <OfferCard
            title="OKTAGON 50"
            date="20.03.2023"
            image="/images/fighter-modal-bg.jpg"
            eventDate="20.03.2023, Saturday"
            eventPlace="Prague, Czech Republic"
            eventDuration="5PM · 11PM CET"
            link="/provider/events/oktagon-50"
          />
          <OfferCard
            title="OKTAGON 50"
            date="20.03.2023"
            image="/images/fighter-modal-bg.jpg"
            eventDate="20.03.2023, Saturday"
            eventPlace="Prague, Czech Republic"
            eventDuration="5PM · 11PM CET"
            link="/provider/events/oktagon-50"
          />
          <Link
            href="/provider/events/create"
            className=" self-end w-[28%] h-[36%] mb:h-full bg-green flex flex-col gap-2 items-center justify-center text-white rounded-md hover:bg-emerald-800"
          >
            <FiPlus className="w-8 h-8" color="white" />
            <div className="flex flex-col items-center">
              <p>Create New</p>
              <p>Event</p>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Page;
