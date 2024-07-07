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
    const username = req.user.username;
    const request = req.body;
    request.username = username;

    const result = await admin.update(request);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const list = async (req, res, next) => {
  try {
    const payload = await admin.selectAll(res);
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
};
