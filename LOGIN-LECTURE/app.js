/*
express가 없을 때 서버를 여는 방법 

const http = require("http");
const app =  http.createServer((res, res) => {
    res.writeHead(200, {
        "Content-Type" : "text/html; charset=utf-8"
    });

    if(req.url === "/"){
        console.log("여기는 루트입니다.");
    }else if(req.url === "/login"){
        console.log("여기는 로그인 화면입니다.");
    }
});

app.listen(3000, () => {
    console.log("express없이 서버 여는 방법");
});
*/



"use strict";

const PORT = 3000;

// "npm i express -s" 후에 express를 가져올 수 있다.
const express = require("express");
const app = express();

// 라우터 연결 = use는 미들웨어를 등록하는 메소드
// 루트가 전달되면 home변수에 담긴 정보로 이동시킨다(index.js)
const home = require("./routes/home/index");
app.use("/", home);

// 앱 세팅
app.set("views", "./views"); // views에서 화면을 관리한다고 명시합니다.
app.set("view engine", "ejs"); // view(html)코드를 어떤 엔진으로 해석할지 명시합니다.

app.listen(PORT, () => {
    console.log("서버 가동");
});