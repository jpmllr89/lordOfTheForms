import { ErrorMessage } from "../ErrorMessage";
import { InputWrap } from "./Components/InputWrap";
import { TelephoneInput } from "./Components/TelephoneInput";
// import { useState } from "react";
import { errorMessages } from "../data/errorMessages";
import {
  isEmailValid,
  isFirstNameValid,
  isLastNameValid,
  isCityValid,
  isPhoneNumberValid,
} from "../utils/validations.js";
const errors = errorMessages;

export const FunctionalForm = ({ ...allStates }) => {
  const inputProps = [
    {
      value: allStates.firstName,
      onChange: (e) => allStates.setFirstName(e.target.value),
      labelText: "First Name",
      placeholder: "Bilbo",
    },
    {
      value: allStates.lastName,
      onChange: (e) => allStates.setLastName(e.target.value),
      labelText: "Last Name",
      placeholder: "Baggins",
    },
    {
      value: allStates.email,
      onChange: (e) => allStates.setEmail(e.target.value),
      labelText: "Email",
      placeholder: "bilbo-baggins@adventurehobbits.net",
    },
    {
      value: allStates.city,
      onChange: (e) => allStates.setCity(e.target.value),
      labelText: "City",
      placeholder: "Hobbiton",
    },
  ];

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      isFirstNameValid(allStates.firstName) &&
      isLastNameValid(allStates.lastName) &&
      isEmailValid(allStates.email) &&
      isCityValid(allStates.city) &&
      isPhoneNumberValid(allStates.telephoneNumber)
    ) {
      allStates.setFormSubmitted(true);
    } else {
      console.log("donut");
      allStates.setFirstName("");
      allStates.setLastName("");
      allStates.setEmail("");
      allStates.setCity("");
      allStates.setTelephoneNumber("");
      allStates.setFormSubmitted(true);
    }
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
        show={
          allStates.formSubmitted
            ? !isFirstNameValid(allStates.firstName)
            : false
        }
      />

      {/* last name input */}
      <InputWrap inputProps={inputProps[1]} />
      <ErrorMessage
        message={errors.lastNameErrorMessage}
        show={
          allStates.formSubmitted
            ? !isLastNameValid(allStates.firstName)
            : false
        }
      />

      {/* Email Input */}
      <InputWrap inputProps={inputProps[2]} />
      <ErrorMessage
        message={errors.emailErrorMessage}
        show={allStates.formSubmitted ? !isEmailValid(allStates.email) : false}
      />

      {/* City Input */}
      <InputWrap inputProps={inputProps[3]} />
      <ErrorMessage
        message={errors.cityErrorMessage}
        show={allStates.formSubmitted ? !isCityValid(allStates.city) : false}
      />

      <div className="input-wrap">
        <TelephoneInput setTelephoneNumber={allStates.setTelephoneNumber} />
      </div>

      <ErrorMessage
        message={errors.phoneNumberErrorMessage}
        show={
          allStates.formSubmitted
            ? !isPhoneNumberValid(allStates.telephoneNumber)
            : false
        }
      />

      <input type="submit" value="Submit" onClick={onSubmit} />
    </form>
  );
};
