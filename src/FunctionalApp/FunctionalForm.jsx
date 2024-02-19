import { ErrorMessage } from "../ErrorMessage";
import { FunctionalTextInput } from "./Components/FunctionalTextInput.jsx";
import { TelephoneInput } from "./Components/TelephoneInput";
import { errorMessages } from "../data/errorMessages";
import {
  isEmailValid,
  isFirstNameValid,
  isLastNameValid,
  isCityValid,
  isPhoneNumberValid,
} from "../utils/validations.js";
import { useState } from "react";
const errors = errorMessages;

export const FunctionalForm = ({ ...allStates }) => {
  const [firstNameHolder, setFirstNameHolder] = useState("");
  const [lastNameHolder, setLastNameHolder] = useState("");
  const [emailHolder, setEmailHolder] = useState("");
  const [cityHolder, setCityHolder] = useState("");

  const inputProps = [
    {
      value: firstNameHolder,
      onChange: (e) => setFirstNameHolder(e.target.value),
      labelText: "First Name",
      placeholder: "Bilbo",
    },
    {
      value: lastNameHolder,
      onChange: (e) => setLastNameHolder(e.target.value),
      labelText: "Last Name",
      placeholder: "Baggins",
    },
    {
      value: emailHolder,
      onChange: (e) => setEmailHolder(e.target.value),
      labelText: "Email",
      placeholder: "bilbo-baggins@adventurehobbits.net",
    },
    {
      value: cityHolder,
      onChange: (e) => setCityHolder(e.target.value),
      labelText: "City",
      placeholder: "Hobbiton",
    },
  ];

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      isFirstNameValid(firstNameHolder) &&
      isLastNameValid(lastNameHolder) &&
      isEmailValid(emailHolder) &&
      isCityValid(cityHolder) &&
      isPhoneNumberValid(allStates.telephoneNumber)
    ) {
      allStates.setFormSubmitted(true);
      allStates.setFirstName(firstNameHolder);
      allStates.setLastName(lastNameHolder);
      allStates.setEmail(emailHolder);
      allStates.setCity(cityHolder);
    } else {
      alert("Bad Inputs");
      console.log("donut");
      // setFirstNameHolder("");
      // setLastNameHolder("");
      // setEmailHolder("");
      // setCityHolder("");

      isFirstNameValid(firstNameHolder) ? null : setFirstNameHolder("");
      isLastNameValid(lastNameHolder) ? null : setLastNameHolder("");
      isEmailValid(emailHolder) ? null : setEmailHolder("");
      isCityValid(cityHolder) ? null : setCityHolder("");
      isPhoneNumberValid(allStates.telephoneNumber)
        ? null
        : allStates.setTelephoneNumber("");
      allStates.setFormSubmitted(true);
    }
  };
  return (
    <form>
      <u>
        <h3>User Information Form</h3>
      </u>

      {/* first name input */}
      <FunctionalTextInput inputProps={inputProps[0]} />
      <ErrorMessage
        message={errors.firstNameErrorMessage}
        show={
          allStates.formSubmitted ? !isFirstNameValid(firstNameHolder) : false
        }
      />

      {/* last name input */}
      <FunctionalTextInput inputProps={inputProps[1]} />
      <ErrorMessage
        message={errors.lastNameErrorMessage}
        show={
          allStates.formSubmitted ? !isLastNameValid(lastNameHolder) : false
        }
      />

      {/* Email Input */}
      <FunctionalTextInput inputProps={inputProps[2]} />
      <ErrorMessage
        message={errors.emailErrorMessage}
        show={allStates.formSubmitted ? !isEmailValid(emailHolder) : false}
      />

      {/* City Input */}
      <FunctionalTextInput inputProps={inputProps[3]} />
      <ErrorMessage
        message={errors.cityErrorMessage}
        show={allStates.formSubmitted ? !isCityValid(cityHolder) : false}
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
