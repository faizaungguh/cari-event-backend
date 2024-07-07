import Joi from 'joi';

const createValidation = Joi.object({
  type: Joi.string().min(4).max(20).required(),
  describtion: Joi.string().max(50).required(),
});

const selectValidation = Joi.object({
  id: Joi.number(),
});

const updateValidation = Joi.object({
  id: Joi.number(),
  type: Joi.string().min(4).max(20).required(),
  describtion: Joi.string().max(50).required(),
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
