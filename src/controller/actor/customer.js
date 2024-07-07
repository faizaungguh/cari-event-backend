import customer from '../../service/actor/customer.js';

const registration = async (req, res, next) => {
  try {
    const result = await customer.signup(req.body);
    res.status(201).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const list = async (req, res, next) => {
  try {
    const payload = await customer.selectAll();
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
    const payload = await customer.selectId(id);
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
    await customer.deleteId(id);
    res.status(200).json({
      message: `Data dengan id ${id} Telah Dihapus`,
    });
  } catch (e) {
    next(e);
  }
};

export default { registration, list, select, drop };
