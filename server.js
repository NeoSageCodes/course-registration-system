const express = require("express");
const router = require("./router/router");
const logger = require("./middleware/logger");

const app = express();
const port = 2312;

app.use(express.json());
app.use(logger);   
app.use(router);

app.listen(port, () => {
    console.log(`Course Registration Server Running at PORT :${port}`);
});