const total = 10; //生成次数
const init = 3000; //初始点数
const range = 0.5; //每次波动幅度

const data = Array(total)
  .fill()
  .reduce((t, c, i) => {
    const temp =
      i === 0 ? init : t[i - 1] * (1 + range - Math.random() * range * 2);
    t[i] = temp;
    return t;
  }, []);

export default data;
