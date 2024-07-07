import creator from '../../service/actor/creator.js';

const registrationCreator = async (req, res, next) => {
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

export default {
  registrationCreator,
};
