import {
  createValidation,
  selectValidation,
  updateValidation,
} from '../../validations/admin.js';
import { prismaClient } from '../../application/database.js';
import { validate } from '../../validations/validation.js';
import { ResponseError } from '../../error/response-error.js';

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

const update = async (req) => {
  const admin = validate(updateValidation, request);

  const totalAdminInDatabase = await prismaClient.admin.count({
    where: {
      username: user.username,
    },
  });

  if (totalAdminInDatabase !== 1) {
    throw new ResponseError(404, 'username tidak ditemukan');
  }

  const data = {};
  // check keunikan
  if (admin.username) {
    data.username = admin.username;
  }

  const checkAdmin = await prismaClient.admin.findUnique({
    where: {
      username: admin.username,
    },
  });

  if (checkAdmin === 1) {
    throw new ResponseError(
      400,
      'Username tersebut sudah ada, pilih username lain'
    );
  }

  if (admin.password) {
    data.password = admin.password;
  }

  if (admin.name) {
    data.name = admin.name;
  }

  return prismaClient.admin.update({
    where: {
      username: admin.username,
      password: admin.password,
      name: admin.name,
    },
    data: data,
    select: {
      username: true,
      name: true,
    },
  });
};

const selectAll = async () => {
  return prismaClient.admin.findMany({
    select: { username: true, name: true },
  });
};

const selectId = async (id) => {
  const admin = validate(selectValidation, { id });

  const countAdmin = await prismaClient.admin.count({
    where: {
      id: admin.id,
    },
  });

  if (countAdmin === 0) {
    throw new ResponseError(404, `Data dengan id ${id} tidak ditemukan`);
  }

  const payload = await prismaClient.admin.findUnique({
    where: { id: admin.id },
    select: { username: true, name: true },
  });

  return payload;
};

export default { add, update, selectAll, selectId };
