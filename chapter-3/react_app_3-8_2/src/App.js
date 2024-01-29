import react, { Component } from 'react';
import './App.css';

class App extends Component {
  data=[
      "This is list sample.",
      "これはリストのサンプルです。",
      "配列をリストに変換します。"
  ]
  constructor(props) {
    super(props);
    this.state = {
      list: this.data
    }
  }

  render() {
    return (
        <div>
          <h1 className="bg-primary text-white display-4">React</h1>
          <div className="container">
            <p className="subtitle">Show list.</p>
            <List title="サンプル・リスト" data={this.data} />
          </div>
        </div>
    );
  }
}

class List extends Component {
  number = 1

  render() {
    let data = this.props.data;
    return (
        <div>
            <p className="h5 text-center">{this.props.title}</p>
            <ul className="list-group">
              {data.map((item,key) =>
                <li className="list-group-item" key={key}>
                  < Item number = {key+1} value = {item}/>
                </li>
              )}
            </ul>
        </div>
    )
  }
}

class Item extends Component {
  itm={
    fountSize:"16pt",
    color:"#00f",
    textDecoration:"underline",
    textDecorationColor:"#ddf"
  }

  num={
    fontWeight:"bold",
    color:"red"
  }

  render() {
    return (
      <p style={this.itm}>
        <span style={this.num}>
            {/*spanはHTML要素であり、特定のスタイルを適用したいテキストや要素を囲むために使用されます。span要素そのものには特定の意味はありませんが、CSSスタイルを適用するためのラッパーとして使用されることが多いです。*/
            /*&nbsp;はHTMLエンティティであり、"non-breaking space"（改行しないスペース）として知られています。通常のスペースとは異なり、&nbsp;は改行されずに連続して表示されます。このエンティティは、テキストの中でスペースを必要とする場合に使用されます。例えば、複数の単語の間に空白を入れたい場合などに使用されます。*/
            /*上記のコードでは、span要素内にprops.numberの値を表示しています。props.numberはコンポーネントのプロパティであり、この値は{}で囲まれてJavaScriptの式として評価されます。&nbsp;は数字とテキストの間に空白を入れるために使用されています。*/}
          [{this.props.number}]&nbsp;
        </span>
        {this.props.value}
      </p>
    )}
}
export default App;
