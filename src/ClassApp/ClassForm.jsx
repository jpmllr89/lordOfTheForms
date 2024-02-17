import { Component } from "react";
import { ErrorMessage } from "../ErrorMessage";
// import { ClassTelephoneInput } from "./Components/ClassTelephoneInput";
import { ClassInputWrap } from "./Components/ClassInputWrap";
import { errorMessages } from "../data/errorMessages";
import {
  isEmailValid,
  isFirstNameValid,
  isLastNameValid,
  isCityValid,
  // isPhoneNumberValid,
} from "../utils/validations.js";
const errors = errorMessages;

export class ClassForm extends Component {
  inputProps = [
    {
      label: "First Name",
      placeholder: "Bilbo",
      onChange: this.props.setFirstName,
    },
    {
      label: "Last Name",
      placeholder: "Baggins",
      onChange: this.props.setLastName,
    },
    {
      label: "Email",
      placeholder: "",
      onChange: this.props.setEmail,
    },
    {
      label: "City",
      placeholder: "Hobbiton",
      onChange: this.props.setCity,
    },
  ];

  onSubmit = (e) => {
    e.preventDefault();
    if (
      isFirstNameValid(this.props.firstName) &&
      isLastNameValid(this.props.lastName) &&
      isEmailValid(this.props.email) &&
      isCityValid(this.props.city)
    ) {
      this.props.setSubmit({ submitted: true });
    } else {
      this.props.setSubmit({ submitted: false });
      this.props.setFirstName("");
      this.props.setLastName("");
      this.props.setEmail("");
      this.props.setCity("");
      // this.props.setTelephoneNumber("");
    }
    // console.log({this.props.firstName, this.props.lastName, this.props.email, this.props.city, this.props.telephoneNumber});
  };
  render() {
    return (
      <form>
        <u>
          <h3>User Information Form</h3>
        </u>

        {/* first name input */}
        <ClassInputWrap inputProps={this.inputProps[0]} />
        <ErrorMessage
          message={errors.firstNameErrorMessage}
          show={
            this.props.submitted
              ? !isFirstNameValid(this.props.firstName)
              : false
          }
        />

        {/* last name input */}
        <ClassInputWrap inputProps={this.inputProps[1]} />
        <ErrorMessage
          message={errors.lastNameErrorMessage}
          show={
            this.props.submitted ? !isLastNameValid(this.props.lastName) : false
          }
        />

        {/* Email Input */}
        <ClassInputWrap inputProps={this.inputProps[2]} />
        <ErrorMessage
          message={errors.emailErrorMessage}
          show={this.props.submitted ? !isEmailValid(this.props.email) : false}
        />

        {/* City Input */}
        <ClassInputWrap inputProps={this.inputProps[3]} />
        <ErrorMessage
          message={errors.cityErrorMessage}
          show={this.props.submitted ? !isCityValid(this.props.city) : false}
        />

        <div className="input-wrap">
          <label htmlFor="phone">Phone:</label>
          {/* <ClassTelephoneInput telephoneNumber={this.props.telephoneNumber} /> */}
        </div>

        {/* <ErrorMessage message={phoneNumberErrorMessage} show={true} /> */}

        <input type="submit" value="Submit" onClick={this.onSubmit} />
      </form>
    );
  }
}
