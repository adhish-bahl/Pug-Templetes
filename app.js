const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const port = 80;

app.use("/static", express.static("static"));
app.use(express.urlencoded());

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

const db = mongoose.connection;
mongoose.connect('mongodb://localhost/adhish_dance', {useNewUrlParser: true, useUnifiedTopology: true});
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("We are connected sucessfully!");
});

const dancerSchema = new mongoose.Schema({
    name: String,
    number: Number,
    email: String,
    address: String,
    question: String
  });

  const Dancer = mongoose.model('Kitten', dancerSchema);

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
    email = req.body.email;
    address = req.body.address;
    question = req.body.question;
    let finalOutput = ` Name: ${cuname} \n Address: ${address}\n E-mail: ${email}\n Mobile Number: ${number} \n Question: ${question}`;
    fs.writeFileSync("output.txt", finalOutput);
    res.status(200).render("regform.pug");
});

app.listen(port, () => {
    console.log(`Server has been started at port ${port}`);
})

const silence = new Dancer({ name: ${cuname}, number: ${number}, email: ${email}, address: ${address}, question: ${questtion}});

silence.save(function (err, silence) {
    if (err) 
        return console.error(err);
    // silence.speak();
  });