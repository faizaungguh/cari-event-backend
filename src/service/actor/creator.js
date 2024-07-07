import { prismaClient } from '../../application/database.js';
import { ResponseError } from '../../error/response-error.js';
import {
  deleteValidation,
  selectValidation,
  signupValidation,
  updateValidation,
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

const updateId = async (id, body) => {
  const creatorId = parseInt(id);
  await validate(selectValidation, { id });

  const countCreator = await prismaClient.creator.count({
    where: {
      id: creatorId,
    },
  });

  if (countCreator === 0) {
    throw new ResponseError(404, `Data dengan id ${id} tidak ditemukan`);
  }

  const {
    username,
    password,
    creatorName,
    logo,
    banner,
    description,
    contact,
  } = body;

  await validate(updateValidation, {
    username: body.username,
    password: body.password,
    creatorName: body.creatorName,
    logo: body.logo,
    banner: body.banner,
    description: body.description,
    contact: body.contact,
  });

  const checkUsername = await prismaClient.creator.count({
    where: {
      username: body.username,
    },
  });

  if (checkUsername === 1) {
    throw new ResponseError(400, `Username ${username} tidak tersedia`);
  }

  return await prismaClient.creator.update({
    where: {
      id: creatorId,
    },
    data: {
      username,
      password,
      creatorName,
      logo,
      banner,
      description,
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
