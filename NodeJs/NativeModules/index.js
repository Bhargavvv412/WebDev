const fs = require("fs");

fs.writeFile("message.txt", "hello", (err) => {
    if (err) throw err;
    console.log("saved...");
});

fs.readFile("./message.txt", "utf-8", (err, data) => {
    console.log(data);
});