async function ProblemData(contest_id) {
  try {
    const axios = require("axios");
    const res = await axios.get(
      "https://kenkoooo.com/atcoder/resources/problems.json"
    );
    const items = res.data;
    for (const item of items) {
      if (item.id === contest_id) {
        return item;
      }
    }
  } catch (error) {
    const { status, statusText } = error.response;
    console.log(`Error! HTTP Status: ${status} ${statusText}`);
  }
}

export default async function getLocalData(data) {
  let List = [];
  for (const elem of data) {
    let contestId = "";
    let idx = elem.url.length - 1;
    while (elem.url[idx] !== "/") {
      contestId += elem.url[idx];
      idx--;
    }
    contestId = contestId.split("").reverse().join("");
    const Item = await ProblemData(contestId);
    List.push({
      Id: Item.contest_id,
      Name: Item.title,
      Url: elem.url,
    });
  }
  return List;
}
