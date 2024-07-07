import { prismaClient } from '../application/database.js';
import { createValidation } from '../validations/event.js';
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

const selectId = async () => {};

const deleteId = async () => {};

export default {
  add,
  update,
  selectAll,
  selectId,
  deleteId,
};
