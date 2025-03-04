'use client';

import { useState } from 'react';
import { Button } from '@nextui-org/button';
import clsx from 'clsx';

import { FAQS } from '../support/mock/FAQs';
import FileInput from '../../../../components/ui/inputs/FileInput';
import { Textarea } from '@nextui-org/input';
import { useForm } from 'react-hook-form';
import { Inputs } from '../../../../types/inputs';
import { useModal } from '../../../../components/Providers/ModalProvider';
import ThanksForFeedbackModal from '../../../../components/Modal/components/ThanksForFeedbackModal';

function Page() {
  const [selectedType, setSelectedType] = useState(0);
  const { register, handleSubmit, setValue } = useForm<Inputs>();
  const { openModal } = useModal();

  return (
    <div className="w-full flex flex-col gap-8">
      <p className="max-w-[500px]">
        We are truly grateful for any innovative ideas that enhance the overall
        experience of our app users, as your insights play a vital role in
        shaping and enriching our platform!
      </p>
      <h6 className="text-green">To which area is your idea related?</h6>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {FAQS.map((faq, i) => (
          <Button
            key={i}
            fullWidth
            onPress={() => setSelectedType(i)}
            className={clsx({
              'bg-green text-white': i === selectedType,
              'bg-gray-light': i !== selectedType,
            })}
          >
            {faq.type}
          </Button>
        ))}
      </div>
      <div className="flex flex-col gap-6">
        <h6 className="text-green">Tell us about your idea!</h6>
        <form
          className="flex flex-col gap-4 "
          onSubmit={handleSubmit(() => {})}
        >
          <Textarea
            {...register('about')}
            placeholder="Share your innovative idea here…"
            radius="sm"
            classNames={{
              inputWrapper: 'border border-black',

              label: 'text-sm',
            }}
            variant="bordered"
          />
          <FileInput setValue={setValue} register={register('file')} />
          <Button
            fullWidth
            className="max-w-[400px]"
            color="secondary"
            type="button"
            onPress={() => openModal(<ThanksForFeedbackModal />)}
          >
            Send Request
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Page;
