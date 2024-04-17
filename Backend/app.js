const express = require("express");
const cookieParser = require("cookie-parser");

const cors = require('cors')

const bodyParser = require("body-parser");
const app = express();
app.use(cookieParser());

const connectDatabase = require("./config/db");
const dotenv=require('dotenv');
dotenv.config({path:"./config/config.env"})
connectDatabase()
const fileUpload= require("express-fileupload")
const cloudinary = require("cloudinary");



app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/',
}));

app.use(cors())
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const user= require("./routes/userRoute")


app.use("/api/v1",user)



const server=app.listen(process.env.PORT, () => {
  console.log(`App running on port ${process.env.PORT}.`);
});


// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});






