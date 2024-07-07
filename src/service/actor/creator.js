import { prismaClient } from '../../application/database.js';
import { ResponseError } from '../../error/response-error.js';
import { signupValidation } from '../../validations/creator.js';
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

export default {
  signup,
};
