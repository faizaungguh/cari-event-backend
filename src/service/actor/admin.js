import {
  createValidation,
  deleteValidation,
  selectValidation,
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

  if (countAdmin === 0) {
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

const update = async (id, body) => {
  // belum fix
};

const selectAll = async () => {
  return prismaClient.admin.findMany({
    select: { id: true, username: true, name: true },
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

  return await prismaClient.admin.findUnique({
    where: { id: admin.id },
    select: { username: true, name: true },
  });
};

const deleteId = async (id) => {
  const adminId = parseInt(id);

  await validate(deleteValidation, { id });

  const countAdmin = await prismaClient.admin.count({
    where: {
      id: adminId,
    },
  });

  if (countAdmin === 0) {
    throw new ResponseError(404, `Data dengan id ${id} tidak ditemukan`);
  }

  return await prismaClient.admin.delete({ where: { id: adminId } });
};

export default { add, update, selectAll, selectId, deleteId };
