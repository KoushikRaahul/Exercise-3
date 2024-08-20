const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('static'));
app.get("/", (req, res) => {
    res.render("forms.ejs");  
});
app.listen(port, () => {
    console.log("Server is started on port " + port);
});
