'use client';

import { useRouter } from 'next/navigation';
import OfferCard from '../../../../components/ui/OfferCard';

function Page() {
  const router = useRouter();

  const onClick = () => {
    router.push('/provider/featuring/task-center/oktagon-50');
  };
  return (
    <div className="flex flex-col gap-8">
      <p className="text-center">
        Simply select an event and assign tasks to your team members to maintain
        workflow momentum.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <OfferCard
          title="OKTAGON 50"
          date="20.03.2023"
          image="/images/fighter-modal-bg.jpg"
          eventDate="20.03.2023, Saturday"
          eventPlace="Prague, Czech Republic"
          eventDuration="5PM · 11PM CET"
          link="/provider/events/oktagon-50"
          customAction={onClick}
        />
        <OfferCard
          title="OKTAGON 50"
          date="20.03.2023"
          image="/images/fighter-modal-bg.jpg"
          eventDate="20.03.2023, Saturday"
          eventPlace="Prague, Czech Republic"
          eventDuration="5PM · 11PM CET"
          link="/provider/events/oktagon-50"
          customAction={onClick}
        />
        <OfferCard
          title="OKTAGON 50"
          date="20.03.2023"
          image="/images/fighter-modal-bg.jpg"
          eventDate="20.03.2023, Saturday"
          eventPlace="Prague, Czech Republic"
          eventDuration="5PM · 11PM CET"
          link="/provider/events/oktagon-50"
          customAction={onClick}
        />
      </div>
    </div>
  );
}

export default Page;
