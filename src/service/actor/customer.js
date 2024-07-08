import { prismaClient } from '../../application/database.js';
import { ResponseError } from '../../error/response-error.js';
import {
  deleteValidation,
  selectValidation,
  signupValidation,
  updateValidation,
} from '../../validations/actor/customer.js';
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
    // select: { id: true, username: true },
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
    select: {
      id: true,
      username: true,
      fullName: true,
      idNumber: true,
      idImage: true,
      contact: true,
    },
  });
};

const deleteId = async (id) => {
  const customerId = parseInt(id);
  await validate(deleteValidation, { id });
  const countCustomer = await prismaClient.customer.count({
    where: {
      id: customerId,
    },
  });

  if (countCustomer === 0) {
    throw new ResponseError(404, `Data dengan id ${id} tidak ditemukan`);
  }

  return await prismaClient.customer.delete({
    where: { id: customerId },
  });
};

const updateId = async (id, body) => {
  const customerId = parseInt(id);
  await validate(selectValidation, { id });
  const object = { id, body };
  console.log(object);
  const countCustomer = await prismaClient.customer.count({
    where: {
      id: customerId,
    },
  });

  if (countCustomer === 0) {
    throw new ResponseError(404, `Data dengan id ${id} tidak ditemukan`);
  }

  const { username, password, fullName, idNumber, idImage, contact } = body;
  // const identityId = parseInt(idNumber);

  // if (isNaN(identityId)) {
  //   throw new ResponseError(400, `Invalid idNumber: ${idNumber}`);
  // }

  await validate(updateValidation, {
    username: username,
    password: password,
    fullName: fullName,
    idNumber: idNumber,
    idImage: idImage,
    contact: contact,
  });

  const checkUsername = await prismaClient.customer.count({
    where: {
      username: username,
    },
  });

  if (checkUsername === 1) {
    throw new ResponseError(400, `Username ${username} tidak tersedia`);
  }
  console.log;
  return await prismaClient.customer.update({
    where: {
      id: customerId,
    },
    data: {
      username,
      password,
      fullName,
      idNumber,
      idImage,
      contact,
    },
  });
};

export default {
  signup,
  selectAll,
  selectId,
  deleteId,
  updateId,
};
