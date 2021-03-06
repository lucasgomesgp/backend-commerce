const express = require("express");
const cors = require("cors");
const app = express();
const data = require("./database");
const PORT = process.env.PORT || 3001;

app.use(cors());
app.get("/items", (req, res) =>{
    res.json(data);
});

app.listen(PORT, () =>{
    console.info("Server running in PORT", PORT);
});
