const express = require("express");
const app = express();
const cors = require("cors");
const connectMongo = require("./db");

app.use(cors());
app.use(express.json());

connectMongo();
const routes = require("./routes/userRoute");

app.use("/api", routes);

app.listen(3001, () => {
  console.log("Server run on port " + 3001);
});

module.exports = app;
