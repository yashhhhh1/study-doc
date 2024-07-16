const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
require('dotenv').config()

const connectDB = require("./db");
// Connecting the Database
connectDB();

// Middleware
app.use(cors({
  origin: [process.env.BASE_URL],
  methods:['GET','POST','PUT'],
  credentials: true
}));
app.use(bodyParser.json());
app.use(cookieParser()); // Add cookie-parser middleware

// Routes
const Auth = require("./routes/Auth");
const Route = require("./routes/Router");

app.use("/auth", Auth);
app.use("/", Route);
app.use('/uploads', express.static('uploads'))

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server is running on port ${port}`));
