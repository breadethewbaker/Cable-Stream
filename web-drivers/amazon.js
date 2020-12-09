const {Builder, By, Capabilities, Key, until} = require('selenium-webdriver');

const title = "Pineapple Express"

const driver = new Builder()
  .forBrowser('chrome')
  .build();
//https://www.amazon.com/s?k=the+boys&i=prime-instant-video&ref=nb_sb_noss_1
driver.get('https://www.amazon.com/Prime-Video/b?ie=UTF8&node=2676882011');
driver.findElement(By.name('field-keywords')).sendKeys(title, Key.RETURN);
driver.wait(until.titleIs('Amazon.com : '+title), 20000).then(()=>{
  driver.findElement(By.linkText(title)).click();
});
driver.wait(until.titleIs('Watch '+title+' | Prime Video'), 20000).then(()=>{
  driver.findElement(By.partialLinkText('Trailer')).click();
});
