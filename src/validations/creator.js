import Joi from 'joi';

const signupValidation = Joi.object({
  username: Joi.string().max(20).required().messages({
    'string.empty': 'Username tidak boleh Kosong',
    'string.max': `Username tidak boleh lebih dari {#limit} karakter`,
    'any.required': 'Username harus disertakan',
  }),
  password: Joi.string().min(6).required().messages({
    'string.empty': 'Password tidak boleh Kosong',
    'string.min': `Password tidak boleh kurang dari {#limit} karakter`,
    'any.required': 'Password harus disertakan',
  }),
});

const selectValidation = Joi.object({
  username: Joi.string().max(20).required().messages({
    'string.empty': 'Username tidak boleh Kosong',
    'string.max': `Username tidak boleh lebih dari {#limit} karakter`,
    'any.required': 'Username harus disertakan',
  }),
});

const signinValidation = Joi.object({
  username: Joi.string().max(20).required(),
  password: Joi.string().min(6).required(),
});

const updateValidation = Joi.object({
  username: Joi.string().max(20).required(),
  password: Joi.string().min(6).required(),
  creatorName: Joi.string().max(50).required(),
  logo: Joi.string(),
  banner: Joi.string(),
  description: Joi.string().required(),
  contact: Joi.string().required(),
});

export {
  signupValidation,
  selectValidation,
  signinValidation,
  updateValidation,
};
