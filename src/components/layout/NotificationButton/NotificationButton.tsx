import { useState } from 'react';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { IoMailOpenOutline } from 'react-icons/io5';
import { BsTrash3 } from 'react-icons/bs';
import DropdownWrapper from '../../DropDownWrapper/DropDownWrapper';
import clsx from 'clsx';

function NotificationButton() {
  const [isEditing, setIsEditing] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div className="relative">
      <div
        className={clsx(' rounded-full p-2 cursor-pointer', {
          'bg-green': isDropdownOpen,
          'bg-gray-light': !isDropdownOpen,
        })}
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        <IoMdNotificationsOutline
          className={clsx('text-xl', {
            'text-white': isDropdownOpen,
            'text-black': !isDropdownOpen,
          })}
        />
      </div>
      {isDropdownOpen && (
        <DropdownWrapper
          className="mb:-right-44 flex flex-col items-center gap-4 right-0 w-96 shadow-2xl max-h-[600px] overflow-y-auto rounded-sm bg-white"
          onClose={() => setIsDropdownOpen(false)}
          style={{ top: 'calc(100% + 1rem)' }}
        >
          <div>
            <h6 className=" w-full p-4 bg-white shadow sticky top-0 z-10 text-center">
              Notifications
            </h6>
            <div className="w-full content">
              <h4 className="py-2 px-6">Today</h4>
              <NotificationItem
                isEditing={isEditing}
                title="New Fight Opportunity for Jon Doe!"
                description="Great news! Jon Doe is now eligible for a new
fight offer recently added to our newsfeed.
Check out the details and seize this opportunity!"
              />
              <NotificationItem
                isEditing={isEditing}
                title="New Fight Opportunity for Jon Doe!"
                description="Great news! Jon Doe is now eligible for a new
fight offer recently added to our newsfeed.
Check out the details and seize this opportunity!"
              />
              <h4 className="py-2 px-6">Last 7 days</h4>
              <NotificationItem
                isEditing={isEditing}
                title="New Fight Opportunity for Jon Doe!"
                description="Great news! Jon Doe is now eligible for a new
fight offer recently added to our newsfeed.
Check out the details and seize this opportunity!"
              />
              <NotificationItem
                isEditing={isEditing}
                title="New Fight Opportunity for Jon Doe!"
                description="Great news! Jon Doe is now eligible for a new
fight offer recently added to our newsfeed.
Check out the details and seize this opportunity!"
              />
            </div>
            <div className="sticky bottom-0 bg-white p-4 flex justify-end w-full">
              <button
                className="text-green font-medium"
                onClick={() => setIsEditing((prev) => !prev)}
              >
                Edit
              </button>
            </div>
          </div>
        </DropdownWrapper>
      )}
    </div>
  );
}

export default NotificationButton;

function NotificationItem({
  title,
  description,
  isEditing,
}: {
  title: string;
  description: string;
  isEditing: boolean;
}) {
  return (
    <div className="flex gap-2 hover:bg-gray px-6 py-2 border-b border-gray group">
      <IoMdNotificationsOutline className="text-xl shrink-0" />
      <div>
        <p className="font-medium text-sm">{title}</p>
        <p>{description}</p>
      </div>
      {isEditing && (
        <div className="flex gap-2 self-center">
          <button className="flex flex-col items-center py-2 gap-1">
            <IoMailOpenOutline className="text-green w-4 h-4" />
            <p className="capitalize text-green text-[0.6rem]">unread</p>
          </button>
          <span className="w-[2px] bg-gray group-hover:bg-white"></span>
          <button className="flex flex-col items-center py-2 gap-1">
            <BsTrash3 className="text-red w-4 h-4" />
            <p className="capitalize text-red text-[0.6rem]">delete</p>
          </button>
        </div>
      )}
    </div>
  );
}
