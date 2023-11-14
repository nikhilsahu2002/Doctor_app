const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectdb = require("./config/db");

// dotenv Config

dotenv.config();

// Mongodb config

connectdb();

// REST Objects

const app = express();

// Middleware
app.use(express.json());
app.use(morgan("dev"));

// Routes

app.use("/api/v1/user", require("./Routes/userRoute"));
// PORT

const PORT = process.env.PORT || 8080;

// Listen PORT

app.listen(PORT, () => {
  console.log(
    `Server Running On The Server ${PORT} Mode ${process.env.NODE_MODE}`.bgCyan
      .white,
  );
});
