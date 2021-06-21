const { Router } = require("express");
const router = Router();
const { indexApi } = require("../controllers/indexApiController");
const { getLocation } = require("../controllers/locationController");
const {
  getWeatherCurrent,
  getForecastCity,
} = require("../controllers/weatherController");

module.exports = function () {
  router.get("/", (req, res) => {
    return res.send("<h1>Online</h1>");
  });

  router.get("/v1", (req, res) => {
    const stack = router.stack;
    console.log("stack", stack);
    res.status(200).json(stack);
  });

  router.get("/location", getLocation);

  router.get("/current/:city?", getWeatherCurrent);

  router.get("/forecast/:city?", getForecastCity);

  return router;
};
