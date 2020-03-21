import data from "./data.js";

let lastBuy; //上次买入时的点数
let lastSell; //上次卖出时的点数
let wallet = 100; //钱包里的钱
let account = 0; //基金账户里的钱

const buyRecords = data.map((c, i, a) => {
  const amount = 10; //每次买入
  const buy = i === 0 ? amount : c < a[i - 1] ? amount : 0;
  if (buy && wallet - buy > 0) {
    lastBuy = c;
    wallet -= buy;
    account += buy;
    return buy;
  }
  return 0;
});

const sellRecords = data.map((c, i, a) => {
  const amount = 10;
  const sell = i === 0 ? 0 : c > a[i - 1] ? amount : 0;
  if (sell && account - sell > 0) {
    lastSell = c;
    wallet += sell;
    account -= sell;
    return sell;
  }
  return 0;
});

const exchangeRecord = buyRecords.map((e, i) => e - sellRecords[i]);

console.info(exchangeRecord);

console.info(wallet, account);

export const buyPoints = Object.keys(buyRecords).filter(k => buyRecords[k]);

export const sellPoints = Object.keys(sellRecords).filter(k => sellRecords[k]);
