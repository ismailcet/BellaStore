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
const createProduct = (request, response) => {
  const { name, price, image, size, color } = request.body;
  console.log(name, price, image, size, color);
  pool.query(
    "INSERT INTO products (name,price,image,size,color) VALUES ($1,$2,$3,$4,$5)",
    [name, price, image, size, color],
    (error, results) => {
      if (error) {
        response.status(400).json({ isSuccess: false });
        throw error;
      }
      response.status(201).json(results);
    }
  );
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
      'SELECT * FROM public."ProductCategories" INNER JOIN categories cat ON cat.id = public."ProductCategories".category_id INNER JOIN products pro ON pro.id = public."ProductCategories".product_id WHERE cat.name=$1',
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
