import { IoMdCloseCircle } from "react-icons/io";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import {
  FaArrowAltCircleDown,
  FaArrowAltCircleRight,
  FaClipboard,
  FaRegArrowAltCircleUp,
} from "react-icons/fa";

import { block1Data, block2Data, transactionsData } from "@/utils/data.ts";
const ScreenTwo = () => {
  return (
    <div className="min-h-screen pt-24   bg-gradient-to-tr from-black to-col3 px-4 pb-12">
      <div className="flex flex-col items-center w-full  ">
        <div className="flex gap-4">
          <div className="flex gap-2 mt-8">
            {block1Data.map((data, index) => (
              <div
                key={index}
                className="glassBlock1 w-26 h-26 p-4 gap-1 rounded-lg flex flex-col justify-center items-center"
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
          <div className="flex gap-2">
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
          <div className="flex flex-col items-start w-full">
            
            <div className="flex justify-between items-center w-full">
            <p className="text-2xl font-medium mt-4 flex items-center gap-2">
              Block <span className="text-purple-300">667306</span>
            </p>
            <IoMdCloseCircle className="text-red-900 hover:opacity-80 text-2xl" />
            </div>
            <div className="flex px-8 py-4 gap-4 glass mt-4 rounded-md w-full">
              <div className="w-1/2 flex flex-col gap-4">
                <div className="colorDisplay">
                  <p>Hash</p>
                  <p className="flex gap-2 items-center">
                    <span className="text-purple-300">01010101..12EX</span>
                    <FaClipboard />{" "}
                  </p>
                </div>

                <div className="normalDisplay">
                  <p>Timestamp</p>
                  <p>2021-01-23 08:47 (1 hour ago)</p>
                </div>

                <div className="colorDisplay">
                  <p>Size</p>
                  <p>1.39MB</p>
                </div>
                <div className="normalDisplay">
                  <p>Weight</p>
                  <p>3.99MWU</p>
                </div>
              </div>
              <div className="w-1/2 flex flex-col gap-4">
                <div className="colorDisplay">
                  <p>Total fees</p>
                  <p>
                    0.43 BTC <span className="text-green-500">($13,710)</span>
                  </p>
                </div>
                <div className="normalDisplay">
                  <p>Subsidy + Fees</p>
                  <p>
                    0.68 BTC <span className="text-green-500">($213,136) </span>
                  </p>
                </div>
                <div className="colorDisplay">
                  <p>Miner</p>
                  <p>Spider pool</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-8 w-full">
            <div className="flex items-center justify-between w-full">
              <p className="text-2xl font-medium  flex items-center gap-2 ">
                <span className="text-purple-300">2,075</span> Transactions
              </p>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      href="#"
                      className="hover:bg-transparent hover:text-purple-300"
                    />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#"
                      isActive
                      className="border-purple-300 "
                    >
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#"
                      className="hover:bg-transparent hover:text-purple-300"
                    >
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#"
                      className="hover:bg-transparent hover:text-purple-300"
                    >
                      3
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext
                      href="#"
                      className="hover:bg-transparent hover:text-purple-300"
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
            <div className="flex flex-col gap-8 w-full">
              {transactionsData.map((data, index) => (
                <div className="flex flex-col gap-2 text-sm" key={index}>
                  <div className="flex justify-between glass py-2 px-4 rounded-tr-md rounded-tl-md">
                    <p className="text-purple-300 ">{data.hash}</p>
                    <p className="">{data.timeStamp}</p>
                  </div>
                  <div className="flex justify-between glass py-2 px-4 rounded-br-md rounded-bl-md">
                    <div className=" flex flex-col justify-between gap-4">
                      <p className="text-purple-300 flex items-center gap-2">
                        {" "}
                        <FaArrowAltCircleRight className="text-red-500" />
                        {data.hash2}
                      </p>
                      <div className="">
                        {data.rate.start} sat/vB - {data.rate.end} sat
                        <span className="text-green-500">
                          {" "}
                          (${data.rate.changeAmount})
                        </span>
                      </div>
                    </div>
                    <div>{data.tradeAmount} BTC</div>
                    <div className="flex flex-col gap-4">
                      {data.transaction.map((each) => (
                        <div className="flex justify-between gap-8">
                          <p className="text-purple-300">{each.code}</p>
                          <p className="flex items-center gap-2">
                            {each.amount} BTC
                            {each.tradePositive && each.tradeComplete ? (
                              <FaRegArrowAltCircleUp className="text-green-500" />
                            ) : !each.tradePositive && each.tradeComplete ? (
                              <FaArrowAltCircleDown className="text-red-500" />
                            ) : !each.tradeComplete ? (
                              <IoMdCloseCircle className="opacity-70" />
                            ) : (
                              <FaArrowAltCircleRight className="text-purple-300" />
                            )}
                          </p>
                        </div>
                      ))}
                      <div className="px-2 py-1 bg-purple-950 glass2 rounded-md flex justify-end">
                        {data.tradeAmount} BTC
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenTwo;
