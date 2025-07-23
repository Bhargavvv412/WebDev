import express from 'express';

const app = express();

const port = 3000;

app.get("/", (req, res) => {
    res.send("<H1> Hello </H1>");
});

app.post("/registar", (req, res) => {
    res.sendStatus(201);
});

app.put("/user/bhargav", (req, res) => {
    res.sendStatus(200);
})

app.patch("/user/bhargav", (req, res) => {
    res.sendStatus(200);
})

app.delete("/user/bhargav", (req, res) => {
    res.sendStatus(200);
})

app.listen(port, () => {
    console.log("server port is 3000");
})