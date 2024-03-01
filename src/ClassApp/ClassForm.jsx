import { Component } from "react";
import { ErrorMessage } from "../ErrorMessage";
// import { ClassTelephoneInput } from "./Components/ClassTelephoneInput";
import { ClassInputWrap } from "./Components/ClassInputWrap.jsx";
import { errorMessages } from "../data/errorMessages";
import { ClassTelephoneInput } from "./Components/ClassTelephoneInput.jsx";
import {
  isEmailValid,
  isFirstNameValid,
  isLastNameValid,
  isCityValid,
  isPhoneNumberValid,
} from "../utils/validations.js";
const errors = errorMessages;

export class ClassForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNameHolder: "",
      lastNameHolder: "",
      emailHolder: "",
      cityHolder: "",
      phoneNumberHolder: "",
    };
  }

  setFirstNameHolder = (e) => {
    // console.log("first name received:", e.target.value);
    this.setState({ firstNameHolder: e.target.value });
  };
  setLastNameHolder = (e) => {
    // console.log("last name received:", e.target.value);
    this.setState({ lastNameHolder: e.target.value });
  };
  setEmailHolder = (e) => {
    this.setState({ emailHolder: e.target.value });
  };
  setCityHolder = (e) => {
    this.setState({ cityHolder: e.target.value });
  };
  setTelephoneNumberHolder = (e) => {
    if (e && e.target && e.target.value) {
      console.log(this.phoneNumberHolder);
      this.setState({ phoneNumberHolder: e.target.value });
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted");
    if (
      isFirstNameValid(this.state.firstNameHolder) &&
      isLastNameValid(this.state.lastNameHolder) &&
      isEmailValid(this.state.emailHolder) &&
      isCityValid(this.state.cityHolder)
    ) {
      this.props.setSubmit({ submitted: true });
      this.props.setFirstName(this.state.firstNameHolder);
      console.log(this.state.firstNameHolder);
      this.props.setLastName(this.state.lastNameHolder);
      console.log(this.state.lastNameHolder);
      this.props.setEmail(this.state.emailHolder);
      console.log(this.state.emailHolder);
      this.props.setCity(this.state.cityHolder);
      console.log(this.state.cityHolder);
      this.props.setTelephoneNumber(this.state.phoneNumberHolder);
      console.log(typeof this.state.phoneNumberHolder);
      console.log("form true");
    } else {
      alert("Bad Inputs");
      this.props.setSubmit({ submitted: false });
      this.props.setFirstName("");
      this.props.setLastName("");
      this.props.setEmail("");
      this.props.setCity("");
      // this.props.setTelephoneNumber("");
      isFirstNameValid(this.props.firstNameHolder)
        ? null
        : this.setFirstNameHolder("");
      isLastNameValid(this.props.lastNameHolder)
        ? null
        : this.setLastNameHolder("");
      isEmailValid(this.props.emailHolder) ? null : this.setEmailHolder("");
      isCityValid(this.props.cityHolder) ? null : this.setCityHolder("");
      isPhoneNumberValid(this.props.telephoneNumber)
        ? null
        : this.setTelephoneNumber("");
    }
    // console.log({this.props.firstName, this.props.lastName, this.props.email, this.props.city, this.props.telephoneNumber});
  };
  render() {
    const inputProps = [
      {
        value: this.state.firstNameHolder,
        label: "First Name",
        placeholder: "Bilbo",
        onChange: this.setFirstNameHolder,
      },
      {
        value: this.state.lastNameHolder,
        label: "Last Name",
        placeholder: "Baggins",
        onChange: this.setLastNameHolder,
      },
      {
        value: this.state.emailHolder,
        label: "Email",
        placeholder: "",
        onChange: this.setEmailHolder,
      },
      {
        value: this.state.cityHolder,
        label: "City",
        placeholder: "Hobbiton",
        onChange: this.setCityHolder,
      },
    ];
    return (
      <form>
        <u>
          <h3>User Information Form</h3>
        </u>

        {/* first name input */}
        <ClassInputWrap inputProps={inputProps[0]} />
        <ErrorMessage
          message={errors.firstNameErrorMessage}
          show={
            this.props.submitted
              ? !isFirstNameValid(this.state.firstNameHolder)
              : false
          }
        />

        {/* last name input */}
        <ClassInputWrap inputProps={inputProps[1]} />
        <ErrorMessage
          message={errors.lastNameErrorMessage}
          show={
            this.props.submitted
              ? !isLastNameValid(this.state.lastNameHolder)
              : false
          }
        />

        {/* Email Input */}
        <ClassInputWrap inputProps={inputProps[2]} />
        <ErrorMessage
          message={errors.emailErrorMessage}
          show={
            this.props.submitted ? !isEmailValid(this.state.emailHolder) : false
          }
        />

        {/* City Input */}
        <ClassInputWrap inputProps={inputProps[3]} />
        <ErrorMessage
          message={errors.cityErrorMessage}
          show={
            this.props.submitted ? !isCityValid(this.state.cityHolder) : false
          }
        />

        <div className="input-wrap">
          <label htmlFor="phone">Phone:</label>
          <ClassTelephoneInput
            setTelephoneNumberHolder={this.setTelephoneNumberHolder}
          />
        </div>

        <ErrorMessage
          message={errors.phoneNumberErrorMessage}
          show={
            this.props.submitted
              ? isPhoneNumberValid(this.state.phoneNumberHolder)
              : false
          }
        />

        <input type="submit" value="Submit" onClick={this.onSubmit} />
      </form>
    );
  }
}
