import { prismaClient } from '../../application/database.js';
import { ResponseError } from '../../error/response-error.js';
import { signupValidation } from '../../validations/customer.js';
import { validate } from '../../validations/validation.js';

const signup = async (req) => {
  const customer = validate(signupValidation, req);

  const countCustomer = await prismaClient.customer.count({
    where: {
      username: customer.username,
    },
  });

  if (countCustomer === 1) {
    throw new ResponseError(
      400,
      'Username tersebut sudah dipakai, pilih username lain untuk kamu gunakan'
    );
  }

  return prismaClient.customer.create({
    data: customer,
    select: {
      id: true,
      username: true,
      fullName: true,
    },
  });
};

export default { signup };
