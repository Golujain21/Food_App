require("dotenv").config();
const express = require("express");
const colors = require("colors");
const cors = require("cors");
const morgan = require("morgan");
const connectDb = require("./config/conn");
// rest object
const app = express();
//DB connection
connectDb();
// middleWare
app.use(cors());
app.use(express.json());
app.use(morgan());

// route
// URL => http://localhost:8080
app.use("/api/v1/test", require("./routes/testRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/resturant", require("./routes/resturantRoutes"));
app.use("/api/v1/category", require("./routes/catgeoryRoutes"));

app.get("/", (req, res) => {
  return res.status(200).send("<h1> welcome to food server <h1>");
});

const Port = process.env.PORT || 8080;

app.listen(Port, () => {
  console.log(`Server Running on mode on port ${Port}`.bgCyan.white);
});
