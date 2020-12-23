import Tweet from './Tweet.jsx';

function Timeline(props) {
    // propsからTweetのリストを作る
    const tweetList = props.tweets.map((tw) => (
        <Tweet
            key={tw.id}
            icon={tw.icon}
            problemName={tw.problemName}
            url={tw.url}
            content={tw.content}
        />
    ));

    // 表示する
    return <div className="timeline">{tweetList}</div>;
}

export default Timeline