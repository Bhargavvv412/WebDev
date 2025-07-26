import express from "express";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const data = {
        title: "EJs Tags",
        seconds: new Date().getSeconds(),
        items: ["apple", "cheery", "mango"],
        htmlcontent: "<h1>hello this html contenect</h1>"
    };
    res.render("index.ejs", data);
});

app.listen(port, () => {
    console.log(`server is running pn ${port}`);
});