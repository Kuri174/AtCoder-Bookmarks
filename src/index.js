import React from 'react';
import ReactDOM from 'react-dom';
import Topbar from './Topbar';
import Timeline from './Timeline';
import './style.css';

function App() {
  const obj = JSON.parse(localStorage.getItem("atcoder"));
  const [tweets] = React.useState([
    {
      id: 0,
      icon: 'atcoder',
      problemName: obj.name,
      url: obj.url
    }
  ]);

  return (
    <div>
      <Topbar menuButton="使い方" title="AtCoder-Bookmarks"/>
      <Timeline tweets={tweets} />
    </div>
  );
}

const target = document.querySelector('#app');
ReactDOM.render(<App />, target);