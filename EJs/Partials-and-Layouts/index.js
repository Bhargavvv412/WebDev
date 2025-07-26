import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.get("/header", (req, res) => {
    res.render("header.ejs");
})

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
})

app.get("/about", (req, res) => {
    res.render("about.ejs");
})

app.listen(port, () => {
    console.log(`running on ${port}`);
});