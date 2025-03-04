'use client';

import { Button } from '@nextui-org/button';
import FighterModalLayout from '../../layout/FighterModalLayout';
import { useState } from 'react';
import clsx from 'clsx';
import { useModal } from '../../../Providers/ModalProvider';
import { FaCheck } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { Select, SelectItem } from '@heroui/select';

function ApplyFighterModal({ name, date }: { name: string; date: string }) {
  const [selectedFighter, setSelectedFighter] = useState<string | null>(null);
  const { openModal } = useModal();

  const items = [
    { key: 'Jon Fighter', label: 'Jon Fighter' },
    { key: 'Jon Fighter2', label: 'Jon Fighter2' },
    { key: 'Jon Fighter3', label: 'Jon Fighter3' },
  ];

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFighter(e.target.value);
  };

  const onSubmit = () => {
    console.log('submit', selectedFighter);
    openModal(<FeatureFighter />);
  };

  return (
    <FighterModalLayout>
      <p>Great choice!</p>
      <h6 className="text-green uppercase text-base">
        {name} | {date}
      </h6>
      <p className="text-center">
        Please choose one of your fighters.
        <br />
        Note that only fighters that meet the requirements are displayed.
      </p>
      <div className="flex flex-col items-center gap-2 w-full">
        <Select
          selectedKeys={selectedFighter || ''}
          onChange={onChange}
          variant="bordered"
          label={'Choose a fighter'}
          labelPlacement="outside"
          fullWidth
          size="md"
          classNames={{
            selectorIcon: 'scale-[1.4] rotate-[270deg]',
            trigger: 'border border-black',
            label: 'text-[0.75rem]',
          }}
        >
          {items.map((item) => (
            <SelectItem key={item.key}>{item.label}</SelectItem>
          ))}
        </Select>
        <Button
          isDisabled={!selectedFighter}
          className={clsx(' text-white text-sm max-w-[300px] w-full', {
            'bg-[#3D3D3D]': !selectedFighter,
            'bg-green': selectedFighter,
          })}
          onPress={onSubmit}
        >
          Submit Fighter
        </Button>
      </div>
    </FighterModalLayout>
  );
}

function FeatureFighter() {
  const { openModal } = useModal();

  return (
    <FighterModalLayout>
      <div className="flex flex-col items-center gap-1">
        <h6 className="text-green capitalize text-base">
          Feature your fighter
        </h6>
        <p className="text-center">You currently have 5 credits left.</p>
      </div>
      <p className="text-center">
        Do you want to elevate your fighter&apos;s position, securing a prime
        spot <br />
        on the list of potential fighters?
      </p>
      <Button
        className="bg-green text-white text-sm w-full max-w-[300px]"
        onPress={() => openModal(<OppsModal />)}
      >
        Feature for 1 Credit
      </Button>
      <button
        className="text-[#131313] text-[0.65rem]"
        onClick={() =>
          openModal(<SuccessModal name="John Smith" type="applying" />)
        }
      >
        Continue Without Featuring
      </button>
    </FighterModalLayout>
  );
}

function SuccessModal({
  name,
  type,
}: {
  name: string;
  type: 'featuring' | 'applying';
}) {
  return (
    <FighterModalLayout>
      <div className="w-[70px] aspect-square rounded-full bg-green flex items-center justify-center p-3">
        <FaCheck className="w-full h-full" color="white" />
      </div>

      <h6 className="text-black capitalize text-base">Success!</h6>
      {type === 'applying' && (
        <p className="text-center">
          You have successfully applied{' '}
          <span className="text-green">{name}</span> for this offer.
          <br />
          Wex&apos;ll keep you posted once the best match is chosen!
        </p>
      )}
      {type === 'featuring' && (
        <p className="text-center">
          Thank you for featuring your fighter&apos;s position! As a result,
          your fighter secures
          <br />a prime spot on the list of submitted fighters.{' '}
        </p>
      )}
    </FighterModalLayout>
  );
}

function OppsModal() {
  const router = useRouter();
  const { closeModal } = useModal();

  const onClick = () => {
    router.push('/manager');
    closeModal();
  };
  return (
    <FighterModalLayout>
      <h6 className="text-green text-base">Opps!</h6>
      <p className="text-center">
        You&apos;ve hit the maximum number of fighters allowed for submission
        with <br />
        your current subscription plan.
      </p>
      <Button
        className="bg-green text-white text-sm max-w-[300px] w-full"
        color="secondary"
      >
        Upgrade Plan
      </Button>
      <button className="text-xs" onClick={onClick}>
        Return Home
      </button>
    </FighterModalLayout>
  );
}

export default ApplyFighterModal;
