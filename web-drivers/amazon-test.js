const {Builder} = require('selenium-webdriver');
const amazon = require('./amazon.js');

const driver = new Builder()
  .forBrowser('chrome')
  .build();

amazon.playMovie(driver, "Twilight");
