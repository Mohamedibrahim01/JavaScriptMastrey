"use strict";
const addbtn = document.querySelector(".add-btn");
const subbtn = document.querySelector(".subtract-btn");
const resetbtn = document.querySelector(".reset-btn");
const handlecount = document.querySelector(".countscore");

let count = 0;

addbtn.addEventListener("click", function () {
  count++;
  handlecount.textContent = count;
});

subbtn.addEventListener("click", function () {
  count--;
  handlecount.textContent = count;
});

resetbtn.addEventListener("click", function () {
  count = 0;
  handlecount.textContent = 0;
});
