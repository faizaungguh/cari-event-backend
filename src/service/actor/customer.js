import { prismaClient } from '../../application/database.js';
import { ResponseError } from '../../error/response-error.js';
import {
  selectValidation,
  signupValidation,
} from '../../validations/customer.js';
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

const selectAll = async () => {
  return prismaClient.customer.findMany({
    select: { id: true, username: true },
  });
};

const selectId = async (id) => {
  const customer = validate(selectValidation, { id });
  const countCustomer = await prismaClient.customer.count({
    where: {
      id: customer.id,
    },
  });

  if (countCustomer === 0) {
    throw new ResponseError(404, `Data dengan id ${id} tidak ditemukan`);
  }

  return await prismaClient.customer.findUnique({
    where: { id: customer.id },
    // select: { username: true, name: true },
  });
};

const deleteId = async () => {};

export default { signup, selectAll, selectId, deleteId };
