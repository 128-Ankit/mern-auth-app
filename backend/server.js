const express = require("express");
const app = express();

const PORT = 4000;

app.use("/", (req, res) => {
    res.send("Server started!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}.`);
});