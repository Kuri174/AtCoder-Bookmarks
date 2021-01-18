async function ProblemData(contestId) {
  try {
    const axios = require("axios");
    const res = await axios.get(
      "https://kenkoooo.com/atcoder/resources/problems.json"
    );
    const items = res.data;
    for (const item of items) {
      if (item.id === contestId) {
        return item;
      }
    }
  } catch (error) {
    const { status, statusText } = error.response;
    console.log(`Error! HTTP Status: ${status} ${statusText}`);
  }
}

async function getLocalData(localData) {
  let dataList = [];
  for (const data of localData) {
    let contestId = "";
    let idx = data.problemUrl.length - 1;
    while (data.problemUrl[idx] !== "/") contestId += data.problemUrl[idx--];
    contestId = contestId.split("").reverse().join(""); // 反転
    const Item = await ProblemData(contestId);
    dataList.push({
      userName: data.userName,
      contestId: Item.contest_id,
      problemName: Item.title,
      problemUrl: data.problemUrl,
    });
  }
  return dataList;
}

export default async function getProblemData() {
  try {
    const localData = await JSON.parse(localStorage.getItem("atcoder"));
    const res = await getLocalData(localData);
    return res;
  } catch (e) {
    return [];
  }
}
