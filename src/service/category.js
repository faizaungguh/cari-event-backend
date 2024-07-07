import { prismaClient } from '../application/database.js';
import {
  createValidation,
  deleteValidation,
  selectValidation,
  updateValidation,
} from '../validations/category.js';
import { ResponseError } from '../error/response-error.js';
import { validate } from '../validations/validation.js';

const add = async (req) => {
  const category = validate(createValidation, req);
  const countCategory = await prismaClient.category.count({
    where: {
      type: category.type,
    },
  });

  if (countCategory === 1) {
    throw new ResponseError(
      400,
      'Kategori tersebut sudah ada, pilih nama kategori lain'
    );
  }

  return prismaClient.category.create({
    data: category,
    select: {
      type: true,
      describtion: true,
    },
  });
};

const update = async (id, body) => {
  const categoryId = parseInt(id);
  await validate(selectValidation, { id });

  const countCategory = await prismaClient.category.count({
    where: {
      id: categoryId,
    },
  });

  if (countCategory === 0) {
    throw new ResponseError(404, `Data dengan id ${id} tidak ditemukan`);
  }

  const { type, describtion } = body;
  await validate(updateValidation, {
    type: body.type,
    describtion: body.describtion,
  });

  return await prismaClient.category.update({
    where: {
      id: categoryId,
    },
    data: {
      type: type,
      describtion: describtion,
    },
  });

  console.log(category);
  next();
};

const selectAll = async () => {
  return prismaClient.category.findMany({
    select: {
      id: true,
      type: true,
    },
  });
};

const selectId = async (id) => {
  const category = validate(selectValidation, { id });
  const countCategory = await prismaClient.category.count({
    where: {
      id: category.id,
    },
  });

  if (countCategory === 0) {
    throw new ResponseError(404, `Data dengan id ${id} tidak ditemukan`);
  }

  return await prismaClient.category.findUnique({
    where: {
      id: category.id,
    },
    select: {
      type: true,
      describtion: true,
    },
  });
};

const deleteId = async (id) => {
  const categoryId = parseInt(id);

  await validate(deleteValidation, { id });

  const countCategory = await prismaClient.category.count({
    where: {
      id: categoryId,
    },
  });

  if (countCategory === 0) {
    throw new ResponseError(404, `Data dengan id ${id} tidak ditemukan`);
  }

  return await prismaClient.category.delete({
    where: {
      id: categoryId,
    },
  });
};

export default {
  add,
  update,
  selectAll,
  selectId,
  deleteId,
};
