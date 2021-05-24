import React, { Component } from "react";

export class List extends Component {
  render() {
    return (
      <div>
        <ul className="list-group">
          {this.props.item.map((item,i) => {
            return <li className="list-group-item">{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default List;
