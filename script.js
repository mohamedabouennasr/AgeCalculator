"use strict";

const formEl = document.getElementById("form");
const dayEl = document.getElementById("day");
const monthEl = document.getElementById("month");
const yearEl = document.getElementById("year");

const yearsEl = document.getElementById("years");
const monthsEl = document.getElementById("months");
const daysEl = document.getElementById("days");

const currentYear = new Date();
yearEl.attributes["max"].value = currentYear.getFullYear();

const userBirthDate = {
  day: 0,
  month: 0,
  year: 0,
};

const userAge = {
  days: 0,
  months: 0,
  years: 0,
};

const calculateUserAge = function () {};

calculateUserAge();

const extractUserBirthDateAndDisplayUserAge = function () {
  event.preventDefault();
  userBirthDate.day = dayEl.value;
  userBirthDate.month = monthEl.value;
  userBirthDate.year = yearEl.value;
  yearsEl.textContent = userAge.years;
  monthsEl.textContent = userAge.months;
  daysEl.textContent = userAge.days;
};

formEl.addEventListener("submit", extractUserBirthDateAndDisplayUserAge);
