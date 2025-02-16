import Link from "next/link";
import FighterCard from "../../../../components/ui/FighterCard";
import { FiPlus } from "react-icons/fi";

function Fighters() {
  return (
    <div className="w-full flex flex-col gap-8">
      <div className="w-full bg-gray-light p-4 rounded-md self-start">
        <h6 className="text-2xl text-center">My Fighters</h6>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <FighterCard />
        <FighterCard />
        <FighterCard />
        <FighterCard />
        <Link
          href="/manager/fighters/create"
          className="w-[28%] py-3 bg-green flex flex-col gap-2 items-center justify-center h-full text-white rounded-md hover:bg-emerald-800"
        >
          <FiPlus className="w-8 h-8" color="white" />
          <div className="flex flex-col items-center">
            <p>Create Fighter</p>
            <p>Profile</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Fighters;
