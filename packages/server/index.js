const express = require("express");
const merchRouter = require("./service/merchController");
const musicRouter = require("./service/musicController");
require("./data/DataContext");
const app = express();
app.use(express.json());


app.use("/merchs", merchRouter);
app.use("/musics", musicRouter);

app.listen(4000);
