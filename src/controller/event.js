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

const update = async (req, res, next) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const payload = await event.update(id, body);
    res.status(200).json({
      data: payload,
    });
  } catch (e) {
    next(e);
  }
};

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

const drop = async (req, res, next) => {
  try {
    const id = req.params.id;
    await event.deleteId(id);
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
