import { ErrorMessage } from "../ErrorMessage";
import { InputWrap } from "./Components/InputWrap";
import { TelephoneInput } from "./Components/TelephoneInput";
import { useState } from "react";
import { errorMessages } from "../data/errorMessages";
import {
  isEmailValid,
  isFirstNameValid,
  isLastNameValid,
  isCityValid,
  // isPhoneNumberValid,
} from "../utils/validations.js";

const errors = errorMessages;

export const FunctionalForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const inputProps = [
    {
      value: firstName,
      onChange: (e) => setFirstName(e.target.value),
      labelText: "First Name",
      placeholder: "Bilbo",
    },
    {
      value: lastName,
      onChange: (e) => setLastName(e.target.value),
      labelText: "Last Name",
      placeholder: "Baggins",
    },
    {
      value: email,
      onChange: (e) => setEmail(e.target.value),
      labelText: "Email",
      placeholder: "bilbo-baggins@adventurehobbits.net",
    },
    {
      value: city,
      onChange: (e) => setCity(e.target.value),
      labelText: "City",
      placeholder: "Hobbiton",
    },
  ];
  // const validateForm = () => {
  //   return (
  //     isFirstNameValid(firstName) &&
  //     isLastNameValid(lastName) &&
  //     isEmailValid(email) &&
  //     isCityValid(city)
  //   );
  // };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({
      firstName,
      lastName,
      email,
      city,
    });
    setFormSubmitted(true);
    // if (validateForm()) {
    //   alert("Form Submitted");
    // } else {
    //   alert("Form Invalid");
    // }
  };
  return (
    <form>
      <u>
        <h3>User Information Form</h3>
      </u>

      {/* first name input */}
      <InputWrap inputProps={inputProps[0]} />
      <ErrorMessage
        message={errors.firstNameErrorMessage}
        show={formSubmitted ? !isFirstNameValid(firstName) : false}
      />

      {/* last name input */}
      <InputWrap inputProps={inputProps[1]} />
      <ErrorMessage
        message={errors.lastNameErrorMessage}
        show={formSubmitted ? !isLastNameValid(firstName) : false}
      />

      {/* Email Input */}
      <InputWrap inputProps={inputProps[2]} />
      <ErrorMessage
        message={errors.emailErrorMessage}
        show={formSubmitted ? !isEmailValid(email) : false}
      />

      {/* City Input */}
      <InputWrap inputProps={inputProps[3]} />
      <ErrorMessage
        message={errors.cityErrorMessage}
        show={formSubmitted ? !isCityValid(city) : false}
      />

      <div className="input-wrap">
        <TelephoneInput inputProps={inputProps[4]} />
      </div>

      <ErrorMessage
        message={errors.phoneNumberErrorMessage}
        show={
          // formSubmitted ? !isphoneNumberValid() :
          false
        }
      />

      <input type="submit" value="Submit" onClick={onSubmit} />
    </form>
  );
};
