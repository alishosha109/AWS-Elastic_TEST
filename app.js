const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Welcome");
});

const port = process.env.port || 4000;
app.listen(port, () => {
    console.log("Wazzappppp");
});