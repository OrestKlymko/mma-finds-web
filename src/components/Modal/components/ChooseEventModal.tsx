import { useModal } from '../../Providers/ModalProvider';
import OfferCard from '../../ui/OfferCard';

function ChooseEventModal() {
  const { setEventID, closeModal } = useModal();

  return (
    <div className="w-full max-w-[1000px] h-full max-h-[600px] flex flex-col items-center gap-8 overflow-hidden rounded-3xl bg-white px-12 py-16">
      <h3>My Events</h3>
      <p className="text-xl">Please choose an event for this task.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto">
        <OfferCard
          title="OKTAGON 50"
          date="20.03.2023"
          image="/images/fighter-modal-bg.jpg"
          eventDate="20.03.2023, Saturday"
          eventPlace="Prague, Czech Republic"
          eventDuration="5PM · 11PM CET"
          link="/provider/events/oktagon-50"
          customAction={() => {
            setEventID('oktagon-50');
            closeModal();
          }}
        />
        <OfferCard
          title="OKTAGON 50"
          date="20.03.2023"
          image="/images/fighter-modal-bg.jpg"
          eventDate="20.03.2023, Saturday"
          eventPlace="Prague, Czech Republic"
          eventDuration="5PM · 11PM CET"
          link="/provider/events/oktagon-50"
          customAction={() => {
            setEventID('oktagon-50');
            closeModal();
          }}
        />
        <OfferCard
          title="OKTAGON 50"
          date="20.03.2023"
          image="/images/fighter-modal-bg.jpg"
          eventDate="20.03.2023, Saturday"
          eventPlace="Prague, Czech Republic"
          eventDuration="5PM · 11PM CET"
          link="/provider/events/oktagon-50"
          customAction={() => {
            setEventID('oktagon-50');
            closeModal();
          }}
        />
      </div>
    </div>
  );
}

export default ChooseEventModal;
