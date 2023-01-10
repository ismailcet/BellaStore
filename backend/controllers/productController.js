const pool = require("../models/index");

//Get All Product
const getAllProducts = async (request, response) => {
  try {
    await pool.query("SELECT * FROM products", (error, results) => {
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

//Get Product By Id
const geProductById = async (request, response) => {
  const id = parseInt(request.params.id);
  try {
    await pool.query(
      "SELECT * FROM products WHERE id=$1",
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
    response.status(500).json(error);
  }
};

//Create Product
const createProduct = async (request, response) => {
  const { name, price, description, image, size, color, cat } = request.body;
  try {
    await pool.query(
      "INSERT INTO products (name,price,description,image,size,color,category_ids) VALUES ($1,$2,$3,$4,$5,$6,$7)",
      [name, price, description, image, size, color, cat],
      (error, results) => {
        if (error) {
          response.status(400).json({ isSuccess: false });
          throw error;
        }
        response.status(201).json(results);
      }
    );
  } catch (error) {
    response.status(400).json(error);
  }
};

const updateProduct = async (request, response) => {
  const id = parseInt(request.params.id);

  const { image, name, description, size, color, price } = request.body;

  try {
    await pool.query(
      "UPDATE products SET image=$1,name=$2,description=$3,size=$4,color=$5,price=$6 WHERE id = $7",
      [image, name, description, size, color, price, id],
      (error, results) => {
        if (error) {
          response.status(400).json(error);
          throw error;
        }

        response.status(200).json({ isSuccess: true });
      }
    );
  } catch (error) {
    response.status(400).json(error);
  }
};

//Filter Product
const filterProductBy = async (request, response) => {
  const cat = request.query.cat;

  try {
    pool.query(
      "SELECT * FROM products WHERE $1= ANY (categoryname);",
      [cat],
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
module.exports = {
  createProduct,
  getAllProducts,
  geProductById,
  updateProduct,
  filterProductBy,
};
