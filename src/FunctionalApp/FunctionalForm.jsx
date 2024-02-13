import { ErrorMessage } from "../ErrorMessage";
import { InputWrap } from "./Components/InputWrap";
import { TelephoneInput } from "./Components/TelephoneInput";
import { useState } from "react";
import { errorMessages } from "../data/errorMessages";

const errors = errorMessages;

export const FunctionalForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

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
  return (
    <form>
      <u>
        <h3>User Information Form</h3>
      </u>

      {/* first name input */}
      <InputWrap inputProps={inputProps[0]} />
      <ErrorMessage message={errors.firstNameErrorMessage} show={true} />

      {/* last name input */}
      <InputWrap inputProps={inputProps[1]} />
      <ErrorMessage message={errors.lastNameErrorMessage} show={true} />

      {/* Email Input */}
      <InputWrap inputProps={inputProps[2]} />
      <ErrorMessage message={errors.emailErrorMessage} show={true} />

      {/* City Input */}
      <InputWrap inputProps={inputProps[3]} />
      <ErrorMessage message={errors.cityErrorMessage} show={true} />

      <div className="input-wrap">
        <TelephoneInput />
      </div>

      <ErrorMessage message={errors.phoneNumberErrorMessage} show={true} />

      <input type="submit" value="Submit" />
    </form>
  );
};
