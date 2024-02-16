import { ProfileInformation } from "../ProfileInformation";
import { FunctionalForm } from "./FunctionalForm";
import { useState } from "react";

export const FunctionalApp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [telephoneNumber, setTelephoneNumber] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const allStates = {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    city,
    setCity,
    telephoneNumber,
    setTelephoneNumber,
    formSubmitted,
    setFormSubmitted,
  };

  return (
    <>
      <h2>Functional</h2>
      <ProfileInformation {...allStates} />
      <FunctionalForm {...allStates} />
    </>
  );
};
