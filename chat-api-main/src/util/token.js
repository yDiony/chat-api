const jwt = require('jsonwebtoken');

const checktoken = async (token, id, key) => {
  try {
      return jwt.verify(token, key, (err, decoded) => {
            console.log(decoded)
              if (err) {
                  return false
              } else if (decoded.id === id) {
                  return true
              } else {
                  return false
              }
          });
  } catch (e) {
      console.error(e);
      return false;
  }
};

const setToken = async (id, key) => {
    if (id) {
        return jwt.sign({id}, key, {expiresIn: 28800})
    }
    return false;
};

module.exports = {setToken, checktoken}