'use client';

import clsx from 'clsx';
import { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';

function SearchButton() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className={clsx('relative')}>
      <div className="flex h-fit bg-gray-light rounded-full">
        <div>
          <input
            value={searchValue}
            onChange={handleSearch}
            type="text"
            placeholder="Search"
            className={clsx(
              ' bg-gray-light h-full rounded-full rounded-r-none transition-all duration-300',
              {
                'w-0 opacity-0 pl-0': !isSearchOpen,
                'w-56 opacity-100 pl-2': isSearchOpen,
              },
            )}
          />
        </div>
        <div
          className={clsx('rounded-full p-2 cursor-pointer', {
            'bg-green': isSearchOpen,
            'bg-gray-light': !isSearchOpen,
          })}
          onClick={() => setIsSearchOpen(!isSearchOpen)}
        >
          <IoIosSearch
            className={clsx('text-xl', {
              'text-white': isSearchOpen,
            })}
          />
        </div>
      </div>
      {isSearchOpen && searchValue.length ? (
        <div className="absolute top-[145%] w-full bg-white rounded-md overflow-hidden">
          <ul className="overflow-y-auto max-h-[10rem]">
            <li className="p-2 border-b border-gray-light hover:bg-gray">
              JFeonieoeio
            </li>
            <li className="p-2 border-b border-gray-light hover:bg-gray">
              JFeonieoeio
            </li>
            <li className="p-2 border-b border-gray-light hover:bg-gray">
              JFeonieoeio
            </li>
            <li className="p-2 border-b border-gray-light hover:bg-gray last:border-none">
              JFeonieoeio
            </li>
            <li className="p-2 border-b border-gray-light hover:bg-gray last:border-none">
              JFeonieoeio
            </li>
            <li className="p-2 border-b border-gray-light hover:bg-gray last:border-none">
              JFeonieoeio
            </li>
            <li className="p-2 border-b border-gray-light hover:bg-gray last:border-none">
              JFeonieoeio
            </li>
            <li className="p-2 border-b border-gray-light hover:bg-gray last:border-none">
              JFeonieoeio
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default SearchButton;
