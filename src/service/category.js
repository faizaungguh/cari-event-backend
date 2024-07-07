import { prismaClient } from '../application/database.js';
import { createValidation, selectValidation } from '../validations/category.js';
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

const update = async () => {};

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

const deleteId = async () => {};

export default {
  add,
  update,
  selectAll,
  selectId,
  deleteId,
};
