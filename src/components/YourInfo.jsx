import React from "react";
import { setGlobalState } from "../store";

const YourInfo = () => {
  return (
    <div className="bg-[#14152A] rounded-md p-4 md:w-[30%] space-y-2 text-white h-fit md:text-start text-center">
      <h1 className="font-semibold border-b border-gray-600 py-4 text-xl md:text-md">
        Your Info
      </h1>
      <div className="space-y-2 py-2 ">
        <div className="flex flex-col-reverse md:flex-row justify-between md:items-start">
          <p className="font-bold text-md md:text-sm mb-2">
            Total StakeHolder Share:
          </p>
          <p className="font-light md:font-thin text-sm mb-2 md:mb-0">
            1500 ETH
          </p>
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-between md:items-start">
          <p className="font-bold text-md md:text-sm">Approved Proposals:</p>
          <p className="font-light md:font-thin text-sm  mb-2 md:mb-0">0</p>
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-between md:items-start">
          <p className="font-bold text-md md:text-sm">Submitted Proposals:</p>
          <p className="font-light md:font-thin text-sm  mb-2 md:mb-0">0</p>
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-between md:items-start">
          <button
          onClick={() => setGlobalState("createProposalModal", "scale-100")}
            className="bg-white text-black text-md font-light
              p-2 w-fit px-4 rounded-full flex hover:to-[#E77FBD]
              transform transition-transform duration-30 justify-center items-center"
          >
            Create Proposal
          </button>
        </div>
      </div>
    </div>
  );
};

export default YourInfo;
