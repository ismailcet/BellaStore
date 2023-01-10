const pool = require("../models/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Register User
const registerUser = async (request, response) => {
  const {
    firstname,
    surname,
    email,
    password,
    phonenumber,
    city,
    country,
    address1,
  } = request.body;

  try {
    bcrypt.hash(password, 10, async (error, hash) => {
      if (error) {
        response.status(400).json(error);
      }
      await pool.query(
        "INSERT INTO users (firstname,surname,email,password,phonenumber,city,country,address1) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)",
        [firstname, surname, email, hash, phonenumber, city, country, address1],
        (error, results) => {
          if (error) {
            response.status(400).json(error);
            throw error;
          }
          response
            .status(201)
            .json(
              firstname,
              surname,
              email,
              password,
              phonenumber,
              city,
              country,
              address1
            );
        }
      );
    });
  } catch (error) {
    response.status(400).json(error);
  }
};

//Login User
const loginUser = async (request, response) => {
  try {
    const { email, password } = request.body;

    pool.query(
      "SELECT * FROM users WHERE email=$1",
      [email],
      (error, results) => {
        if (error) {
          response.status(401).json("Wrong credantials");
        }

        bcrypt.compare(password, results.rows[0].password, (error, res) => {
          if (error) {
            response.status(401).json("Wrong credentials ! ");
          }
          const accessToken = jwt.sign(
            {
              id: results.rows[0].id,
              isAdmin: results.rows[0].isAdmin,
            },
            process.env.SECRET_KEY,
            { expiresIn: "3d" }
          );
          const { password, ...others } = results.rows[0];
          response.status(200).json({ others, accessToken });
        });
      }
    );
  } catch (error) {
    response.status(500).json(error);
  }
};
module.exports = {
  registerUser,
  loginUser,
};
