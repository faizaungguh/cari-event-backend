import event from '../service/event.js';

const create = async (req, res, next) => {
  try {
    const result = await event.add(req.body);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const update = async (req, res, next) => {};

const list = async (req, res, next) => {
  try {
    const payload = await event.selectAll();
    res.status(200).json({
      data: payload,
    });
  } catch (e) {
    next(e);
  }
};

const select = async (req, res, next) => {
  try {
    const id = req.params.id;
    const payload = await event.selectId(id);
    res.status(200).json({
      data: payload,
    });
  } catch (e) {
    next(e);
  }
};

const drop = async (req, res, next) => {};

export default {
  create,
  update,
  list,
  select,
  drop,
};
