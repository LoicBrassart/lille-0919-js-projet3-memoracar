require("dotenv").config();

let CONFIG = {};
CONFIG.siteTitle = process.env.REACT_APP_SITE_TITLE;
CONFIG.apiSite = process.env.REACT_APP_LOCALHOST;
module.exports = CONFIG;
