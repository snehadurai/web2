const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/post");
const slideRoutes = require("./routes/slide");
const userRoutes = require("./routes/user");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);
app.use("/api/slide", slideRoutes);
app.get("/", async (req, res) => {
  res.status(200).json("Server is up and running");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});



const database = require("./dataBase/db");
database();

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})

app.get("/", (req, res) => {
    res.send("working condition");
  });
  
  // Catch-all route for handling 404 errors
  app.use("!", (req, res) => {
    res.status(404).json({
      message: 'Endpoint not found',
      status: 'Error',
    });
  });