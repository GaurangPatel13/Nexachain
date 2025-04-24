import React from "react";
import { IoIosCheckmark } from "react-icons/io";

const New = () => {
  return (
    <div className="flex relative z-50 flex-col mt-20 lg:w-4xl space-y-16">
      <div className="relative w-full flex justify-between">
        <div className="w-4/2">
          <h1 className="text-xl font-semibold text-[var(--color-pink)]">
            Analyzing the Requirements
          </h1>
          <ul className="text-sm font-semibold">
            <p className="flex items-center gap-2">
              <IoIosCheckmark className="text-[var(--color-pink)] bg-[rgba(232,0,83,0.4)]" />
              <li>Comprehend business requirements</li>
            </p>
            <p className="flex items-center gap-2">
              <IoIosCheckmark className="text-[var(--color-pink)] bg-[rgba(232,0,83,0.4)]" />
              <li>Pick the business logic to be infused</li>
            </p>
            <p className="flex items-center gap-2">
              <IoIosCheckmark className="text-[var(--color-pink)] bg-[rgba(232,0,83,0.4)]" />
              <li>Prepare the roadmap</li>
            </p>
          </ul>
        </div>
        <div className="relative">
          <div className="p-4 text-center text-white bg-[var(--color-pink)] w-14 h-14">
            01
          </div>
          <div className="absolute left-1/2 h-24 border-l-2 border-dashed border-gray-500"></div>
        </div>

        <div className="w-4/2 ml-10"></div>
      </div>
      <div className="w-full flex justify-between">
        <div className="w-4/2"></div>
        <div className="relative">
          <div className="p-4 text-center text-white bg-[var(--color-orange)] w-14 h-14">
            02
          </div>
          <div className="absolute left-1/2 h-24 border-l-2 border-dashed border-gray-500"></div>
        </div>
        <div className="w-4/2 ml-10">
          <h1 className="text-xl font-semibold text-[var(--color-orange)]">
            Creating the Technical Design
          </h1>
          <ul className="text-sm font-semibold">
            <p className="flex items-center gap-2">
              <IoIosCheckmark className="text-[var(--color-orange)] bg-[rgba(255,152,14,0.3)]" />
              <li>Create a document defining the smart contract</li>
            </p>
            <p className="flex items-center gap-2">
              <IoIosCheckmark className="text-[var(--color-orange)] bg-[rgba(255,152,14,0.3)]" />
              <li>Data flow diagram creation</li>
            </p>
            <p className="flex items-center gap-2">
              <IoIosCheckmark className="text-[var(--color-orange)] bg-[rgba(255,152,14,0.3)]" />
              <li>Design technical architecture</li>
            </p>
          </ul>
        </div>
      </div>
      <div className="w-full flex justify-between">
        <div className="w-4/2">
          <h1 className="text-xl font-semibold text-[var(--color-blue)]">
            Proceeding with the Development
          </h1>
          <ul className="text-sm font-semibold">
            <p className="flex items-center gap-2">
              <IoIosCheckmark className="text-[var(--color-blue)] bg-[rgba(217,242,8255,1)]" />
              <li>Implement proposed smart contract solution</li>
            </p>
            <p className="flex items-center gap-2">
              <IoIosCheckmark className="text-[var(--color-blue)] bg-[rgba(217,242,8255,1)]" />
              <li>Client evaluation and feedback</li>
            </p>
            <p className="flex items-center gap-2">
              <IoIosCheckmark className="text-[var(--color-blue)] bg-[rgba(217,242,8255,1)]" />
              <li>Complete the smart contract development</li>
            </p>
          </ul>
        </div>
        <div className="relative">
          <div className="p-4 text-center text-white bg-[var(--color-blue)] w-14 h-14">
            03
          </div>
          <div className="absolute left-1/2 h-24 border-l-2 border-dashed border-gray-500"></div>
        </div>
        <div className="w-4/2 ml-10"></div>
      </div>
      <div className="w-full flex justify-between">
        <div className="w-4/2"></div>
        <div className="p-4 text-center text-white bg-[var(--color-purple)] w-14 h-14">
          04
        </div>
        <div className="w-4/2 ml-10">
          <h1 className="text-xl font-semibold text-[var(--color-purple)]">
            Deployment and Testing
          </h1>
          <ul className="text-sm font-semibold">
            <p className="flex items-center gap-2">
              <IoIosCheckmark className="text-[var(--color-purple)] bg-[rgba(137,67,255,0.3)]" />
              <li>Testnet deployment</li>
            </p>
            <p className="flex items-center gap-2">
              <IoIosCheckmark className="text-[var(--color-purple)] bg-[rgba(137,67,255,0.3)]" />
              <li>Smart contract deployment on Main network</li>
            </p>
            <p className="flex items-center gap-2">
              <IoIosCheckmark className="text-[var(--color-purple)] bg-[rgba(137,67,255,0.3)]" />
              <li>Prioritize the backlog</li>
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default New;
