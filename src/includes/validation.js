import { Form, Field, ErrorMessage, defineRule, configure } from "vee-validate";
import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email,
  numeric,
  length,
  digits,
  min_value as minValue,
  max_value as maxValue,
  confirmed,
} from "@vee-validate/rules";

export default {
  install(app) {
    app.component("Form", Form);
    app.component("Field", Field);
    app.component("ErrorMessage", ErrorMessage);
    defineRule("required", required);
    defineRule("email", email);
    defineRule("min", min);
    defineRule("max", max);
    defineRule("alpha_spaces", alphaSpaces);
    defineRule("numeric", numeric);
    defineRule("digits", digits);
    defineRule("min_value", minValue);
    defineRule("max_value", maxValue);
    defineRule("length", length);
    defineRule("numeric", numeric);
    defineRule("passwords_match", confirmed);

    configure({
      generateMessage: (context) => {
        const messages = {
          required: `The field ${context.field} is required.`,
          email: `The field ${context.field} must be a valid email.`,
          min: `The field ${context.field} must loner than ${context.rule.params} digits.`,
          max: `The field ${context.field} is too long.`,
          alpha_spaces: `The field ${context.field} may only contains alphabetic characters and spaces.`,
          digits: `The field ${context.field} must be equal to ${context.rule.params} digits`,
          min_value: `The field ${context.field} is too low.`,
          max_value: `The field ${context.field} is too high.`,
          passwords_mismatch: `The password don't match.`,
          length: `The field ${context.field} length should be ${context.rule.params}.`,
          numeric: `The field ${context.field} can only contains numbers`,
          passwords_match: `The field ${context.field} does not match with Password`,
        };
        const message = messages[context.rule.name]
          ? messages[context.rule.name]
          : `The field ${context.field} is invalid.`;

        return message;
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true,
    });
  },
};
