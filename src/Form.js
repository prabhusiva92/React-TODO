import React, { Component } from "react";
import { button } from 'reactstrap';

export class Form extends Component {
    state={entry:""}
    addTask =(e)=>{
        console.log(this.props)
        e.preventDefault();
        if(this.state.entry !==""){
            this.props.formInit(this.state.entry)
            this.setState({entry:""})
            console.log(this.state.entry)
        }else return
    }
  render() {
    return (
      <div>
        <div className="form-group">
          <input type="text" className="form-control" value={this.state.entry} onChange={(e)=>this.setState({entry:e.target.value})}></input>
          <button className="btn-primary" onClick={this.addTask}>Add</button>
        </div>
      </div>
    );
  }
}

export default Form;
