'use client';

import CustomSelect from '../../../../../components/ui/inputs/CustomSelect';
import { useForm } from 'react-hook-form';
import { Inputs } from '../../../../../types/inputs';
import { Textarea } from '@nextui-org/input';
import FileInput from '../../../../../components/ui/inputs/FileInput';
import { Button } from '@nextui-org/button';

function Page() {
  const { register, handleSubmit, setValue } = useForm<Inputs>();
  const items = [
    {
      key: 'item',
      value: 'item',
    },
    {
      key: 'item2',
      value: 'item2',
    },
  ];

  const onSubmit = () => {
    console.log();
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <p className="mx-w-[400px]">
        If you couldn't find the answers you were looking for in our FAQs, don't
        worry – we're here to help! Simply create a support ticket, and our
        dedicated team will promptly assist you with your inquiry.
      </p>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <CustomSelect
          label="Select a category"
          register={register('category')}
          className="max-w-[400px]"
          items={items}
        />
        <Textarea
          {...register('about')}
          label="Description"
          placeholder="For a swift resolution to your concern, providing a detailed description of the problem is key."
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
          type="submit"
        >
          Send Request
        </Button>
      </form>
    </div>
  );
}

export default Page;
