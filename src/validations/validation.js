import { ResponseError } from '../error/response-error.js';

const validate = (schema, request) => {
  const result = schema.validate(request, {
    abortEarly: false,
    allowUnknown: false,
  });

  if (result.error) {
    const simplifiedDetails = result.error.details.map((detail) => ({
      message: detail.message,
      path: detail.path,
    }));
    throw new ResponseError(400, 'Validation Error', simplifiedDetails);
  } else {
    return result.value;
  }
};

export { validate };
