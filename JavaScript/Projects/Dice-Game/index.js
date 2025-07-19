var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var changeSource1 = "images/" + "dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", changeSource1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var changeSource2 = "images/" + "dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", changeSource2);