const express = require("express");
const cors = require("cors");
const app = express();
const body_parser = require("body-parser");
const errorMiddleware = require("./middleware/error");



app.use(express.json());
app.use(cors());

const authentication = require("./routes/authentication");
const category = require("./routes/category");


app.use("/api/v1", authentication);
app.use("/api/v1",category )


// use middleware
app.use(errorMiddleware);

module.exports = app;
