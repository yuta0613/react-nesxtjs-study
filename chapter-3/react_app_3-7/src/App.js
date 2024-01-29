
import './App.css';
import React, {Component} from "react";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      msg: "count start!",
      flg: true
    }
    this.doAction = this.doAction.bind(this);
  }

  doAction(e) {
    this.setState((state) => ({
      counter: state.counter + 1,
      msg: state.counter,
      flg: !state.flg
      }))
  }
  render() {
    return (
        <div>
          <h1 className='bg-primary text-white display-4'>React</h1>
          <div className="container">
            <p className="subtitle">count number.</p>
            {
              this.state.flg ?
                    <div className="alert alert-primary text-right">
                      <p className="h5">{this.state.msg}</p>
                    </div>
                    :
                  <div className="alert alert-warning text-left">
                    <p className="h5">{this.state.msg}です</p>
                  </div>
            }
            <div className="text-center">
              <button onClick={this.doAction} className="btn btn-primary">Click</button>
            </div>
          </div>
        </div>
    );
  }
}
export default App;
