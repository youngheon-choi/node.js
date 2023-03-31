"use strict";

// "npm i express -s" 후에 express를 가져올 수 있다.
const express = require("express");
const app = express();햣 

app.get("/", (req, res) => {
    // 루트 요청이 들어오면 기능이 동작된다
    res.send("여기는 루트입니다.");
});

app.get("/login", (req, res) => {
    // login 요청이 들어오면 기능이 동작된다
    res.send("여기는 로그인 화면입니다.");
});

app.listen(3000, () => {
    console.log("서버 가동");
});