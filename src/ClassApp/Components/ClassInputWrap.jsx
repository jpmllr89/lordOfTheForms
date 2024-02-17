import { Component } from "react";

export class ClassInputWrap extends Component {
  render() {
    return (
      <>
        <div className="input-wrap">
          <label>{this.props.inputProps.label}:</label>
          <input {...this.props.inputProps} />
        </div>
      </>
    );
  }
}
