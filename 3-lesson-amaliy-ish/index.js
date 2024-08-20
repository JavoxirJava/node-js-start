const express = require("express");
const connectDB = require("./config/db");
const categoryRoutes = require("./routes/categoryRoutes");
const courseRoutes = require("./routes/courseRoutes");
const app = express();
app.use(express.json());

connectDB();

app.use("/api/categories", categoryRoutes);
app.use("/api/courses", courseRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log("Server started on port 5001"));