import category from '../service/category.js';

const create = async (req, res, next) => {
  try {
    const result = await category.add(req.body);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const update = async (req, res, next) => {};
const list = async (req, res, next) => {};
const select = async (req, res, next) => {};
const drop = async (req, res, next) => {};

export default {
  create,
  update,
  list,
  select,
  drop,
};
