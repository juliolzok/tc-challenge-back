const { getIpData } = require("../services/functions");

const getLocation = async (req, res, next) => {
  console.log(req.query);

  try {
    const result = await getIpData();
    console.log(result);
    let location = {
      city: result.city,
      region: result.region,
      country: result.country_name,
    };
    res.status(200).json(location);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getLocation,
};
