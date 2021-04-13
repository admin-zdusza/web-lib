import React, { Component } from "react";

export interface BrandProps {
  appName: string;
}

export class Brand extends Component<BrandProps> {
  render() {
    const style = {
      color: "#777",
    };
    return (
      <h2>
        {this.props.appName}
        <small className={"d-none d-md-inline"} style={style}>
          {" "}
          - z duszą!
        </small>
      </h2>
    );
  }
}
