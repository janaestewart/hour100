const cloudinary = require("cloudinary").v2;

require("dotenv").config({ path: "./config/.env" });

cloudinary.config({
  cloud_name: 'photognet',
  api_key: '818165746492173',
  api_secret: 'mwDVECNbyyF6ElfesiNKuzoOKWI'
});

module.exports = cloudinary;
