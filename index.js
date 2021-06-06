const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const port = 80;

app.use("/static", express.static("static"));
app.use(express.urlencoded());

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    let param = {title: "Home"};
    res.status(200).render("templete.pug", param);
});

// app.post("/register", (req, res) => {
// });

app.listen(port, () => {
    console.log(`Server has been started at port ${port}`);
})