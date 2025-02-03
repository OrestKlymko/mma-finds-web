import Image from "next/image";
import PlansList from "../../components/Plans-list/PlansList";

function Plans() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 px-16 py-16">
      <div className="overflow-hidden rounded-full aspect-square w-[75px]">
        <Image
          className="h-full w-full aspect-square object-cover object-center"
          width={75}
          height={75}
          src="/images/boxer-avatar.jpg"
          alt="fighter"
        />
      </div>
      <div className="flex flex-col items-center">
        <p>Hellow, David MMA</p>
        <h3>Choose your plan</h3>
      </div>
      <PlansList isAuthorized />
    </section>
  );
}

export default Plans;
