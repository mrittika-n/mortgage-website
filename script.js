"use strict";
const enrollBtn = document.querySelector(".enroll-btn");
const enrollBox = document.querySelector(".enroll-box");

enrollBtn.addEventListener("mouseover", function () {
  enrollBox.style.display = "block";
});
enrollBtn.addEventListener("mouseout", function () {
  enrollBox.style.display = "none";
});

const username = document.querySelector("#username");
const password = document.querySelector("#password");
const loginBtn = document.querySelector("#submit");

const activeButton = function () {
  if (username.value && password.value) {
    loginBtn.style.backgroundColor = "#6a9f01";
  } else loginBtn.style.backgroundColor = "#c4c4c4";
};

username.addEventListener("keyup", activeButton);
password.addEventListener("keyup", activeButton);

// setTimeout(() => {
//   document.querySelector(".inner-container").classList.toggle(".hidden");
// }, 6000);
