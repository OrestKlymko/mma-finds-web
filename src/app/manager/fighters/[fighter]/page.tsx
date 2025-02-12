import { Button } from "@nextui-org/button";
import Breadcrumbs from "../../../../components/Breadcrums/Breadcrums";
import Avatar from "../../../../components/ui/Avatar";
import { Switch } from "@nextui-org/switch";
import FightDetails from "../../../../components/ui/Table";
import Image from "next/image";
import { LuLink } from "react-icons/lu";
import FighterCard from "../../../../components/ui/FighterCard";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";

function Page() {
  const fighter = {
    name: "Mike Tyson",
    avatar: "/images/boxer-avatar.jpg",
    manager: "John Doe",
    about:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit torquent, tempus cras quam metus morbi molestie faucibus senectus placerat, ante posuere sapien nam per varius maximus. Parturient sed matti aliquam feugiat semper iaculis imperdiet primis conubia phasellus, aliquet scelerisque praesent nascetur pharetra magnis venenatis maecenas orci fringilla, amet sem hac ut placerat mi tristique cras rhoncus.",
    data: [
      {
        label: "gender",
        value: "male",
      },
      {
        label: "weight class",
        value: "welterweight",
      },
      {
        label: "based in",
        value: "europe",
      },
      {
        label: "minimum fights",
        value: "3",
      },
      {
        label: "maximum fights",
        value: "12",
      },
      {
        label: "minimum win/loss ratio",
        value: "2:1",
      },
      {
        label: "additional information",
        value:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
      },
    ],
    links: [
      {
        title: "Tapology",
        url: "#",
      },
      {
        title: "Sherdog",
        url: "#",
      },
      {
        title: "instagram",
        url: "#",
      },
    ],
  };
  return (
    <>
      <section className="py-4 border-b-2 border-t-2 border-gray">
        <Breadcrumbs />
      </section>
      <section className="py-7 px-4">
        <div className="max-w-screen-xl mx-auto flex gap-20">
          <div className="flex items-center gap-4 w-full">
            <Avatar
              className="w-26"
              src={fighter.avatar}
              isEditable
              fighter={fighter.name}
            />
            <div className="flex flex-col gap-1">
              <h4 className="text-2xl">{fighter.name}</h4>
              <h6 className="text-xl font-normal">
                Manager: <span className="text-green">{fighter.manager}</span>
              </h6>
            </div>
            <div className="w-1/4 ml-auto">
              <div className="flex flex-col gap-4">
                <Link href={`/manager/fighters/${fighter.name}/submissions`}>
                  <Button className="capitalize" fullWidth color="secondary">
                    View Submissions
                  </Button>
                </Link>

                <Switch
                  size="sm"
                  color="secondary"
                  classNames={{
                    wrapper: "bg-red rounded-[0.2rem]",
                    thumb: "scale-[1.2]",
                  }}
                >
                  This fighter is actively looking for a fight
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-7 px-4">
        <div className="max-w-screen-xl mx-auto flex gap-20 ">
          <div className="w-3/4">
            <h6 className="mb-6">About the fighter</h6>
            <p className="mb-12">{fighter.about}</p>
            <FightDetails data={fighter.data} />
          </div>
          <div className="w-1/4 shrink-0">
            <h6 className="mb-6">Links</h6>
            <div className="flex flex-col gap-4">
              {fighter.links.map((link, index) => (
                <LinkBox key={index} title={link.title} url={link.url} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-7 px-4">
        <div className="max-w-screen-xl mx-auto">
          <h6 className="mb-6">Other Fighters</h6>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <FighterCard />
            <FighterCard />
            <FighterCard />
            <FighterCard />

            <Link
              href="/manager/fighters/create"
              className="w-[28%] bg-green flex flex-col gap-2 items-center justify-center h-full text-white rounded-md hover:bg-emerald-800"
            >
              <FiPlus className="w-8 h-8" color="white" />
              <div className="flex flex-col items-center">
                <p>Create Fighter</p>
                <p>Profile</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function LinkBox({ title, url }: { title: string; url: string }) {
  return (
    <div className="flex gap-2 items-center">
      <div className="flex items-center justify-center h-12 aspect-square p-3 bg-gray rounded-md">
        <LuLink className="h-full w-auto" />
      </div>
      <span className="blok w-[2px] bg-gray self-stretch"></span>
      <div className="self-center">
        <h4>{title}</h4>
        <a href={url} className="text-blue-600 text-xs">
          Click to open
        </a>
      </div>
    </div>
  );
}

export default Page;
