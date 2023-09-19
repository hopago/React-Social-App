const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const multer = require("multer");
const userRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const postRouter = require("./routes/posts");

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
  .then(
    app.listen(8000, () => {
        console.log("Backend Ready!");
    })
  )
  .catch(err => console.log(err));

app.use(cors());
app.use(helmet());
app.use(morgan("common"));
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);