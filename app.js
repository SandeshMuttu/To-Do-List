const express = require("express");
const bodyParser = require("body-parser");
//to include date.js in this file
const date = require(__dirname + "/date.js");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

app.set('view engine', 'ejs');  //-->To use ejs in our code

app.get("/", function (req, res) {

    // var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    // var today = new Date();
    // var currentday = today.getDay();
    // var dayName=days[today.getDay()];
    // var day = "";

    // if (currentday === 6 || currentday === 0) {
    //     day = dayName;
    // }
    // else {
    //     day = dayName;
    // }
    // res.render("list", { kindofDay: day });

    let day = date.getDate();//---to call date module/file it returns date value in date.js

    // let day = date.getDay();---to call date module/file it returns day value in date.js

    console.log(day);
    res.render("list", { listTitle: day, newListItem: items });

});

app.post("/", function (req, res) {

    let item = req.body.newItem;
    let data = req.body.list;

    console.log(data);

    if (req.body.list === "Work") {

        workItems.push(item);
        res.redirect("/work");
    }
    else {

        items.push(item);

        res.redirect("/");
    }

});

app.get("/work", function (req, res) {

    res.render("list", { listTitle: "Work List", newListItem: workItems });

});


app.listen(3000, function () {

    console.log("Server started on port 3000");

});