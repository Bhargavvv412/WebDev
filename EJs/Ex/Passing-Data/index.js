import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/submit", (req, res) => {
    const numLatters = req.body["fname"].length + req.body["lname"].length;
    res.render("index.ejs", { numberOfLatters: numLatters });
})

app.listen(port, () => {
    console.log(`the app is running on ${port}`);
});
