import { prismaClient } from '../application/database.js';
import { ResponseError } from '../error/response-error.js';
import {
  createValidation,
  deleteValidation,
  selectValidation,
  updateValidation,
} from '../validations/event.js';
import { validate } from '../validations/validation.js';

const add = async (req) => {
  const event = validate(createValidation, req);
  return prismaClient.event.create({
    data: event,
  });
};

const update = async (id, body) => {
  const eventId = parseInt(id);
  await validate(selectValidation, { id });

  const countEvent = await prismaClient.event.count({
    where: {
      id: eventId,
    },
  });

  if (countEvent === 0) {
    throw new ResponseError(404, `Data dengan id ${id} tidak ditemukan`);
  }

  const { title, banner, description, detail, eventStart, eventEnd } = body;
  await validate(updateValidation, {
    title,
    banner,
    description,
    detail,
    eventStart,
    eventEnd,
  });

  return await prismaClient.event.update({
    where: {
      id: eventId,
    },
    data: {
      title,
      banner,
      description,
      detail,
      eventStart,
      eventEnd,
    },
  });
};

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

const deleteId = async (id) => {
  const eventId = parseInt(id);
  await validate(deleteValidation, { id });
  const countEvent = await prismaClient.event.count({
    where: {
      id: eventId,
    },
  });

  if (countEvent === 0) {
    throw new ResponseError(404, `Data dengan id ${id} tidak ditemukan`);
  }

  return await prismaClient.event.delete({
    where: {
      id: eventId,
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
