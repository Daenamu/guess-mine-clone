(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.handleMessageNotif=void 0;const handleMessageNotif=e=>{const{message:s,nickname:o}=e;console.log(`${o}: ${s}`)};exports.handleMessageNotif=handleMessageNotif;

},{}],2:[function(require,module,exports){
"use strict";var _chat=require("./chat");const socket=io("/");function sendMessage(e){socket.emit("newMessage",{message:e}),console.log(`You: ${e}`)}function setNickname(e){socket.emit("setNickname",{nickname:e})}socket.on("messageNotif",_chat.handleMessageNotif);

},{"./chat":1}]},{},[2])