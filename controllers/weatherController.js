const {
  getWetherDay,
  getForecast,
  getIpData,
} = require("../services/functions");

const getWeatherCurrent = async (req, res, next) => {
  const defaulLocation = await getIpData();
  const { city } = req.params;

  if (city) {
    try {
      const result = await getWetherDay(city);
      console.log("primer log", result);
      res.status(200).json(result);
    } catch (error) {
      console.log("esto es un error: ", error);
      res.status(404).end();
    }
  }
  try {
    const result = await getWetherDay(defaulLocation.city);
    //console.log(result);
    res.status(200).json(result);
  } catch (error) {
    res.status(404);
    //console.log(error);
  }
};

const getForecastCity = async (req, res, next) => {
  const { params } = req;
  const { city } = params;
  const defaultCity = await getIpData();
  if (city) {
    try {
      const result = await getForecast(city);
      console.log("result", result.data);
      res.status(200).json(result);
    } catch (error) {
      console.log("error", error);
      res.status(404).end();
    }
  }
  try {
    const result = await getForecast(defaultCity.city);
    //console.log(result);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).end();
    //console.log(error);
  }
};

module.exports = {
  getWeatherCurrent,
  getForecastCity,
};
