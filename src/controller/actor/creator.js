import creator from '../../service/actor/creator.js';

const registration = async (req, res, next) => {
  try {
    const result = await creator.signup(req.body);
    res.status(201).json({
      data: result,
      api: 'cari-event API',
    });
  } catch (e) {
    next(e);
  }
};

const list = async (req, res, next) => {
  try {
    const payload = await creator.selectAll();
    res.status(200).json({
      data: payload,
    });
  } catch (e) {
    next(e);
  }
};

export default {
  registration, list
};
