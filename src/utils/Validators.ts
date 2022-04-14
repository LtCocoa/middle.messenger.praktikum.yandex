export const validateEmail = (event: Event): boolean => {
  const regExp = /^\w+@\w+?\.\w{2,4}$/i;
  const value = (<HTMLInputElement>event.target).value;
  return regExp.test(value);
};

export const validateLogin = (event: Event): boolean => {
  const regExp = /^\w{3,15}$/i;
  const value = (<HTMLInputElement>event.target).value;
  return regExp.test(value);
};

export const validatePassword = (event: Event): RegExpMatchArray | null => {
  const regExp = /^[a-z0-9]{6,15}$/i;
  const value = (<HTMLInputElement>event.target).value;
  return value.match(regExp);
};

export const validateName = (event: Event): boolean => {
  const regExp = /^[a-zа-я]{2,15}$/i;
  const value = (<HTMLInputElement>event.target).value;
  return regExp.test(value);
};

export const validatePhoneNumber = (event: Event): boolean => {
  const regExp = /^[0-9]{11}/i;
  const value = (<HTMLInputElement>event.target).value;
  return regExp.test(value);
};

export const checkValidation = (
  targetId: string,
  validationFunction: Function,
  className: string
): Function => {
  return (event: Event) => {
    const target = document.querySelector(targetId);
    if (!validationFunction(event)) {
      target?.classList.toggle(className, true);
    } else {
      target?.classList.toggle(className, false);
    }
  };
};
