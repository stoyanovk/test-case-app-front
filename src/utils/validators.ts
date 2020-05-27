import validator from "validator";

const isNotEmail = (value: string) => !validator.isEmail(value);
const isNotAlpha = (value: string) => !validator.isAlpha(value);
const isEmpty = (value: string) => validator.isEmail(value);
export { isNotAlpha, isNotEmail, isEmpty };
