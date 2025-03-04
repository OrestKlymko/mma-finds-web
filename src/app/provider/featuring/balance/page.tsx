'use client';
import ChoseCreditOptionModal from '../../../../components/Modal/components/ChoseCreditOptionModal';
import EarnModal from '../../../../components/Modal/components/EarnModal';
import { useModal } from '../../../../components/Providers/ModalProvider';

function Page() {
  const { openModal } = useModal();
  return (
    <div className="w-full flex flex-col gap-8">
      <div className="w-full bg-gray-light p-4 rounded-md self-start">
        <h6 className="text-2xl text-center">Balance Overview</h6>
      </div>
      <div className="flex gap-12 mb:flex-col">
        <div className="flex flex-col gap-2 w-1/2 mb:w-full">
          <h6>Referral Credits</h6>
          <div className="py-3 px-2 rounded-md bg-gray-light">
            <h4>€100</h4>
          </div>
          <p>
            Want to earn more credits? Refer new users to earn extra credits to
            use on your next order.{' '}
          </p>
          <button className="w-fit" onClick={() => openModal(<EarnModal />)}>
            <h4>Earn Now!</h4>
          </button>
        </div>
        <div className="flex flex-col gap-2 w-1/2 mb:w-full">
          <h6>Feature Credits</h6>
          <div className="py-3 px-2 rounded-md bg-gray-light">
            <h4>0 Credits</h4>
          </div>
          <p>
            Purchase credits to raise your fighter&apos;s standing, boosting
            their visibility and increasing their chances for selection.
          </p>
          <button
            className="w-fit"
            onClick={() => openModal(<ChoseCreditOptionModal />)}
          >
            <h4>Purchase Now!</h4>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
