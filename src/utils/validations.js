export function isEmailValid(emailAddress) {
  // eslint-disable-next-line no-useless-escape
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return !!emailAddress.match(regex);
}

export function isFirstNameValid(firstName) {
  return firstName.length > 1;
}

export function isLastNameValid(lastName) {
  return lastName.length > 1;
}

export function isCityValid(city) {
  return city.length > 1;
}
