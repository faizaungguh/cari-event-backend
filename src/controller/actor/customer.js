import customer from '../../service/actor/customer.js';

const registrationCustomer = async (req, res, next) => {
  try {
    const result = await customer.signup(req.body);
    res.status(201).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

export default { registrationCustomer };
