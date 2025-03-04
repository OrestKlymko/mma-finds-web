import IconInfo from "../../../../../components/ui/IconInfo";
import { HiClipboardList } from "react-icons/hi";
import { BsFillStarFill } from "react-icons/bs";
import { IoTrendingUpOutline } from "react-icons/io5";

function Page() {
  return (
    <div className="w-full flex flex-col gap-4">
      <p>
        Boosting your fighter&apos;s visibility is simple! Just follow these
        straightforward steps:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <IconInfo
          title="Choose Offer"
          description="Select the fight offer where you've submitted your fighter
that you would like to feature."
          Icon={HiClipboardList}
        />
        <IconInfo
          title="Feature Your Fighter"
          description='Click the "Feature Your Fighter" button
on the selected offer.'
          Icon={BsFillStarFill}
        />
        <IconInfo
          title="Enhance Visibility"
          description="Experience enhanced visibility and increased chances of
selection for your fighter with our featuring option."
          Icon={IoTrendingUpOutline}
        />
      </div>
    </div>
  );
}

export default Page;
