const express = require("express");
const router = express.Router();

const indexApi = async (req, res) => {
  const stack = router.stack;
  console.log("stack", stack);
  const docApi = stack.map((endpoint) => {
    return {
      method: endpoint.route.stack[0].method,
    };
  });
  res.status(200).json(docApi);
};

module.exports = {
  indexApi,
};
