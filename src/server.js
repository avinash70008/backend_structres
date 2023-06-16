const app = require("./app");
const connect = require("./config/db");
const dotenv = require("dotenv");
dotenv.config();
connect();


app.listen(process.env.PORT, async () => {
  try {
    console.log(`Server Connected Success ${process.env.PORT}`);
  } catch (error) {
    console.log(error);
  }
});