'use client';

import clsx from 'clsx';
import { useState, useEffect, useRef } from 'react';
import { IoSend } from 'react-icons/io5';
import { GrAttachment } from 'react-icons/gr';

function Chat() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      content: 'Hello, how can I help you today?',
      sender: 'agent',
      timestamp: '10:00',
    },
    {
      id: 2,
      content: 'I have a problem with my account',
      sender: 'user',
      timestamp: '10:01',
    },
    {
      id: 3,
      content: 'What seems to be the problem?',
      sender: 'agent',
      timestamp: '10:02',
    },
    { id: 4, content: "I can't login", sender: 'user', timestamp: '10:03' },
    {
      id: 5,
      content: 'Have you tried resetting your password?',
      sender: 'agent',
      timestamp: '10:04',
    },
    {
      id: 6,
      content: "Yes, but it doesn't work",
      sender: 'user',
      timestamp: '10:05',
    },
    {
      id: 7,
      content: 'I will reset it for you',
      sender: 'agent',
      timestamp: '10:06',
    },
    { id: 8, content: 'Thank you', sender: 'user', timestamp: '10:07' },
  ]);
  const [file, setFile] = useState<File | null>(null);
  const [input, setInput] = useState('');
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = () => {
    if (input.trim() === '') return;
    const newMessage = {
      id: messages.length + 1,
      content: input,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };
    console.log(file);
    setMessages([...messages, newMessage]);
    setInput('');
  };

  return (
    <div className="w-full mx-auto h-full min-h-[500px] flex flex-col rounded-lg bg-white">
      <div
        ref={messagesRef}
        className="flex-1 overflow-auto p-4 space-y-2 flex flex-col"
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div className="w-fit max-w-[65%]">
              <div
                className={`p-4 rounded-md ${
                  msg.sender === 'user' ? 'bg-[#CCCBCB]' : 'bg-gray-light'
                }`}
              >
                <p className="text-sm">{msg.content}</p>
              </div>
              <p
                className={clsx('text-xs text-[#929AA1] mt-2', {
                  'text-right': msg.sender === 'user',
                  'text-left': msg.sender === 'agent',
                })}
              >
                {msg.timestamp}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 flex items-center gap-2">
        <div className="w-full relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-gray rounded-md p-3 focus:outline-none w-full"
            placeholder="Type a message..."
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="absolute top-1/2 right-4 -translate-y-1/2"
          >
            <IoSend />
          </button>
        </div>

        <FileInput setFile={setFile} />
      </div>
    </div>
  );
}

function FileInput({
  setFile,
}: {
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
}) {
  const inputFileHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) {
      setFile(null);
      return;
    }
    if (e.target.files?.length) {
      const file = e.target.files[0];
      setFile(file);
    }
  };

  return (
    <div className={clsx('flex h-full items-center justify-between')}>
      <label htmlFor="file" className="w-full h-full cursor-pointer">
        <input hidden type="file" id="file" onChange={inputFileHandler} />
        <input type="hidden" />
        <button className="h-full rounded-md aspect-square flex items-center justify-center pointer-events-none bg-gray-light px-0">
          <GrAttachment />
        </button>
      </label>
    </div>
  );
}

export default Chat;
