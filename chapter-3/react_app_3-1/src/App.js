import logo from './logo.svg';
import './App.css';
import {Component} from "react";

class App extends Component {
  render() {
    return (
        <div>
          <h1 className="bg-primary text-white display-4">React</h1>
          <div className="container">
            <p className="subtitle">Reactを使ったサンプルアプリです。</p>
            <p>これはサンプルコンポーネントです</p>
            <p>簡単なメッセージを表示します</p>
          </div>
        </div>
    )
  }
}

export default App;
