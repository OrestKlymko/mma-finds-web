'use client';

import { Button } from '@nextui-org/button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '@nextui-org/input';
import CustomInput from '../ui/inputs/CustomInput';
import CustomSelect from '../ui/inputs/CustomSelect';
import { Inputs } from '../../types/inputs';
import { CustomRadioGroup } from '../ui/inputs/CustomRadioQroup';
import SwitchCustom from '../ui/inputs/Switch';
import { useState } from 'react';

function CreatePublicOfferForm() {
  const [step, setStep] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  console.log(errors);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    if (step === 1) {
      setStep(2);
      return;
    }
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
      style={{ margin: '0 auto' }}
    >
      {step === 1 ? (
        <>
          <Input
            className="w-full cursor-default"
            radius="sm"
            label="Event*"
            defaultValue="David MMA"
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
          <CustomRadioGroup
            className="mb-1 mt-1"
            label="MMA Rules*"
            items={[
              { key: 'amateur', label: 'Amateur' },
              { key: 'professional', label: 'Professional' },
            ]}
            register={register('rule', { required: true })}
          />
          <SwitchCustom register={register('isTitle', { required: true })}>
            This fight is a Title Fight*
          </SwitchCustom>
          <CustomSelect
            label="Fight Length* "
            register={register('fightLength', { required: true })}
            items={[
              { key: 'light', label: 'Light' },
              { key: 'middle', label: 'Middle' },
              { key: 'heavy', label: 'Heavy' },
            ]}
          />
          <CustomInput
            label="Purse*"
            register={register('purse', { required: true })}
          />
          <CustomSelect
            label="Benefits* "
            register={register('benefits', { required: true })}
            items={[
              { key: 'light', label: 'Light' },
              { key: 'middle', label: 'Middle' },
              { key: 'heavy', label: 'Heavy' },
            ]}
          />
          <CustomInput register={register('about')} label="Add More Info" />{' '}
        </>
      ) : (
        <>
          <CustomSelect
            className=""
            label="Gender*"
            items={[
              { key: 'male', label: 'Male' },
              { key: 'female', label: 'Female' },
            ]}
            register={register('sex', { required: true })}
          />
          <CustomSelect
            label="Weight class*"
            register={register('weightClass', { required: true })}
            items={[
              { key: 'light', label: 'Light' },
              { key: 'middle', label: 'Middle' },
              { key: 'heavy', label: 'Heavy' },
            ]}
          />
          <CustomSelect
            label="Based In*"
            register={register('based', { required: true })}
            items={[
              { key: 'light', label: 'Light' },
              { key: 'middle', label: 'Middle' },
              { key: 'heavy', label: 'Heavy' },
            ]}
          />
          <div className="flex gap-2">
            <CustomSelect
              label="Minimum Fights*"
              register={register('based', { required: true })}
              items={[
                { key: 'light', label: 'Light' },
                { key: 'middle', label: 'Middle' },
                { key: 'heavy', label: 'Heavy' },
              ]}
            />
            <CustomSelect
              label="Maximum Fights"
              register={register('based', { required: true })}
              items={[
                { key: 'light', label: 'Light' },
                { key: 'middle', label: 'Middle' },
                { key: 'heavy', label: 'Heavy' },
              ]}
            />
          </div>
          <CustomRadioGroup
            className="mb-1 mt-1"
            label="Minimum Win/Loss Ration*"
            items={[
              { key: 'amateur', label: 'Amateur' },
              { key: 'professional', label: 'Professional' },
            ]}
            register={register('rule', { required: true })}
          />
          <CustomRadioGroup
            className="mb-1 mt-1"
            label="Professional MMA Record*"
            items={[
              { key: 'win', label: 'Win' },
              { key: 'lose', label: 'Lose' },
              { key: 'draw', label: 'Draw' },
            ]}
            register={register('professionalRecord', { required: true })}
          />
          <CustomRadioGroup
            label="Amateur MMA Record*"
            items={[
              { key: 'win', label: 'Win' },
              { key: 'lose', label: 'Lose' },
              { key: 'draw', label: 'Draw' },
            ]}
            register={register('amateurRecord', { required: true })}
          />
          <CustomInput
            label="Topology Link*"
            register={register('topology', { required: true })}
          ></CustomInput>

          <CustomInput
            register={register('addMoreInfo')}
            label="Add More Info"
          />
        </>
      )}
      <Button
        className="bg-black text-white mt-5 w-1/4"
        type="submit"
        fullWidth
      >
        Continue
      </Button>
    </form>
  );
}

export default CreatePublicOfferForm;
