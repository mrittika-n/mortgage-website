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

const splashScreen = document.querySelector(".splash-screen");
const leftContent = document.querySelector(".content");
const rightImage = document.querySelector(".image");

setTimeout(() => {
  leftContent.classList.remove("hidden");
  rightImage.classList.remove("hidden");
}, 5000);

// const rightImage = document.querySelector(".image");
// setTimeout(() => {
//     rightImage.classList.remove("hidden");
// }, 3000);

//   document.querySelector(".inner-container").classList.remove("hidden");
// const rightImage = document.querySelector(".content");
//   document.querySelector(".inner-container").classList.remove("hidden");
const showPass = document.getElementById("showPass");
const showPassBtn = function () {
  if (password.type === "password") {
    password.type = "text";
    showPass.textContent = "Hide";
  } else {
    password.type = "password";
    showPass.textContent = "Show";
  }
};
showPass.addEventListener("click", showPassBtn);

const saveBtn = document.querySelector("#submit");
const hideBtn = document.querySelector(".hide");
const loader = document.querySelector(".loader");
// /*
const laodAni = function () {
  loader.style.display = "block";

  saveBtn.value = "";
  setTimeout(() => {
    // saveBtn.value = "changes saved";
    // saveBtn.style = "background: #f1f5f4; color: #333; pointer-events: none";
  }, 2000);
};

saveBtn.addEventListener("click", laodAni);
// */
// saveBtn.onclick = function () {
//   loader.classList.remove(".hide");
//   this.setTimeout(() => {
//     saveBtn.textContent = "changes saved";
//     saveBtn.style = "background: #f1f5f4; color: #333; pointer-events: none";
//   }, 2000);
// };
