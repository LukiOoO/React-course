// var -> function
// let -> block
// const -> block

// function sayHello() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   console.log(i);
// }

// sayHello();

// const x = 1;
// x = 2;

// const person = {
//   name: "luki",
//   walk() {
//     console.log(this);
//   },
//   talk() {},
// };

// person.walk();
// // person.talk();
// // person.name = "";

// // const targetMember = "name";
// // person["name"] = "cos";
// // person[targetMember.value] = "lukiooo";

// const walk = person.walk.bind(person);
// //console.log(walk);
// walk();

// const square = function (number) {
//   return number * number;
// };

// const square = (number) => number * number;
// console.log(square(5));

// const jobs = [
//   { id: 1, isActive: true },
//   { id: 2, isActive: true },
//   { id: 3, isActive: false },
// ];

// const acticeJobs = jobs.filter(function (job) {
//   return job.isActive;
// });

// const acticeJobs = jobs.filter((job) => job.isActive);

// const person = {
//   talk() {
//     var self = this;
//     setTimeout(() => {
//       console.log("this", this);
//     }, 1000);
//   },
// };

// person.talk();

// const colors = ["red", "green", "blue"];
// const items = colors.map((color) => `<li>${color}</li>`);
// console.log(items);

// const addres = {
//   street: "",
//   city: "",
//   country: "",
// };

// const street = addres.street;
// const city = addres.city;
// const country = addres.country;

// const { street: st, city, country } = addres;

// const first = [1, 2, 3];
// const second = [4, 5, 6];

// // const combined1 = first.concat(second);
// // const combined2 = [...first, "a", ...second, "b"];

// // console.log(combined1);
// // console.log(combined2);

// const clone = [...first];
// console.log(first);
// console.log(clone);

// const first = { name: "luki" };
// const second = { job: "OOOO" };
// const combined = { ...first, ...second, location: "London" };
// console.log(combined);

// const clone = { ...first };

import { Component } from "react";
import Teacher, { promote } from "./teacher";
//import React, { Component } from "react";

// Default -> impoert .. from "./"
// Named -> import {....} form "./"

const teacher = new Teacher("Luki", "Msc");
teacher.teach();
