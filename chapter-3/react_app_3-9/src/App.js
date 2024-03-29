import react, { Component } from 'react';
import './App.css';

class App extends Component {
  input =''

  constructor(props) {
    super(props);
    this.state = {
      title: 'input from',
      message: 'type your name.',
    };
    this.doChange = this.doChange.bind(this);
    this.doSubmit = this.doSubmit.bind(this);
  }

  doChange(event) {
    this.input = event.target.value;
  }

  doSubmit(event) {
    this.setState({
      title: 'send form',
      message: 'Hello, '+this.input+'!!',
    })
    event.preventDefault();
  }

  render() {
    return (
        <div>
          <h1 className="bg-primary text-white display-4">React</h1>
          <div className="container">
            <h4>{this.state.title}</h4>
            <p className="card h5 p-3">{this.state.message}</p>
            <div className="alert alert-primary mt-3">
              <form onSubmit={this.doSubmit}>
                <div className="form-group">
                <label>Message:</label>
                {/*基本的なインプット情報 <input type="text" className="form-control" onChange={this.doChange} />*/}
                  <input type="text" className="form-control"
                  onChange={this.doChange}
                  required pattern="[A-Za-z _,.]+" />
                </div>
                <input type='submit' className="btn btn-primary" value="Click"/>
              </form>
            </div>
          </div>
        </div>
    );
  }
}
export default App;
