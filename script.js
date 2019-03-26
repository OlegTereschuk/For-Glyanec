"use strict"

let menuBtn = document.querySelector(".menu-button");
let hideMenu = document.querySelector(".hide-menu");

menuBtn.addEventListener("click", function () {
	hideMenu.classList.toggle('hide-menu-show');
});