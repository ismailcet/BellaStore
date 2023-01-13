const jwt = require("jsonwebtoken");

const verifyToken = (request, response, next) => {
  const authHeader = request.header.token;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) return response.status(400).json("Token is not valid! ");

      request.user = user;

      next();
    });
  }
};

const verifyTokenAndAuthorization = (request, response, next) => {
  verifyToken(request, response, () => {
    if (request.user.id === request.params.id || request.user.isAdmin) {
      next();
    } else {
      return response.status(400).json("You are not allowed to do that! ");
    }
  });
};

const verifyTokenAndAdmin = (request, response, next) => {
  verifyToken(request, response, () => {
    if (request.user.isAdmin) {
      next();
    } else {
      return response.status(400).json("You are not allowed to do that ! ");
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
};
