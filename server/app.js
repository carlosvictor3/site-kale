const express = require("express");
const cors = require("cors");
const app = express();
const productsRoute = require("./routes/products");
const contactRoute = require("./routes/contact");

app.use(cors());
app.use(express.json());

app.use("/api/products", productsRoute);
app.use("/api/contact", contactRoute);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
