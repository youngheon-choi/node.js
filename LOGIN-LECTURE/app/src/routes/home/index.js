/*
라우터는 따로 보관하는게 좋다
*/

"use strict";

// "npm i express -s" 후에 express를 가져올 수 있다.
const express = require("express");
const router = express();

// controller import
const ctrl = require("./home.ctrl");

router.get("/", ctrl.home);

router.get("/login", ctrl.login);

// app.js에서 라우터를 사용할 수 있도록 내보내줘야한다
module.exports = router;