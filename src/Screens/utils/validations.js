import validator from 'validator';

const checkEmpty = (val, key) => {
  if (validator.isEmpty(val.trim())) {
    return `${key}`;
  } else {
    return '';
  }
}

const checkMinLength = (val, minLength, key) => {
  if (val.trim().length < minLength) {
    return `Please enter valid ${key}`;
  } else {
    return '';
  }
};

export default function (data) {
  const {userName, email, password} = data;

  if (userName !== undefined) {
    let emptyValidationText = checkEmpty(
      userName,
      'Please enter your username',
    );
    if (emptyValidationText !== '') {
      return emptyValidationText;
    } else {
      let minLengthValidation = checkMinLength(userName, 3, 'userName');
      if(minLengthValidation !== ''){
        return minLengthValidation;
      }
    }
  }

  if (email !== undefined) {
    let emptyValidationText = checkEmpty(email, 'Please enter your email');
    if (emptyValidationText !== '') {
      return emptyValidationText;
    } else {
      if (!validator.isEmail(email)) {
        return 'Please enter valid email';
      }
    }
  }
  if (password !== undefined) {
    let emptyValidationText = checkEmpty(
      password,
      'Please enter your password',
    );
    if (emptyValidationText !== '') {
      return emptyValidationText;
    } else {
      let minLengthValidation = checkMinLength(password, 6, 'password');
      if(minLengthValidation !== ''){
        return minLengthValidation;
      }
    }
  }
}
