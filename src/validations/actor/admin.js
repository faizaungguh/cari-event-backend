import Joi from 'joi';

const createValidation = Joi.object({
  username: Joi.string()
    .pattern(new RegExp(/^\S+$/))
    .trim()
    .min(1)
    .max(20)
    .required()
    .messages({
      'string.pattern.base': 'Username tidak boleh menggunakan spasi',
      'string.empty': 'Username tidak boleh Kosong',
      'string.max': `Username tidak boleh lebih dari {#limit} karakter`,
      'any.required': 'Username harus disertakan',
    }),
  password: Joi.string().min(6).required().messages({
    'string.empty': 'Password tidak boleh Kosong',
    'string.min': `Password tidak boleh kurang dari {#limit} karakter`,
    'any.required': 'Password harus disertakan',
  }),
  name: Joi.string().max(100).required().messages({
    'string.empty': 'Nama tidak boleh Kosong',
    'string.max': `Nama tidak boleh lebih dari {#limit} karakter`,
    'any.required': 'Nama harus disertakan',
  }),
});

const selectValidation = Joi.object({ id: Joi.number() });

const updateValidation = Joi.object({
  username: Joi.string()
    .pattern(new RegExp(/^\S+$/))
    .trim()
    .min(1)
    .max(20)
    .required()
    .messages({
      'string.pattern.base': 'Username tidak boleh menggunakan spasi',
      'string.empty': 'Username tidak boleh Kosong',
      'string.max': `Username tidak boleh lebih dari {#limit} karakter`,
      'any.required': 'Username harus disertakan',
    }),
  password: Joi.string().min(6).required().messages({
    'string.empty': 'Password tidak boleh Kosong',
    'string.min': `Password tidak boleh kurang dari {#limit} karakter`,
    'any.required': 'Password harus disertakan',
  }),
  name: Joi.string().max(100).required().messages({
    'string.empty': 'Nama tidak boleh Kosong',
    'string.max': `Nama tidak boleh lebih dari {#limit} karakter`,
    'any.required': 'Nama harus disertakan',
  }),
});

const deleteValidation = Joi.object({
  id: Joi.number(),
});

export {
  createValidation,
  selectValidation,
  updateValidation,
  deleteValidation,
};
