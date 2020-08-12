(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";require("./login");

},{"./login":2}],2:[function(require,module,exports){
"use strict";const body=document.querySelector("body"),loginForm=document.getElementById("jsLogin"),NICKNAME="nickname",LOGGED_OUT="loggedOut",LOGGED_IN="loggedIn",nickname=localStorage.getItem(NICKNAME),logIn=e=>{io("/").emit("setNickname",{nickname:e})};null===nickname?body.className=LOGGED_OUT:(body.className=LOGGED_IN,logIn(nickname));const handleFormSubmit=e=>{e.preventDefault();const n=loginForm.querySelector("input"),{value:o}=n;n.value="",localStorage.setItem(NICKNAME,o),body.className=LOGGED_IN,logIn(o)};loginForm&&loginForm.addEventListener("submit",handleFormSubmit);

},{}]},{},[1])