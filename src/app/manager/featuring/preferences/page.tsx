"use client";
import { useState } from "react";
import CustomSwitchControlled from "../../../../components/ui/inputs/CustomSwitchControlled";

function Page() {
  const [messagesEmail, setMessagesEmail] = useState(true);
  const [offerNotificationsEmail, setOfferNotificationsEmail] = useState(true);
  const [messagesPush, setMessagesPush] = useState(true);
  const [offerNotificationsPush, setOfferNotificationsPush] = useState(true);
  const [myAccountPush, setMyAccountPush] = useState(true);
  const [marketingNotificationsPush, setMarketingNotificationsPush] =
    useState(true);

  return (
    <div className="flex flex-col gap-12">
      <div>
        <h6 className="mb-6">Email Notifications</h6>
        <div className="w-1/2">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-light">
            <p className="text-base">Messages</p>
            <CustomSwitchControlled
              onChange={setMessagesEmail}
              value={messagesEmail}
            />
          </div>
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-light">
            <p className="text-base">Offer Notifications</p>
            <CustomSwitchControlled
              onChange={setOfferNotificationsEmail}
              value={offerNotificationsEmail}
            />
          </div>
        </div>
      </div>
      <div>
        <h6 className="mb-6">Push Notifications</h6>
        <div className="w-1/2">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-light">
            <p className="text-base">Messages</p>
            <CustomSwitchControlled
              onChange={setMessagesPush}
              value={messagesPush}
            />
          </div>
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-light">
            <p className="text-base">Offer Notifications</p>
            <CustomSwitchControlled
              onChange={setOfferNotificationsPush}
              value={offerNotificationsPush}
            />
          </div>
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-light">
            <p className="text-base">My Account</p>
            <CustomSwitchControlled
              onChange={setMyAccountPush}
              value={myAccountPush}
            />
          </div>
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-light">
            <p className="text-base">Marketing Notifications </p>
            <CustomSwitchControlled
              onChange={setMarketingNotificationsPush}
              value={marketingNotificationsPush}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
