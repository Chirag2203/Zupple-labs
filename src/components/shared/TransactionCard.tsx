// Shows the transactions data in a card format on explorer page

import { TransactionsData } from "@/lib/Types";
import React from "react";
import {
  FaArrowAltCircleRight,
  FaRegArrowAltCircleDown,
  FaRegArrowAltCircleUp,
} from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

interface TransactionCardProps {
  data: TransactionsData;
  index: number;
}

const TransactionCard: React.FC<TransactionCardProps> = ({ data, index }) => {
  return (
    <div className="flex flex-col gap-2 text-sm" key={index}>
      <div className="flex sm:flex-row flex-col justify-between glass py-2 px-4 rounded-tr-md rounded-tl-md">
        <p className="text-pink-400 ">{data.hash}</p>
        <p className="">{data.timeStamp}</p>
      </div>
      <div className="flex lg:flex-row flex-col justify-between glass py-2 px-4 rounded-br-md rounded-bl-md">
        <div className=" flex md:flex-col sm:flex-row flex-col justify-between gap-2 sm:gap-4">
          <p className="text-purple-400 flex items-center gap-2">
            {" "}
            <FaArrowAltCircleRight className="text-red-500" />
            {data.hash2}
          </p>
          <div className="">
            {data.rate.start} sat/vB - {data.rate.end} sat
            <span className="text-green-500"> (${data.rate.changeAmount})</span>
          </div>
        </div>
        <div>{data.tradeAmount} BTC</div>
        <div className="flex flex-col sm:items-end gap-4 lg:mt-0 mt-4">
          {data.transaction.map((each) => (
            <div className="flex sm:flex-row flex-col justify-between gap-2 md:gap-8">
              <p
                className={`text-${
                  each.tradeComplete ? "purple-400" : "white"
                }`}
              >
                {each.code}
              </p>
              <p className="flex flex-row  items-center gap-2">
                {each.amount} BTC
                {each.tradePositive && each.tradeComplete ? (
                  <FaRegArrowAltCircleUp className="text-green-500" />
                ) : !each.tradePositive && each.tradeComplete ? (
                  <FaRegArrowAltCircleDown className="text-red-500" />
                ) : !each.tradeComplete ? (
                  <IoMdCloseCircle className="opacity-70" />
                ) : (
                  <FaArrowAltCircleRight className="text-purple-300" />
                )}
              </p>
            </div>
          ))}
          <div className="px-2 py-1 w-32 bg-purple-950 glass2 rounded-md flex sm:justify-end">
            {data.tradeAmount} BTC
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
