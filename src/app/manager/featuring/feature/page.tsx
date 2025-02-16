import { Button } from "@nextui-org/button";
import FighterCard from "../../../../components/ui/FighterCard";

function Page() {
  return (
    <div className="w-full flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <p>Boost Your Fighters&apos; Visibility!</p>
        <p>
          Featuring your fighters enhances their visibility and improves <br />
          their chances of being selected for a given offer.
        </p>
      </div>
      <Button className="w-1/2" color="secondary">
        Feature Your Fighters
      </Button>
      <div>
        <p>None of your fighters are currently featured!</p>
      </div>
      <div className="flex flex-col gap-4">
        <p>Currently Featured</p>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
          <FighterCard />
          <FighterCard />
          <FighterCard />
        </div>
      </div>
    </div>
  );
}

export default Page;
