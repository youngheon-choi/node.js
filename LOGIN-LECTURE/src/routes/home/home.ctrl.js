"use strict"

const home = (req, res) => {
    // 루트 요청이 들어오면 기능이 동작된다
    res.render("home/index");
}

const login = (req, res) => {
    // login 요청이 들어오면 기능이 동작된다
    res.render("home/login");
}

module.exports = {
    home,
    login
}