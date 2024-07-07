import admin from '../../service/actor/admin.js';

const createAdmin = async (req, res, next) => {
  try {
    const result = await admin.add(req.body);
    res.status(201).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

export default {
  createAdmin,
};
