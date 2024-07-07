import Joi from 'joi';

const createValidation = Joi.object({
  title: Joi.string().required(),
  banner: Joi.string().required(),
  description: Joi.string(),
  detail: Joi.string(),
  eventStart: Joi.date().greater('now').required(),
  eventEnd: Joi.date().greater('now').required(),
});

const selectValidation = Joi.object({
  id: Joi.number().required(),
});

const updateValidation = Joi.object({
  title: Joi.string().required(),
  banner: Joi.string().required(),
  description: Joi.string(),
  detail: Joi.string(),
  eventStart: Joi.date().greater('now').required(),
  eventEnd: Joi.date().greater('now').required(),
});

const deleteValidation = Joi.object({
  id: Joi.number().required,
});

export {
  createValidation,
  selectValidation,
  updateValidation,
  deleteValidation,
};
