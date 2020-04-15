const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
  async index(req, res) {
    console.log(req.query);
    const { latitude, longitude, techs } = req.query;
    const techs_array = parseStringAsArray(techs);
    console.log(techs_array);

    var techs_array_regexp = [];
    techs_array.forEach(function(tech) {
      techs_array_regexp.push(new RegExp(tech, 'i'));
    });

    const devs = await Dev.find({
      techs: {
        $in: techs_array_regexp
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude]
          },
          $maxDistance: 1000000
        }
      }
    });

    return res.json(devs);
  }
};
