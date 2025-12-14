const today = new Date();

const year = today.getFullYear(); // 年
const month = today.getMonth() + 1; // 月（0から始まるので+1）
const date = today.getDate(); // 日

console.log(year + "年" + month + "月" + date + "日");
