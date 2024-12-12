"use strict";

const formEl = document.getElementById("form");
const dayEl = document.getElementById("day");
const monthEl = document.getElementById("month");
const yearEl = document.getElementById("year");

const yearsEl = document.getElementById("years");
const monthsEl = document.getElementById("months");
const daysEl = document.getElementById("days");

const isLeapYear = function (year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    ? true
    : false;
};

const currentDate = new Date();
yearEl.attributes["max"].value = currentDate.getFullYear();

monthEl.addEventListener("change", function () {
  if (Number(monthEl.value) === 2)
    dayEl.attributes["max"].value = isLeapYear(Number(yearEl.value)) ? 29 : 28;
  else if (
    Number(monthEl.value) === 4 ||
    Number(monthEl.value) === 6 ||
    Number(monthEl.value) === 9 ||
    Number(monthEl.value) === 11
  )
    dayEl.attributes["max"].value = 30;
  else dayEl.attributes["max"].value = 31;
});

yearEl.addEventListener("change", function () {
  if (Number(monthEl.value) === 2)
    dayEl.attributes["max"].value = isLeapYear(Number(yearEl.value)) ? 29 : 28;
});

const userBirthDate = {
  month: 0,
  day: 0,
  year: 0,
};

const userAge = {
  years: 0,
  months: 0,
  days: 0,
};

const calculateUserAge = function () {
  const currentDay = currentDate.getUTCDate();
  const currentMonth = currentDate.getMonth() + 1;
};

const extractUserBirthDateAndDisplayUserAge = function () {
  event.preventDefault();
  userBirthDate.month = monthEl.value;
  userBirthDate.day = dayEl.value;
  userBirthDate.year = yearEl.value;
  calculateUserAge();
  yearsEl.textContent = userAge.years;
  monthsEl.textContent = userAge.months;
  daysEl.textContent = userAge.days;
};

formEl.addEventListener("submit", extractUserBirthDateAndDisplayUserAge);
