import Tweet from './Tweet.jsx';

function Timeline(props) {
    const tweetList = props.tweets.map((tw) => (
        <Tweet
            key={tw.id}
            icon={tw.icon}
            problemName={tw.problemName}
            url={tw.url}
            content={tw.content}
        />
    ));

    return <div className="timeline">{tweetList}</div>;
}

export default Timeline