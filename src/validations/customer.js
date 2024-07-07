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
  fullName: Joi.string().max(100).required().messages({
    'string.empty': 'Nama tidak boleh Kosong',
    'string.max': `Nama tidak boleh lebih dari {#limit} karakter`,
    'any.required': 'Nama harus disertakan',
  }),
});

const selectValidation = Joi.object({
  id: Joi.number(),
});

const signinValidation = Joi.object({
  username: Joi.string().max(20).required(),
  password: Joi.string().min(6).required(),
});

const updateValidation = Joi.object({
  username: Joi.string().max(20).required(),
  password: Joi.string().min(6).required(),
  fullName: Joi.string().max(50).required(),
  idNumber: Joi.string().required(),
  idImage: Joi.string().required(),
  contact: Joi.string().required(),
});

const deleteValidation = Joi.object({
  id: Joi.number(),
});

export {
  signupValidation,
  selectValidation,
  signinValidation,
  updateValidation,
  deleteValidation,
};
