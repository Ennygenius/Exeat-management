import express from "express";
const app = express();
import HostelRoutes from "./routes/HostelRoutes.js";
import connectDb from "./utils/Db.js";

const PORT = 1954;

app.use(express.json());
app.use("/hostel", HostelRoutes);
app.all("*", (req, res) => {
  res.status(404).send("Route Not Found");
});

app.listen(PORT, () => {
  connectDb();
  console.log(`server fired on port ${PORT}`);
});
