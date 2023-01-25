const axios = require("axios");

export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "9381494c8emsh0d76cf772de4994p1d739ajsnb6acc3136ddf",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const geoApiUrl = "https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions"

