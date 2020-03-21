import data from "./data.js";

let lastBuy; //上次买入时的点数
let lastSell; //上次卖出时的点数
let wallet = 100; //钱包里的钱

const buyRecords = data.map((c, i, a) => {
  const amount = 10; //每次买入
  const buy = i === 0 ? amount : c < a[i - 1] ? amount : 0;
  buy && (lastBuy = c);
  return buy;
});
// console.info(buyRecords);

const sellRecords = data.map((c, i, a) => {
  const amount = 10;
  const buy = i === 0 ? amount : c > a[i - 1] ? amount : 0;
  buy && (lastBuy = c);
  return buy;
});

export const buyPoints = Object.keys(buyRecords).filter(k => buyRecords[k]);

export const sellPoints = Object.keys(sellRecords).filter(k => sellRecords[k]);
