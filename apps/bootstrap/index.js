// * in bakhsh module ha va config koli site ast 
const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);
const mySqlOptions = {
  host: "localhost",
  user: "root",
  password: "",
  database: "mysql",
  port: "3306",
};
const sessionStore = new MySQLStore(mySqlOptions);
module.exports = (app) => {
  app.engine("handlebars", exphbs.engine());
  app.set("view engine", "handlebars");
  app.set("views", path.join(__dirname, "../views"));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(express.static(path.join(__dirname, "../../public")));
  app.use(cookieParser());
  app.use(
    session({
      store: sessionStore,
      secret: "keyboard cat",
      resave: false,
      saveUninitialized: true,
      cookie: { secure: true, maxAge: 6000 },
    })
  );
};
