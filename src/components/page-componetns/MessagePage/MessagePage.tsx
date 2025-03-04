import Breadcrumbs from '../../Breadcrums/Breadcrums';
import Chat from '../../Chat/Chat';
import Avatar from '../../ui/Avatar';
import MessageInfo from './_components/MessageInfo';
import SideBar from './_components/SideBar';

function MessagePage() {
  return (
    <>
      <section className="bg-black flex flex-col items-center justify-center  min-h-[240px]  gap-2">
        <h1 className="text-white text-3xl">Messages</h1>
      </section>
      <section className="py-4 border-b-2 border-t-2 border-gray px-4">
        <Breadcrumbs />
      </section>
      <section className="py-12 px-4 h-[90dvh]">
        <div className="w-full max-w-screen-xl mx-auto flex gap-8 h-full">
          <SideBar />
          <div className="w-full h-full flex flex-col gap-4">
            <div className="h-16 flex items-center gap-4">
              <Avatar className="h-full" src="/images/boxer-avatar.jpg" />
              <h3>Sara</h3>
            </div>
            <span className="h-[2px] w-full rounded-xl block bg-gray-light"></span>
            <Chat />
          </div>
          <MessageInfo
            image="/images/boxer-avatar.jpg"
            title="Oktagon 34"
            date="12.04.25"
            organization="Oktagon"
            place="Milan, Italy"
            isTitle
            weightClass="Lightweight"
            purse="1000$"
          />
        </div>
      </section>
    </>
  );
}

export default MessagePage;
