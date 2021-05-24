import React, { Component } from "react";
import Form from "./Form";
import List from "./List";

export class App extends Component {
  
  state = {result:["Create A Task"]}
  formInit = (element)=>{
    this.setState({result:[...this.state.result,element]})
  }


  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <h1>To Do List</h1>
        </nav>
        <Form formInit={this.formInit}/>
        <List item={this.state.result} />
      </div>
    );
  }
}

export default App;
