import { Glow, GlowCapture } from "@codaworks/react-glow";
const ScreenTwo = () => {
  const block1Data = [
    {
      size: "1.21",
      transaction: "1212",
      time: "30",
      num1: "-9",
      num2a: "9",
      num2b: "10",
    },
    {
      size: "1.21",
      transaction: "1212",
      time: "30",
      num1: "-9",
      num2a: "9",
      num2b: "10",
    },
    {
      size: "1.21",
      transaction: "1212",
      time: "30",
      num1: "-9",
      num2a: "9",
      num2b: "10",
    },
    {
      size: "1.21",
      transaction: "1212",
      time: "30",
      num1: "-9",
      num2a: "9",
      num2b: "10",
    },
  ];

  const block2Data = [
    {
      size: "1.21",
      transaction: "1212",
      time: "30",
      num1: "-9",
      num2a: "9",
      num2b: "10",
      hash: "123445",
    },
    {
      size: "1.21",
      transaction: "1212",
      time: "30",
      num1: "-9",
      num2a: "9",
      num2b: "10",
      hash: "123445",
    },
    {
      size: "1.21",
      transaction: "1212",
      time: "30",
      num1: "-9",
      num2a: "9",
      num2b: "10",
      hash: "123445",
    },
    {
      size: "1.21",
      transaction: "1212",
      time: "30",
      num1: "-9",
      num2a: "9",
      num2b: "10",
      hash: "123445",
    },
  ];
  return (
    <GlowCapture>
      <div className="min-h-screen pt-24   bg-gradient-to-tr from-black to-col3">
        <div className="flex flex-col items-center w-full md:mx-auto mx-4">
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
          
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </GlowCapture>
  );
};

export default ScreenTwo;
