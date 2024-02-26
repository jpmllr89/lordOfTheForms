import { Component } from "react";
import { ClassForm } from "./ClassForm";
import { ClassProfileInformation } from "../ClassProfileInformation";

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
    this.setState({ firstName: e });
  };
  setLastName = (e) => {
    this.setState({ lastName: e });
  };
  setEmail = (e) => {
    this.setState({ email: e });
  };
  setCity = (e) => {
    this.setState({ city: e });
  };
  setTelephoneNumber = (e) => {
    this.setState({ telephoneNumber: e });
  };
  setSubmit = () => {
    this.setState({ submitted: true });
    console.log(this.state.submitted);
  };
  // passThroughs = {
  //   firstName: this.state.firstName,
  //   lastName: this.state.lastName,
  //   email: this.state.email,
  //   city: this.state.city,
  //   telephoneNumber: this.state.telephoneNumber,
  //   submitted: this.state.submitted,
  //   setFirstName: this.setFirstName,
  //   setLastName: this.setLastName,
  //   setEmail: this.setEmail,
  //   setCity: this.setCity,
  //   setTelephoneNumber: this.setTelephoneNumber,
  //   setSubmit: this.setSubmit,
  // };
  render() {
    return (
      <>
        <h2>Class</h2>
        <ClassProfileInformation {...this.state} />
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
