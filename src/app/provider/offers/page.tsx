'use client';
import { Button } from '@nextui-org/button';
import Breadcrumbs from '../../../components/Breadcrums/Breadcrums';
import Image from 'next/image';
import { IoIosSearch } from 'react-icons/io';
import { Input } from '@nextui-org/input';
import clsx from 'clsx';
import { useState } from 'react';
import OfferCard from '../../../components/ui/OfferCard';
import Link from 'next/link';
import { FiPlus } from 'react-icons/fi';

enum Tab {
  PUBLIC = 'public',
  INCLUSIVE = 'inclusive',
}

function Page() {
  const [tab, setTab] = useState('active');
  return (
    <>
      <section className="bg-black flex flex-col items-center justify-center  min-h-[340px] gap-6 px-4">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-white text-3xl font-semibold">My Offers</h1>
          <p className="text-medium text-white">
            View all of your fight offers in one place.
          </p>
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
      <section className="py-7 px-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 w-2/3 mx-auto">
            <Button
              className={clsx('w-full', {
                'bg-green text-white': tab === Tab.PUBLIC,
                'bg-gray-light text-black': tab !== Tab.PUBLIC,
              })}
              onPress={() => setTab(Tab.PUBLIC)}
            >
              Public
            </Button>
            <Button
              className={clsx('w-full', {
                'bg-green text-white': tab === Tab.INCLUSIVE,
                'bg-gray-light text-black': tab !== Tab.INCLUSIVE,
              })}
              onPress={() => setTab(Tab.INCLUSIVE)}
            >
              Inactive
            </Button>
          </div>
        </div>
      </section>
      <section className="py-7 px-4">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <OfferCard
            title="Oktagon 53"
            date="20.03.25"
            image="/images/fighter-modal-bg.jpg"
            applied="John 'The Punisher' Smith"
            reviewDate="2 Days"
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
