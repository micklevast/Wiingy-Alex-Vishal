const express = require("express");
const app = express();
const PORT = 5000;
const BACKEND_URL = "http://localhost"
// require("dotenv").config();
// desctructure the variables from .env file
// const { PORT, BACKEND_URL } = process.env;

// cross origin resource sharing
// const cors = require('cors');
// app.use(cors());

// express.urlencoded allows posting form data
app.use(express.urlencoded({ extended: true }));
// in order to access req.body you need to use express.json() middleware
app.use(express.json());
// serve public files e.g. index.html
app.use(express.static("public"));

// get, post, put methods for /api/videos
const videoRoutes = require("./routes/api/videos");
app.use("/api/videos", videoRoutes);
// app.use("/", commentRoute)
// start the server and listen on port 5000
app.listen(PORT, () => { });
