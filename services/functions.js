const axios = require("axios");
require("dotenv").config();

const API_KEY = process.env.API_KEY;

async function getIpData() {
  try {
    const res = await axios.get(`https://ipapi.co/json`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

async function getWetherDay(city) {
  try {
    const res = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    return res.data;
  } catch (error) {
    throw error;
  }
}
async function getForecast(city) {
  try {
    const res = await axios.get(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`
    );
    return res.data;
  } catch (error) {
    throw error;
  }
}

function getCodes(cp) {
  return new Promise((resolve, reject) => {
    if (cp === undefined) {
      reject("sos un boludo");
    } else {
      resolve("ahi val codigo prro");
    }
  });
}

module.exports = {
  getIpData,
  getWetherDay,
  getForecast,
};
