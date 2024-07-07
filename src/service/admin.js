import { createValidation } from '../validations/admin.js';
import { prismaClient } from '../application/database.js';
import { validate } from '../validations/validation.js';
import { ResponseError } from '../error/response-error.js';

const add = async (req) => {
  const admin = validate(createValidation, req);

  const countAdmin = await prismaClient.admin.count({
    where: {
      username: admin.username,
    },
  });

  if (countAdmin === 1) {
    throw new ResponseError(
      400,
      'Username tersebut sudah ada, pilih username lain'
    );
  }

  return prismaClient.admin.create({
    data: admin,
    select: {
      username: true,
      name: true,
    },
  });
};

export default { add };
