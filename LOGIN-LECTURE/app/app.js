"use strict";

const PORT = 3000;

// body 파싱
const bodyParser = require("body-parser");

// "npm i express -s" 후에 express를 가져올 수 있다.
const express = require("express");
const app = express();

// 루트가 전달되면 home변수에 담긴 정보로 이동시킨다(index.js)
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", __dirname + "/src/views") // views에서 화면을 관리한다고 명시합니다.
app.set("view engine", "ejs"); // view(html)코드를 어떤 엔진으로 해석할지 명시합니다.

// 정적 경로 추가
app.use(express.static(`${__dirname}/src/public`));

// body-parser가 JSON데이터를 파싱할 수 있도록 미들웨어 등록
app.use(bodyParser.json());
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({extended : true}));

// 라우터 연결 = use는 미들웨어를 등록하는 메소드
app.use("/", home);

module.exports = app;