import { useState } from "react";
import { CiMail } from "react-icons/ci";
import DropdownWrapper from "../../DropDownWrapper/DropDownWrapper";
import clsx from "clsx";
import MailItem from "../../ui/MailItem";

function MailButton() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div className="relative">
      <div
        className={clsx(" rounded-full p-2 cursor-pointer", {
          "bg-green": isDropdownOpen,
          "bg-gray-light": !isDropdownOpen,
        })}
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        <CiMail
          className={clsx("text-xl", {
            "text-white": isDropdownOpen,
            "text-black": !isDropdownOpen,
          })}
        />
      </div>
      {isDropdownOpen && (
        <DropdownWrapper
          className="flex flex-col items-center gap-4 right-0 w-96 shadow-2xl max-h-[600px] overflow-y-auto rounded-sm bg-white"
          onClose={() => setIsDropdownOpen(false)}
          style={{ top: "calc(100% + 1rem)" }}
        >
          <h6 className="w-full p-4 bg-white shadow sticky top-0 z-10 text-center">
            Messages
          </h6>
          <div className="w-full content">
            <MailItem
              isOnline
              name="Sara"
              message="Hello world..."
              avatar="/images/boxer-avatar.jpg"
              date="01.02.2024"
            />
            <MailItem
              name="Sara"
              message="Hello world..."
              avatar="/images/boxer-avatar.jpg"
              date="01.02.2024"
            />
            <MailItem
              name="Sara"
              message="Hello world..."
              avatar="/images/boxer-avatar.jpg"
              date="01.02.2024"
            />
            <MailItem
              name="Sara"
              message="Hello world..."
              avatar="/images/boxer-avatar.jpg"
              date="01.02.2024"
            />
          </div>
          <div className="sticky bottom-0 bg-white p-4 flex justify-end w-full">
            <button className="text-green font-medium">See all</button>
          </div>
        </DropdownWrapper>
      )}
    </div>
  );
}

export default MailButton;
