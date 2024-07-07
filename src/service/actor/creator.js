import { prismaClient } from '../../application/database.js';
import { ResponseError } from '../../error/response-error.js';
import {
  deleteValidation,
  selectValidation,
  signupValidation,
} from '../../validations/actor/creator.js';
import { validate } from '../../validations/validation.js';

const signup = async (req) => {
  const creator = validate(signupValidation, req);
  const countCreator = await prismaClient.creator.count({
    where: {
      username: creator.username,
    },
  });

  if (countCreator === 1) {
    throw new ResponseError(
      400,
      'Username tersebut sudah dipakai, coba pilih inputan lainnya'
    );
  }

  return prismaClient.creator.create({
    data: creator,
    select: {
      id: true,
      username: true,
    },
  });
};

const selectAll = async () => {
  return prismaClient.creator.findMany({
    select: { id: true, username: true, creatorName: true },
  });
};

const selectId = async (id) => {
  const creator = validate(selectValidation, { id });

  const countCreator = await prismaClient.creator.count({
    where: {
      id: creator.id,
    },
  });

  if (countCreator === 0) {
    throw new ResponseError(404, `Data dengan id ${id} tidak ditemukan`);
  }

  return await prismaClient.creator.findUnique({
    where: { id: creator.id },
    select: {
      id: true,
      username: true,
      creatorName: true,
      logo: true,
      banner: true,
      description: true,
      contact: true,
    },
  });
};

const deleteId = async (id) => {
  const creatorId = parseInt(id);

  await validate(deleteValidation, { id });

  const countCreator = await prismaClient.creator.count({
    where: {
      id: creatorId,
    },
  });

  if (countCreator === 0) {
    throw new ResponseError(404, `Data dengan id ${id} tidak ditemukan`);
  }

  return await prismaClient.creator.delete({ where: { id: creatorId } });
};

export default {
  signup,
  selectAll,
  selectId,
  deleteId,
};
