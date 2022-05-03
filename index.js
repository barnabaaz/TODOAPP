require("dotenv").config();
const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
// dB connection

mongoose.connect(process.env.DATABASE_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on("error", (err) => console.error(err.message));
db.once("open", () => console.log("connected to DB "));

app.use("", routes);

app.listen(5000, () => console.log("server is running  on port 5000"));
