"use client";

import { Button, ButtonGroup } from "@nextui-org/button";
import { useState } from "react";

function BenefitsSection() {
  const [isManager, setIsManager] = useState(true);

  return (
    <section className="flex flex-col items-center px-4 py-28">
      <h3 className="text-gray-500 uppercase tracking-wider text-sm mb-2 opacity-50">
        WHY US
      </h3>
      <h1 className="text-2xl font-bold text-center mb-4">
        Our Platforms Benefits
      </h1>
      <p className="text-center text-gray-600 max-w-2xl mb-6 ">
        At MMA Finds, we carefully analyzed each step, ensuring that we
        simplified processes to make them quick and effortless.
      </p>{" "}
      <ButtonGroup className="flex mb-8 rounded-sm w-full max-w-sm" size="lg">
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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-6xl">
        <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow">
          <div className="text-3xl text-green-600 mb-4">🔄</div>
          <h3 className="text-lg font-semibold mb-2 text-center">Save Time</h3>
          <p className="text-gray-600 text-center text-[0.75rem] font-thin">
            We've streamlined the matchmaking process to eliminate the need for
            time-consuming communication with fighter representatives.
          </p>
        </div>
        <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow">
          <div className="text-3xl text-green-600 mb-4">⤢</div>
          <h3 className="text-lg font-semibold mb-2 text-center">
            Expand Possibilities
          </h3>
          <p className="text-gray-600 text-center text-[0.75rem] font-thin">
            With exclusive access to our extensive network of fighter
            representatives, discovering the ideal match for your event has
            never been easier.
          </p>
        </div>
        <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow">
          <div className="text-3xl text-green-600 mb-4">⭐</div>
          <h3 className="text-lg font-semibold mb-2 text-center">
            Streamline Communication
          </h3>
          <p className="text-gray-600 text-center text-[0.75rem] font-thin">
            Enjoy the simplicity of a single platform for all your matchmaking
            needs, eliminating the challenge of managing multiple communication
            channels with fighter representatives.
          </p>
        </div>
        <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow">
          <div className="text-3xl text-green-600 mb-4">📈</div>
          <h3 className="text-lg font-semibold mb-2 text-center">
            Earn Passive Income
          </h3>
          <p className="text-gray-600 text-center text-[0.75rem]">
            Generate passive income while contributing to the growth of our
            vibrant community.
          </p>
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;
