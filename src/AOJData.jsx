const axios = require("axios");

// async function GetTitle(ProblemId) {
//   const Api = await axios.get(
//     `https://judgeapi.u-aizu.ac.jp/resources/descriptions/ja/${ProblemId}`
//   );
//   const Html = Api.data.html;
//   const ProblemTitle = Html.getElementsByClassName("title")[0];
//   return ProblemTitle;
// }

async function GetApi(UserName) {
  try {
    const BookmarkData = await axios.get(
      `https://judgeapi.u-aizu.ac.jp/bookmarks/users/${UserName}`
    );
    const List = [];
    for (const item of BookmarkData.data) {
      List.push({ problemId: item.problemId });
    }
    return List;
  } catch (error) {
    const { status, statusText } = error.response;
    console.log(`Error! HTTP Status: ${status} ${statusText}`);
  }
}

export default async function AOJData(UserName) {
  if (UserName === "") return [];
  const Data = await GetApi(UserName);
  console.log(Data);
  return Data;
}
