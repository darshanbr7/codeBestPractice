const axios = require("axios");

const add = (value1, value2) => {
  return value1 + value2;
};

const sub = (value1, value2) => {
  return value1 - value2;
};

const getTodo = async (url) => {
  try {
    const result = await axios.get(url);
    return result.data;
  } catch (error) {
    console.log("error2", error.message);
    throw {
      message: error.message,
      code: error.code,
      succeded: false,
    };
  }
};

const mul = (v1, v2) => {
  return v1 * v2;
};

module.exports = { add, sub, getTodo };
