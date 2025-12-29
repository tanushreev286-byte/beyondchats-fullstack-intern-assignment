
const express = require("express");
const mongoose = require("mongoose");
const Article = require("./models/Article");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/beyondchats");

app.post("/articles", async (req, res) => {
  const article = await Article.create(req.body);
  res.json(article);
});

app.get("/articles", async (req, res) => {
  const articles = await Article.find();
  res.json(articles);
});

app.put("/articles/:id", async (req, res) => {
  const article = await Article.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(article);
});

app.delete("/articles/:id", async (req, res) => {
  await Article.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
});

app.listen(5000, () => {
  console.log("Backend server running on port 5000");
});
