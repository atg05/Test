import express from "express";
import "dotenv/config";

const app = express();

app.get("/v1/api/", (req, res) => {
  res.json({
    success: 1,
    message: "Rest is Working",
  });
});

app.post("/v1/api/user");

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is started on: ${PORT}`);
});
