const moongose = require("mongoose");
const colors = require("colors");

const connectdb = async () => {
  try {
    await moongose.connect(process.env.MONGODB_URL);
    console.log(`CONNECTION SABILISED ${moongose.connection.host}`.bgCyan.blue);
  } catch (error) {
    console.log(`Mongodb Server issue ${error}`.bgRed.white);
  }
};

module.exports = connectdb;
