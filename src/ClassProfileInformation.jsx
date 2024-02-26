import { capitalize, formatPhoneNumber } from "./utils/transformations";
import { Component } from "react";
export const InfoRow = ({ label, value }) => {
  return (
    <div>
      <span style={{ marginRight: 5 }}>
        <b>{label}:</b>
      </span>
      <span>{value}</span>
    </div>
  );
};
export class ClassProfileInformation extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (!this.props.submitted) {
      return (
        <>
          <u>
            <h3>Your Submitted User Information</h3>
          </u>
          <div className="user-info">
            <div>No information provided</div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <u>
            <h3>Your Submitted User Information</h3>
          </u>
          {/* {this.props.submitted ? } */}
          <div className="user-info">
            <InfoRow label="Email" value={this.props.email} />
            <InfoRow label="First Name" value={this.props.firstName} />
            <InfoRow label="Last Name" value={this.props.lastName} />
            {this.props.city && (
              <InfoRow label="City" value={capitalize(this.props.city)} />
            )}
            {/* You will need to format the string "nnnnnnn" as "nn-nn-nn-n" */}
            <InfoRow
              label="Phone"
              value={formatPhoneNumber(this.props.telephoneNumber)}
            />
          </div>
        </>
      );
    }
  }
}
