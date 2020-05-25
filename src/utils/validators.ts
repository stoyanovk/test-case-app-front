import validator from "validator";

const isNotEmail = (value: string) => !validator.isEmail(value);
const isNotAlpha = (value: string) => !validator.isAlpha(value);
export { isNotAlpha, isNotEmail };
