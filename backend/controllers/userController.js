const pool = require("../models/index");

//Get All Users
const getAllUsers = async (request, response) => {
  try {
    await pool.query("SELECT * FROM users", (error, results) => {
      if (error) {
        response.status(400).json(error);
        throw error;
      }

      response.status(200).json(results.rows);
    });
  } catch (error) {
    response.status(400).json(error);
  }
};

//Get User by ID
const getUserById = async (request, response) => {
  const id = parseInt(request.params.id);

  try {
    await pool.query(
      "SELECT * FROM users WHERE id = $1 ",
      [id],
      (error, results) => {
        if (error) {
          response.status(400).json(error);
          throw error;
        }
        response.status(200).json(results.rows);
      }
    );
  } catch (error) {
    response.status(400).json(error);
  }
};

//Update User Profile Page
const updateUser = async (request, response) => {
  const id = parseInt(request.params.id);

  const { firstname, surname, email, phonenumber, city, country, address1 } =
    request.body;
  try {
    await pool.query(
      "UPDATE users SET firstname=$1 ,surname=$2 ,email=$3 ,phonenumber=$4,city=$5,country=$6,address1=$7",
      [firstname, surname, email, phonenumber, city, country, address1],
      (error, results) => {
        if (error) {
          response.status(400).json(error);
        }
        response.status(200).json({ isUpdated: True });
      }
    );
  } catch (error) {
    response.status(400).json(error);
  }
};

const orderByUser = async (request, response) => {
  const id = parseInt(request.params.id);
  try {
    await pool.query(
      'SELECT users.id,users.firstname,users.surname,users.address1 , products.name,products.price,orders.ordered_date,public."orderDetails".size,public."orderDetails".quantity FROM ((public."orderDetails" INNER JOIN orders ON orders.id = public."orderDetails".order_id) INNER JOIN users ON users.id = public."orderDetails".user_id INNER JOIN products ON products.id = public."orderDetails".product_id) WHERE users.id=$1',
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

module.exports = {
  getAllUsers,
  getUserById,
  updateUser,
  orderByUser,
};
