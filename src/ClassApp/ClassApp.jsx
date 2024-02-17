import { Component } from "react";
import { ClassForm } from "./ClassForm";
import { ProfileInformation } from "../ProfileInformation";

// const defaultUser = {
//   email: "default@default.com",
//   firstName: "Default",
//   lastName: "Default",
//   phone: "1234567",
//   city: "Hobbiton",
// };

export class ClassApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      city: "",
      telephoneNumber: "",
      submitted: false,
    };
  }
  setFirstName = (e) => {
    this.setState({ firstName: e.target.value });
  };
  setLastName = (e) => {
    this.setState({ lastName: e.target.value });
  };
  setEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  setCity = (e) => {
    this.setState({ city: e.target.value });
  };
  setTelephoneNumber = (e) => {
    this.setState({ telephoneNumber: e.target.value });
  };
  setSubmit = () => {
    this.setState({ submitted: true });
    console.log(this.state.submitted);
  };
  render() {
    return (
      <>
        <h2>Class</h2>
        <ProfileInformation userData={this.state} />
        <ClassForm
          setFirstName={this.setFirstName}
          setLastName={this.setLastName}
          setEmail={this.setEmail}
          setCity={this.setCity}
          setTelephoneNumber={this.setTelephoneNumber}
          setSubmit={this.setSubmit}
          {...this.state}
        />
      </>
    );
  }
}
