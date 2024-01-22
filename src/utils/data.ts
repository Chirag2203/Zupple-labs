import { Block1Data,Block2Data, TransactionsData, Task } from "@/lib/Types";

export const block1Data:Block1Data[] = [
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

  export const block2Data:Block2Data[] = [
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

  export const transactionsData:TransactionsData[] = [
    {
      hash: "012887897412276617867762617",
      hash2: "Coinbase (newly generated coins)",
      timeStamp: "2021-01-23 08:47 ",
      transaction: [
        {
          code: "123mfjpkndln123112345678",
          amount: "0.00000001",
          tradePositive: true,
          tradeComplete: true,
        },
        {
          code: "OP_RETURN 123mfjpkndln123112345678",
          amount: "0.00000000",
          tradePositive: false,
          tradeComplete: false,
        },
        {
          code: "OP_RETURN 123mfjpkndln123112345678",
          amount: "0.00000000",
          tradePositive: false,
          tradeComplete: false,
        },
        
      ],
      tradeAmount: "0.00000001",
      rate: {
        start: "4538",
        end: "12,000",
        changeAmount: "20",
      },
    },
    {
      hash: "01288789747661786776261766qw12",
      hash2: "01288789747661786776261766",
      timeStamp: "2021-01-23 08:47 ",
      transaction: [
        {
          code: "123mfjpkndln123112345678",
          amount: "0.00000123",
          tradePositive: true,
          tradeComplete: true,
        },
        {
          code: "123mfjpkndln123112345678",
          amount: "0.00000001",
          tradePositive: false,
          tradeComplete: true,
        },
      ],
      tradeAmount: "0.00000121",
      rate: {
        start: "1228",
        end: "50,000",
        changeAmount: "22",
      },
    },
    {
      hash: "01288789747661786776261766qwerty",
      hash2: "01288789747661786776261766",
      timeStamp: "2021-01-23 08:47 ",
      transaction: [
        {
          code: "123mfjpkndln123112345678",
          amount: "0.0000034",
          tradePositive: false,
          tradeComplete: true,
        },
        {
          code: "123mfjpkndln123112345678",
          amount: "0.00000001",
          tradePositive: true,
          tradeComplete: true,
        },
        {
          code: "123mfjpkndln123112345678",
          amount: "0.00000001",
          tradePositive: true,
          tradeComplete: true,
        },
        {
          code: "123mfjpkndln123112345678",
          amount: "0.00000001",
          tradePositive: false,
          tradeComplete: true,
        },
      ],
      tradeAmount: "0.00000431",
      rate: {
        start: "428",
        end: "50,000",
        changeAmount: "30",
      },
    },
  ];


  export const tasks:Task[] = [
    {
      title: "Task 1",
      desc: "Form with validation",
      link:"screenone"
    },
    {
      title: "Task 2",
      desc: "Blockchain explorer",
        link:"screentwo"
    },
  ];