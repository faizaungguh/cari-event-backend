import { prismaClient } from '../application/database.js';
import { createValidation } from '../validations/category.js';
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
const selectAll = async () => {};
const selectId = async () => {};
const deleteId = async () => {};

export default {
  add,
  update,
  selectAll,
  selectId,
  deleteId,
};
