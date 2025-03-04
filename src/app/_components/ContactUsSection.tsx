'use client';

import Image from 'next/image';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Textarea } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import Link from 'next/link';
import CustomInput from '../../components/ui/inputs/CustomInput';

type Inputs = {
  email: string;
  name: string;
  surname: string;
  text: string;
};

function ContactUsSection() {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <section id="contact_us" className="py-28 px-4 mb:py-6">
      <div className="max-w-screen-xl mx-auto grid grid-cols-2 mb:flex mb:flex-col-reverse gap-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="pr-36 flex flex-col justify-between mb:pr-0"
        >
          <h2 className="max-w-60 capitalize">fill the form to contact us</h2>
          <div className="flex gap-16 mb-7">
            <CustomInput
              variant="underlined"
              placeholder="Name*"
              register={register('name', { required: true })}
            />
            <CustomInput
              variant="underlined"
              placeholder="Surname*"
              register={register('surname', { required: true })}
            />
          </div>
          <CustomInput
            className="mb-7"
            variant="underlined"
            placeholder="Email*"
            register={register('email', { required: true })}
          />
          <Textarea
            className="mb-7"
            {...register('text')}
            placeholder="How can we help you?"
            radius="sm"
            classNames={{
              inputWrapper: 'border-none shadow-[0_1px_0px_0_#00000040]',

              label: 'text-sm bottom-0',
            }}
            variant="underlined"
          />
          <div>
            <Button className="bg-black text-white max-w-[45%]" fullWidth>
              Send Message
            </Button>
            <p className="text-sm mt-3">
              By submitting this form you agree to our{' '}
              <Link className="text-green" href="#">
                Terms and Conditions
              </Link>
            </p>
          </div>
        </form>
        <div className="w-full h-full rounded-md overflow-hidden">
          <Image
            className="w-full h-auto object-cover object-center"
            src="/images/contactus.png"
            width={400}
            height={400}
            alt="contact us image"
          />
        </div>
      </div>
    </section>
  );
}

export default ContactUsSection;
