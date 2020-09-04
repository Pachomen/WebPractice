//DOM = DOCUMENT OBJECT MODEL
var third = document.firstElementChild.lastElementChild.lastElementChild.lastElementChild;
third.innerHTML = "Julian";

document.getElementsByClassName("li")[2];

document.getElementsByClassName("btn");

document.getElementById("title");

document.querySelector("li a")

document.querySelector("li.item") //Class in the same item

document.querySelector("#list a") //id in the element

document.querySelectorAll("#list .item") //list of items

document.querySelector("button").classList.add("invisible"); //Add class to an element

document.querySelector("button").classList.toggle("invisible"); //Verify if the class is in an element

document.querySelector("h1").textContent; //Only return the text inside de HTML

document.querySelector("h1").innerHTML; //Return the HTML code inside the element

document.querySelector("a").attributes; //Return the atrributes from an element

document.querySelector("a").setAttribute("href", "https://www.google.com"); //Set a new atrribute 
