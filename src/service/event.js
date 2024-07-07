import { prismaClient } from '../application/database.js';
import { ResponseError } from '../error/response-error.js';
import { createValidation, selectValidation } from '../validations/event.js';
import { validate } from '../validations/validation.js';

const add = async (req) => {
  const event = validate(createValidation, req);
  return prismaClient.event.create({
    data: event,
  });
};

const update = async () => {};

const selectAll = async () => {
  return prismaClient.event.findMany({
    select: {
      id: true,
      banner: true,
      title: true,
      eventEnd: true,
    },
  });
};

const selectId = async (id) => {
  const event = validate(selectValidation, { id });
  const countEvent = await prismaClient.event.count({
    where: {
      id: event.id,
    },
  });

  if (countEvent === 0) {
    throw new ResponseError(404, `Data dengan id ${id} tidak ditemukan`);
  }

  return await prismaClient.event.findUnique({
    where: {
      id: event.id,
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
