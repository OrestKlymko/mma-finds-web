'use client';

import { Button } from '@nextui-org/button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '@nextui-org/input';
import CustomInput from '../ui/inputs/CustomInput';
import CustomSelect from '../ui/inputs/CustomSelect';
import { Inputs } from '../../types/inputs';
import PhotoInput from '../ui/inputs/PhotoInput';
import { useModal } from '../Providers/ModalProvider';
import YouReachMaxAmount from '../Modal/components/YouReachMaxAmountModal';

function CreateEventForm() {
  const { register, handleSubmit, setValue } = useForm<Inputs>();
  const { openModal } = useModal();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <>
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
        style={{ margin: '0 auto' }}
      >
        <PhotoInput
          register={register('photo', { required: true })}
          label="Poster*"
          className="w-1/2 mb:w-full"
          setValue={setValue}
          type="poster"
        />

        <Input
          className="w-1/2 cursor-default"
          radius="sm"
          readOnly
          label="Organization*"
          value="David MMA"
          size="md"
          labelPlacement="outside"
          classNames={{
            label: 'text-[0.75rem] text-light pointer-events-none',
            input: 'text-black cursor-default',
            inputWrapper: 'bg-gray cursor-default',
            mainWrapper: 'cursor-default',
            base: 'cursor-default',
            innerWrapper: 'cursor-default',
          }}
        />

        <CustomInput
          label="Event Name*"
          register={register('name', { required: true })}
        />

        <div className="flex gap-2">
          <CustomInput
            className="w-1/2"
            type="date"
            register={register('date', { required: true })}
            label="Event Date*"
          />
          <CustomInput
            className="w-1/2"
            label="Duration of the event*"
            register={register('duration', { required: true })}
          />
        </div>

        <CustomSelect
          label="Event Place*"
          register={register('weightClass', { required: true })}
          items={[
            { key: 'light', label: 'Light' },
            { key: 'middle', label: 'Middle' },
            { key: 'heavy', label: 'Heavy' },
          ]}
        />

        <CustomInput register={register('about')} label="Add More Info" />

        <Button
          className="bg-black text-white mt-5 w-1/4 mb:w-full"
          type="submit"
          fullWidth
          onPress={() => openModal(<YouReachMaxAmount />)}
        >
          Create New Event
        </Button>
      </form>
    </>
  );
}

export default CreateEventForm;
