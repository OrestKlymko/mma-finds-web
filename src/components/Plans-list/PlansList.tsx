"use client";
import { Button, ButtonGroup } from "@nextui-org/button";

import { useState } from "react";
import { Switch } from "@nextui-org/switch";
import { PLANS_ANNUAL } from "../../mock/plans";
import PlanCard from "./components/PlanCard";

function PlansList({ isAuthorized }: { isAuthorized?: boolean }) {
  const [isManager, setIsManager] = useState(true);
  const [isAnnual, setIsAnnual] = useState(true);
  const annualPlans = PLANS_ANNUAL;
  return (
    <div className="flex flex-col items-center">
      {isAuthorized ? (
        <ButtonGroupAuthorized isAnnual={isAnnual} setIsAnnual={setIsAnnual} />
      ) : (
        <ButtonGroupUnAuthorized
          isManager={isManager}
          setIsManager={setIsManager}
        />
      )}
      <ul className="grid lg:grid-cols-4 gap-7 sm:grid-cols-2">
        {annualPlans.map((feature, index) => (
          <PlanCard
            key={index}
            features={feature}
            isAuthorized={isAuthorized}
          />
        ))}
      </ul>
    </div>
  );
}

export default PlansList;

function ButtonGroupAuthorized({
  isAnnual,
  setIsAnnual,
}: {
  isAnnual: boolean;
  setIsAnnual: (value: boolean) => void;
}) {
  return (
    <ButtonGroup className="flex mb-12 rounded-sm w-full max-w-3xl" size="lg">
      <Button
        onPress={() => setIsAnnual(true)}
        color={isAnnual ? "secondary" : "primary"}
        fullWidth
        size="lg"
        radius="sm"
      >
        <div className="flex flex-col items-center">
          <p className=" leading-[1.1] text-base">Annualy</p>
          <span className="text-sm font-light leading-none">
            Save up to 25%
          </span>
        </div>
      </Button>
      <Button
        onPress={() => setIsAnnual(false)}
        size="lg"
        radius="sm"
        color={!isAnnual ? "secondary" : "primary"}
        fullWidth
      >
        <p className="text-base">Monthly</p>
      </Button>
    </ButtonGroup>
  );
}

function ButtonGroupUnAuthorized({
  isManager,
  setIsManager,
}: {
  isManager: boolean;
  setIsManager: (value: boolean) => void;
}) {
  return (
    <div className="flex flex-col justify-center gap-3 w-full mb-12">
      <ButtonGroup
        className="mx-auto flex rounded-sm w-full max-w-sm"
        size="lg"
      >
        <Button
          onPress={() => setIsManager(true)}
          color={isManager ? "secondary" : "primary"}
          fullWidth
          radius="sm"
        >
          Manager
        </Button>
        <Button
          onPress={() => setIsManager(false)}
          radius="sm"
          color={!isManager ? "secondary" : "primary"}
          fullWidth
        >
          Promotion
        </Button>
      </ButtonGroup>
      <div className="flex items-center justify-center gap-2">
        <div className="flex flex-col items-center">
          <p className="font-semibold leading-none text-base">Annualy</p>
          <span className="text-sm font-light">Save up to 25%</span>
        </div>
        <Switch
          size="sm"
          color="secondary"
          classNames={{
            wrapper: "bg-green rounded-[0.2rem]",
            thumb: "scale-[1.2]",
          }}
        />
        <p className="font-semibold text-base">Monthly</p>
      </div>
    </div>
  );
}
