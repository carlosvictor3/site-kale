const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json([
        { id: 1, name: "Shampoo", price: "R$30,00" },
        { id: 2, name: "Condicionador", price: "R$35,00" }
    ]);
});

module.exports = router;
