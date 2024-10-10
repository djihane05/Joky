import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    const result = await axios.get("https://v2.jokeapi.dev/joke/Any");

    res.render("index.ejs", {
      delivery: result.data.delivery,
      setup: result.data.setup,
    });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.send("there is no joke");
  }
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
