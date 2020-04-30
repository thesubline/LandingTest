const express = require("express");

const app = express();

app.use(express.static(__dirname + "/views"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

require("./routes")(app);

app.listen(process.env.PORT, ()=>{
    console.log(`Running on port ${process.env.PORT}`);
});