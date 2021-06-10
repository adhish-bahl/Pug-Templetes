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
    res.status(200).render("index.pug", param);
});

app.get("/register", (req, res) => {
    let param = {title: "Register"};
    res.status(200).render("regForm.pug", param);
});

app.post("/register", (req, res) => {
    cuname = req.body.name;
    number = req.body.mobile;
    email = req.body.address;
    address = req.body.locality;
    question = req.body.question;
    // let finalOutput = ` Name: ${cuname} \n Age: ${age}\n Gender: ${gender}\n Locality: ${locality}\n E-mail: ${email}\n Mobile Number: ${number}`;
    // fs.writeFileSync("output.txt", finalOutput);
    res.status(200).render("regform.pug");
});

app.listen(port, () => {
    console.log(`Server has been started at port ${port}`);
})