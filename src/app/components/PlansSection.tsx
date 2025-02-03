import PlansList from "../../components/Plans-list/PlansList";

function PlansSection() {
  return (
    <section id="plans" className="py-16 ">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-7">
        <h5 className="text-center uppercase">no surprise fees</h5>
        <h2 className="text-center">Our pricing plans</h2>
        <PlansList />
      </div>
    </section>
  );
}

export default PlansSection;
