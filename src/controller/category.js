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

const list = async (req, res, next) => {
  try {
    const payload = await category.selectAll();
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
    const payload = await category.selectId(id);
    res.status(200).json({
      data: payload,
    });
  } catch (e) {
    next(e);
  }
};

const drop = async (req, res, next) => {
  try {
    const id = req.params.id;
    await category.deleteId(id);
    res.status(200).json({
      message: `Data dengan id ${id} Telah Dihapus`,
    });
  } catch (e) {
    next(e);
  }
};

export default {
  create,
  update,
  list,
  select,
  drop,
};
