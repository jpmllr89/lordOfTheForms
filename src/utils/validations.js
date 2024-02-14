import { allCities } from "./all-cities";

export function isEmailValid(emailAddress) {
  // eslint-disable-next-line no-useless-escape
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return !!emailAddress.match(regex) && emailAddress !== null;
}

export function isFirstNameValid(firstName) {
  return firstName.length > 1 && firstName !== null;
}

export function isLastNameValid(lastName) {
  return lastName.length > 1 && lastName !== null;
}

export function isCityValid(city) {
  city = city.slice(0, 1).toUpperCase() + city.slice(1).toLowerCase();
  if (allCities.includes(city)) {
    return true;
  }
}

export function isPhoneNumberValid(phoneNumber) {
  const regex = /^\d{10}$/;
  return !!phoneNumber.match(regex) && phoneNumber !== null;
}
