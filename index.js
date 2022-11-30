const express = require("express");
const app = express();

const morgan = require("morgan");

app.use(morgan("dev"));

app.use(express.json());

const supplies = {
    "office-chairs": 10,
    trashcans: 5,
    "office-desks": 6,
    "office-lamps": 18
};

app.get("/api/:item", (req, res) => {
    const queriedItem = req.params.item;
    res.send(supplies[queriedItem].toString());
});

app.listen(9000, () => console.log("working..."));