const pool = require("../models/index");

//Create Order
const createOrder = async (request, response) => {
  const { user_id, product_id, quantity, size, payment_info, ordered_date } =
    request.body;
  try {
    await pool.query(
      "INSERT INTO orders (payment_info , ordered_date) VALUES ($1, $2) RETURNING id;",
      [payment_info, ordered_date],
      (error, results) => {
        if (error) {
          response.status(400).json(error);
        }
        pool.query(
          'INSERT INTO public."orderDetails" (product_id, user_id, order_id, quantity,size) VALUES ($1,$2,$3,$4,$5)',
          [product_id, user_id, results.rows[0].id, quantity, size],
          (error, results) => {
            if (error) {
              response.status(400).json(error);
            }
            response.status(201).json({ isAdded: true });
          }
        );
      }
    );
  } catch (error) {
    response.status(400).json(error);
  }
};

//GetAll order will added.
module.exports = { createOrder };
