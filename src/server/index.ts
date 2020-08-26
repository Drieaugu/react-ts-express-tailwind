import express from "express";
import { join } from "path";
import get from "./api/get";

const app = express();
app.use(express.static("dist"));

get(app);

app.get("*", (req, res) => {
  const builtFilePath = join(__dirname, "..", "dist", "index.html");
  res.sendFile(builtFilePath);
});

app.listen(2000, () => {
  console.log("[Express server is running]");
});
