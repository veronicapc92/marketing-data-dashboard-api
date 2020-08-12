const express = require("express");
const cors = require("cors");
const axios = require("axios");

const url =
  "https://europe-west2-mpx-tools-internal.cloudfunctions.net/frontend-mock-api/clients/";

const app = express();

app.use(express.json({ extended: false }));
app.use(cors());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));

app.get("/clients", async (req, res) => {
  try {
    const { data } = await axios.get(url);
    res.send(data);
  } catch (error) {
    console.log("get clients error", error);
  }
});

app.get("/clients/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const { data } = await axios.get(url + id);
    res.send(data);
  } catch (error) {
    console.log("get client error", error);
  }
});
