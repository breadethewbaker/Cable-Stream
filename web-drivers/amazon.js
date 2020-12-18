const {Builder, By, Capabilities, Key, until} = require('selenium-webdriver');

const Title = "Pineapple Express"

//https://www.amazon.com/s?k=the+boys&i=prime-instant-video&ref=nb_sb_noss_1
exports.playMovie = function (headless, title=Title) {
  newTitle = "";
  for (let i=0;i<title.length;i++) {
    if (title[i] == ' ') newTitle += '+';
    else newTitle += title[i];
  }
  headless.get('https://www.amazon.com/s?k='+newTitle+'&i=prime-instant-video&ref=nb_sb_noss');//'https://www.amazon.com/Prime-Video/b?ie=UTF8&node=2676882011');
  //driver.findElement(By.name('field-keywords')).sendKeys(title, Key.RETURN);
  headless.wait(until.titleIs('Amazon.com : '+title), 20000).then(()=>{
    headless.findElement(By.partialLinkText(title)).click();
  });
  headless.wait(until.titleIs('Watch '+title+' | Prime Video'), 20000).then(()=>{
    headless.findElement(By.partialLinkText('Trailer')).click();
    console.log(headless.getCurrentUrl());
  });
}
