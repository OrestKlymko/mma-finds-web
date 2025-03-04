'use client';

import { Select, SelectItem } from '@heroui/select';
import { useState } from 'react';

export default function Page() {
  const currencies = [
    {
      name: 'USD - $',
      img: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg',
    },
    {
      name: 'EUR - €',
      img: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg',
    },
    {
      name: 'GBP - £',
      img: 'https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg',
    },
    {
      name: 'JPY - ¥',
      img: 'https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg',
    },
    {
      name: 'AUD - A$',
      img: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg',
    },
  ];

  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);

  return (
    <div>
      <h6 className="mb-6">Your currency</h6>
      <Select
        variant="bordered"
        className="rounded-none border-b w-1/2 mb:w-full"
        labelPlacement="outside"
        fullWidth
        size="md"
        classNames={{
          selectorIcon: 'scale-[1.4] rotate-[270deg]',
          trigger:
            'border-none bg-transparent border-b border-black rounded-none data-hover:bg-white ',
          label: 'text-[0.75rem]',
        }}
        selectedKeys={[selectedCurrency.name]} // Make selection controlled
        onSelectionChange={(key) => {
          const currency = currencies.find((c) => c.name === key.currentKey);
          if (currency) setSelectedCurrency(currency);
        }}
        startContent={
          <img
            className="h-4 w-6"
            src={selectedCurrency.img}
            alt={selectedCurrency.name}
          />
        }
      >
        {currencies.map((currency) => (
          <SelectItem
            key={currency.name}
            value={currency.name}
            startContent={
              <img className="h-4 w-6" src={currency.img} alt={currency.name} />
            }
          >
            {/* <div className="flex items-center gap-2">
              <img className="h-4 w-6" src={currency.img} alt={currency.name} />
              <span>{currency.name}</span>
            </div> */}
            {currency.name}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}
