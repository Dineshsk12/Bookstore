import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import cors from "cors";
import { Book } from "./models/bookModels.js";
import booksRoute from "./routes/BooksRoute.js";

const app = express();

app.use(express.json());

//Middleware for handling CORS POLICY
app.use(cors());

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome to MERN Stack Webpage");
});

app.use("/books", booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App conected to database");
    app.listen(PORT, () => {
      console.log(`App is listeneing on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
