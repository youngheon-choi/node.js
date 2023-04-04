"use strict"

const output = {
    home : (req, res) => {
        // 루트 요청이 들어오면 기능이 동작된다
        res.render("home/index");
    },
     login : (req, res) => {
        // login 요청이 들어오면 기능이 동작된다
        res.render("home/login");
    }
}

const process = {
    login : (req, res) => {
        console.log(req.body);
    }
}

module.exports = {
    output,
    process
}