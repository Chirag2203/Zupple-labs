interface BlockData {
    size: string;
    transaction: string;
    time: string;
    num1: string;
    num2a: string;
    num2b: string;
  }
  
  interface Transaction {
    code: string;
    amount: string;
    tradePositive: boolean;
    tradeComplete: boolean;
  }
  
  interface Rate {
    start: string;
    end: string;
    changeAmount: string;
  }
  
//   interface TransactionData {
//     hash: string;
//     hash2: string;
//     timeStamp: string;
//     transaction: Transaction[];
//     tradeAmount: string;
//     rate: Rate;
//   }
  
  export interface Block1Data extends BlockData {}
  export interface Block2Data extends BlockData {
    hash: string;
  }
  
  export interface TransactionsData {
    hash: string;
    hash2: string;
    timeStamp: string;
    transaction: Transaction[];
    tradeAmount: string;
    rate: Rate;
  }

  export interface Task {
    title: string;
    desc: string;
    link: string;
  }