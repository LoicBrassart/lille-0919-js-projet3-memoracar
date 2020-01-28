require("dotenv").config();

let CONFIG = {};
CONFIG.siteTitle = process.env.REACT_APP_SITE_TITLE;
CONFIG.apiSite = process.env.REACT_APP_LOCALHOST;
CONFIG.img =
  process.env.REACT_APP_IMG_LOGO || `/pictures/logos/shinyHedgehog.jpg`;
module.exports = CONFIG;
