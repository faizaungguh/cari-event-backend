import admin from '../../service/actor/admin.js';

const createAdmin = async (req, res, next) => {
  try {
    const result = await admin.add(req.body);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const updateAdmin = async (req, res, next) => {
  try {
    const id =req.params.id
    // const body = {
    //   username: req.body.username,
    //   password: req.body.password,
    //   name: req.body.name,
    // };
    const payload = await admin.update(id);
    res.status(200).json({
      data: payload,
    });
  } catch (e) {
    next(e);
  }
};

const list = async (req, res, next) => {
  try {
    const payload = await admin.selectAll();
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
    const payload = await admin.selectId(id);
    res.status(200).json({
      data: payload,
    });
  } catch (e) {
    next(e);
  }
};
export default {
  createAdmin,
  updateAdmin,
  list,
  select,
};
