const Nexmo = require("nexmo");

// go to nexmo.com to register for API access
const config = new Nexmo({
    apiKey: "API Key",
    apiSecret: "API Secret"
  });
module.exports = config;