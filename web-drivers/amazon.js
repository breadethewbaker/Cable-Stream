const {Builder, By, Capabilities, Key, until} = require('selenium-webdriver');

const driver = new Builder()
  .forBrowser('chrome')
  .build();
//https://www.amazon.com/s?k=the+boys&i=prime-instant-video&ref=nb_sb_noss_1
driver.get('https://www.amazon.com/Prime-Video/b?ie=UTF8&node=2676882011');
driver.findElement(By.name('field-keywords')).sendKeys('twilight', Key.RETURN);
driver.wait(until.titleIs('Amazon.com : twilight'), 20000).then(()=>{
  driver.findElement(By.linkText('Twilight')).click();
});
driver.wait(until.titleIs('Watch Twilight | Prime Video'), 20000).then(()=>{
  driver.findElement(By.partialLinkText('Trailer')).click();
});
