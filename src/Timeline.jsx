import Tweet from "./Tweet.jsx";

function Timeline(props) {
  const dataList = props.tweets;
  
  const listItems = dataList.map((item) => (
    <Tweet 
        name = {item.name}
        url = {item.url}
    />
  ));
  return <ul>{listItems}</ul>;
}

export default Timeline;
