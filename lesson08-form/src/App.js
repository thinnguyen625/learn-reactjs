import React, { Component } from 'react';
import './App.css';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      txtUsername: '',
      txtPassword: ''
    };
  }

  onHandleChange = (event) => {
    var target = event.target;
    var name = event.name;
    var value = event.value;
    this.setState({
      [name]: value
    })
  }

  onHandleSubmit = (event) => {
    event.prevenDefault();
    console.log(this.state);

  }
  render() {
    return (

      <div className="container mt-30">
        <div className="row">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">

            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">FORM</h3>
              </div>
              <div className="panel-body">
                
                <form onSubmit={this.onHandleSubmit}>
                  
                  <div className="form-group">
                    <label>Username: </label>
                    <input 
                    type="text" 
                    className="form-control" 
                    name="txtUsername"
                    onChange={this.onHandleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label >Password: </label>
                    <input 
                    type="password" 
                    className="form-control" 
                    name="txtPassword"
                    onChange={this.onHandleChange}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">Lưu</button> &nbsp;
                  <button type="reset" className="btn btn-default">Xóa trắng</button>
                </form>
                

              </div>
            </div>

          </div>
        </div>

      </div>

    );
  }
}

export default App;


