import React from 'react';
import ReactDOM from 'react-dom';
import Topbar from './Topbar';
import Timeline from './Timeline';
import TweetInput from './TweetInput';
import './style.css';

function App() {
  const data = localStorage.getItem('atcoder');
  console.log("local", data);
  const [tweets, setTweets] = React.useState([
    {
      id: 0,
      icon: '🌽',
      displayName: null,
      accountName: 'morokoshi',
      content: null
    },
    {
      id: 1,
      icon: '🦐',
      displayName: 'エビデンス',
      accountName: 'evidence',
      content: 'かにみそたべたい'
    }
  ]);

  // addTweet関数はuseCallbackで作成する
  // これも毎回作成していると重くなるので
  const addTweet = React.useCallback((tweet) => setTweets((prev) => [tweet, ...prev]), [setTweets]);

  return (
    <div>
      <Topbar menuButton="更新" title="AtCoder-Bookmarks"/>
      <TweetInput addTweet={addTweet} />
      <Timeline tweets={tweets} />
    </div>
  );
}

const target = document.querySelector('#app');
ReactDOM.render(<App />, target);