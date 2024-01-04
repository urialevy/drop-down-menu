import "./style.css";

const navMenu = document.getElementById("menu");
const menuBtn = document.getElementById("menubtn");
menuBtn.addEventListener("mouseover", function () {
  navMenu.querySelector("ul").style.display = "contents";
});
document.getElementById("menu").addEventListener("mouseleave", function () {
  navMenu.querySelector("ul").style.display = "none";
});
