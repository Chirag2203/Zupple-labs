/*
Crypto explorer
Used shadcn for Pagiantion, Tailwind for styling.
Data is fetched from utils/data.ts
*/

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { block1Data, block2Data, transactionsData } from "@/utils/data.ts";
import { useState } from "react";
import TransactionCard from "../shared/TransactionCard";
import DetailsBlock from "../shared/DetailsBlock";
const ScreenTwo = () => {
  const [active, setActive] = useState(true);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="min-h-screen md:pt-24  pt-16  bg-gradient-to-tr from-black to-col3 px-4 pb-12">
      <p className="text-2xl font-medium py-4 md:py-0 md:pb-4 md:text-3xl md:font-bold  text-center">
        Crypto Explorer
      </p>
      <div className="flex flex-col items-center w-full  ">
        <div className="flex lg:flex-row flex-col gap-4">
          <div className="flex md:flex-row flex-wrap justify-center lg:justify-start gap-2 md:mt-8">
            {block1Data.map((data, index) => (
              <div
                key={index}
                className="glassBlock1 md:w-26 w:32 md:h-26  p-4 gap-1 rounded-lg flex flex-col justify-center items-center"
              >
                <p className="text-xs ">{data.num1} sat/vB</p>
                <div className="flex items-center gap-1 text-xs">
                  <p className="text-xs ">{data.num2a}</p>-
                  <p className="text-xs ">{data.num2b}</p> sat/vB
                </div>
                <p className="text-xl font-medium">{data.size} MB</p>
                <p className="text-xs ">{data.transaction} transactions</p>
                <p className="text-xs ">In {data.time} minutes</p>
              </div>
            ))}
          </div>
          <div className="flex md:flex-row flex-wrap justify-center lg:justify-start gap-2">
            {block2Data.map((data, index) => (
              <div className="flex flex-col gap-2 items-center ">
                <div className="text-purple-300">{data.hash}</div>
                <div
                  key={index}
                  className="glassBlock2 w-26 h-26 p-4 gap-1 rounded-lg flex flex-col justify-center items-center"
                >
                  <p className="text-xs ">{data.num1} sat/vB</p>
                  <div className="flex items-center gap-1 text-xs">
                    <p className="text-xs ">{data.num2a}</p>-
                    <p className="text-xs ">{data.num2b}</p> sat/vB
                  </div>
                  <p className="text-xl font-medium">{data.size} MB</p>
                  <p className="text-xs ">{data.transaction} transactions</p>
                  <p className="text-xs ">In {data.time} minutes</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start border-t-2  mt-16 w-full md:w-4/5">
          {active && <DetailsBlock handleClick={handleClick} />}

          <div className="flex flex-col gap-4 mt-8 w-full">
            <div className="flex sm:flex-row flex-col items-center justify-between w-full">
              <p className="text-2xl font-medium  flex items-center gap-2 ">
                <span className="text-purple-300">2,075</span> Transactions
              </p>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      href="#"
                      className="hover:bg-transparent hover:text-purple-300"/>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#"
                      isActive
                      className="border-purple-300 ">1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#"
                      className="hover:bg-transparent hover:text-purple-300">2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext
                      href="#"
                      className="hover:bg-transparent hover:text-purple-300"/>
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
            <div className="flex flex-col gap-8 w-full">
              {transactionsData.map((data, index) => (
                <TransactionCard key={index} data={data} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenTwo;
