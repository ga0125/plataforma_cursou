// -----------------------------
// File: ./src/drivers/validators.js
// Author: Gabriel Zacchi Braga (POC)
// Date: 14 dez 2020
// Brief: Fields validator
// -----------------------------

// -----------------------------
// Validating email pattern
export function validateEmail(email) {
  const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //eslint-disable-line
  const validateUsername = regEx.test(String(email).toLowerCase());

  return (validateUsername);
}

// -----------------------------
// Validating user's names
export function validateName(name) {
  let nameValidation = true;

  if (name.length < 3 || name.length > 250) {
    nameValidation = false;
  }

  return (nameValidation);
}

// -----------------------------
// Validating user's names
export function validateCourseName(name) {
  let courseNameValidation = true;

  if (name.length < 3 || name.length > 250) {
    courseNameValidation = false;
  }

  return (courseNameValidation);
}
