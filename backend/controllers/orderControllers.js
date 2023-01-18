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
const getAllOrder = (request, response) => {
  try {
    pool.query(
      'SELECT ord.id,ord.quantity,ord.size,pro.image,pro.name,pro.description,pro.price,usr.firstname,usr.surname,usr.email,usr.city,usr.country,usr.address1,usr.phonenumber,orders.payment_info,orders.ordered_date FROM public."orderDetails" ord INNER JOIN products pro ON pro.id=ord.product_id INNER JOIN users usr ON usr.id=ord.user_id INNER JOIN orders ON orders.id=ord.order_id',
      (error, results) => {
        if (error) {
          response.status(400).json(error);
        }

        response.status(200).json(results.rows);
      }
    );
  } catch (error) {
    response.status(400).json(error);
  }
};

//Get Order by user
const getOrderByUserId = (request, response) => {
  const id = request.params.id;
  try {
    pool.query(
      'SELECT ord.id,ord.quantity,ord.size,ord.shipping,pro.image,pro.name,pro.description,pro.price,usr.firstname,usr.surname,usr.email,usr.city,usr.country,usr.address1,usr.phonenumber,orders.payment_info,orders.ordered_date FROM public."orderDetails" ord INNER JOIN products pro ON pro.id=ord.product_id INNER JOIN users usr ON usr.id=ord.user_id INNER JOIN orders ON orders.id=ord.order_id WHERE ord.user_id=$1',
      [id],
      (error, results) => {
        if (error) {
          response.status(400).json(error);
        }
        response.status(200).json(results.rows);
      }
    );
  } catch (error) {
    response.status(400).json(error);
  }
};
//Get Order by OrderId
const getOrderById = (request, response) => {
  const id = request.params.id;
  try {
    pool.query(
      'SELECT ord.id,ord.quantity,ord.size,ord.shipping,pro.image,pro.name,pro.description,pro.price,usr.firstname,usr.surname,usr.email,usr.city,usr.country,usr.address1,usr.phonenumber,orders.payment_info,orders.ordered_date FROM public."orderDetails" ord INNER JOIN products pro ON pro.id=ord.product_id INNER JOIN users usr ON usr.id=ord.user_id INNER JOIN orders ON orders.id=ord.order_id WHERE ord.id=$1',
      [id],
      (error, results) => {
        if (error) {
          response.status(400).json(error);
        }
        response.status(200).json(results.rows);
      }
    );
  } catch (error) {
    response.status(400).json(error);
  }
};

module.exports = { createOrder, getAllOrder, getOrderByUserId, getOrderById };
