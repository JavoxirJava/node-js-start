const express = require("express");
const connectDB = require("./config/db");
const categoryRoutes = require("./routes/categoryRoutes");
const app = express();
connectDB();
app.use(express.json());
app.use("/api/categories", categoryRoutes);
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log("Server started on port 5001"));