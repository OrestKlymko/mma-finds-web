'use client';
import { Button } from '@nextui-org/button';
import { useEffect, useState } from 'react';
import { TICKETS } from '../mock/tickets';
import clsx from 'clsx';
import { Input } from '@nextui-org/input';
import { IoIosSearch } from 'react-icons/io';
import { FaCheck } from 'react-icons/fa6';
import { LuClock } from 'react-icons/lu';
import Chat from '../../../../../components/Chat/Chat';

interface Ticket {
  type: string;
  number: number;
  title: string;
}

function Page() {
  const [tickets, setTickets] = useState<Ticket[] | []>([]);
  const [filteredTickets, setFilteredTickets] = useState('all');
  const [openedTicket, setOpenedTicket] = useState<Ticket | null>(null);

  useEffect(() => {
    setOpenedTicket(null);
    if (filteredTickets === 'open') {
      setTickets(TICKETS.filter((ticket) => ticket.type === 'open'));
      return;
    }
    if (filteredTickets === 'closed') {
      setTickets(TICKETS.filter((ticket) => ticket.type === 'closed'));
      return;
    }
    setTickets(TICKETS);
  }, [filteredTickets]);

  return (
    <div className="">
      <div className="flex items-center gap-2  mb-8">
        <Button
          className={clsx('bg-gray-light', {
            'bg-green text-white': filteredTickets === 'all',
          })}
          fullWidth
          onPress={() => setFilteredTickets('all')}
        >
          All
        </Button>
        <Button
          className={clsx('bg-gray-light', {
            'bg-green text-white': filteredTickets === 'open',
          })}
          fullWidth
          onPress={() => setFilteredTickets('open')}
        >
          Open
        </Button>
        <Button
          className={clsx('bg-gray-light', {
            'bg-green text-white': filteredTickets === 'closed',
          })}
          fullWidth
          onPress={() => setFilteredTickets('closed')}
        >
          Closed
        </Button>
        <Input
          className="shrink-0 max-w-[300px]"
          placeholder="Search for a ticket..."
          variant="flat"
          endContent={
            <button className="flex p-3 pr-0 items-center justify-center h-full aspect-square active:scale-95">
              <IoIosSearch className="h-full w-auto" />
            </button>
          }
        />
      </div>

      {!openedTicket && (
        <div className="flex flex-col gap-2">
          {tickets.map((ticket) => (
            <div
              key={ticket.number}
              className="flex items-center py-4 px-8 justify-between rounded-md bg-gray-light cursor-pointer"
              onClick={() => setOpenedTicket(ticket)}
            >
              <div>
                <p
                  className={clsx('font-medium', {
                    'text-green': ticket.type === 'closed',
                    'text-[#FFB859]': ticket.type === 'open',
                  })}
                >
                  Ticket number: {ticket.number}
                </p>
                <p className="font-medium">{ticket.title}</p>
              </div>
              {ticket.type === 'closed' && <FaCheck className="  text-green" />}
              {ticket.type === 'open' && (
                <LuClock className=" text-[#FFB859]" />
              )}
            </div>
          ))}
        </div>
      )}

      {openedTicket && (
        <div className="">
          <h6 className="mb-2">Ticket number: {openedTicket.number}</h6>
          <div className="flex items-center py-4 px-8 justify-between rounded-md bg-gray-light mb-6">
            <div>
              <p
                className={clsx('font-medium', {
                  'text-green': openedTicket.type === 'closed',
                  'text-[#FFB859]': openedTicket.type === 'open',
                })}
              >
                Ticket number: {openedTicket.number}
              </p>
              <p className="font-medium">{openedTicket.title}</p>
            </div>
            {openedTicket.type === 'closed' && (
              <FaCheck className="  text-green" />
            )}
            {openedTicket.type === 'open' && (
              <LuClock className=" text-[#FFB859]" />
            )}
          </div>

          <div className="border-t border-gray-light h-[600px]">
            <Chat />
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
