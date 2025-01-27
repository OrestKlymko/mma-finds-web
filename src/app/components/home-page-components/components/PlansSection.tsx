import PlansList from "../../../ui/plans-list/PlansList";

function PlansSection() {
  return (
    <section className="py-16 px-32 flex flex-col items-center gap-7">
      <h5 className="text-center uppercase">no surprise fees</h5>
      <h2 className="text-center">Our pricing plans</h2>
      <PlansList />
    </section>
  );
}

export default PlansSection;
