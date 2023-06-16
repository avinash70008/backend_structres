const mongoose = require("mongoose")

const connect = async () => {

    console.log(`mongodb+srv://${process.env.DB_URI}:${process.env.PASSWORD}@cluster0.oivqags.mongodb.net`)

    // mongodb+srv://admin_project_bottom_funnel_saas_product:agile2023@cluster0.oivqags.mongodb.net/



    mongoose
      .connect(
        `mongodb+srv://${process.env.DB_URI}:${process.env.PASSWORD}@cluster0.oivqags.mongodb.net`,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      )
      .then((data) => {
        console.log(`mongo db is connected with server: ${data.connection.host}`);
      });
  };
  
  module.exports = connect;
  