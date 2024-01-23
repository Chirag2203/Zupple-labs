// shows the details of a particular transaction on explorer page
// handleClick is used to close the details block

import React from "react";
import { FaClipboard } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

interface DetailsBlockProps {
  handleClick: () => void;
}

const DetailsBlock: React.FC<DetailsBlockProps> = ({ handleClick }) => {
  return (
    <div className="flex flex-col items-start w-full">
      <div className="flex justify-between items-center w-full">
        <p className="text-2xl font-medium mt-4 flex items-center gap-2">
          Block <span className="text-purple-300">667306</span>
        </p>
        <IoMdCloseCircle
          className="text-red-900 hover:opacity-80 text-2xl cursor-pointer"
          onClick={handleClick}
        />
      </div>
      <div className="flex sm:flex-row flex-col md:px-4 px-2 py-4 gap-4 glass mt-4 rounded-md w-full">
        <div className="sm:w-1/2 flex flex-col gap-4">
          <div className="colorDisplay">
            <p>Hash</p>
            <p className="flex gap-2 items-center w-1/2">
              <span className="text-purple-300">01010101..12EX</span>
              <FaClipboard />{" "}
            </p>
          </div>

          <div className="normalDisplay">
            <p className="w-1/2">Timestamp</p>
            <p className="w-1/2">2021-01-23 08:47 (1 hour ago)</p>
          </div>

          <div className="colorDisplay">
            <p className="w-1/2">Size</p>
            <p className="w-1/2">1.39MB</p>
          </div>
          <div className="normalDisplay">
            <p className="w-1/2">Weight</p>
            <p className="w-1/2">3.99MWU</p>
          </div>
        </div>
        <div className="sm:w-1/2 flex flex-col gap-4">
          <div className="colorDisplay">
            <p className="w-1/2">Total fees</p>
            <p className="w-1/2">
              0.43 BTC <span className="text-green-500">($13,710)</span>
            </p>
          </div>
          <div className="normalDisplay">
            <p className="w-1/2">Subsidy + Fees</p>
            <p className="w-1/2">
              0.68 BTC <span className="text-green-500">($213,136) </span>
            </p>
          </div>
          <div className="colorDisplay">
            <p className="w-1/2">Miner</p>
            <p className="w-1/2">Spider pool</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsBlock;
