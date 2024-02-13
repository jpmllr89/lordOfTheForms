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
  return city.length > 1 && city !== null;
}
