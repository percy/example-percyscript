const PercyScript = require('@percy/script');
const httpServer = require('http-server');
const PORT = process.env.PORT_NUMBER || 8000;
const TEST_URL = `http://localhost:${PORT}`;



// A script to navigate our app and take snapshots with Percy.
PercyScript.run(async (page, percySnapshot) => {
  let server = httpServer.createServer();
  server.listen(PORT);

    console.log(`Server started at ${TEST_URL}`);

    function delay(time) {
        return new Promise(function (resolve) {
            setTimeout(resolve, time)
        });
    }

await page.goto(TEST_URL);
await percySnapshot('Cancer Center Home Page');





await page.setViewport( { 'width' : 1024, 'height' : 1600 } );
await page.click('#navbarSupportedContent > ul.navbar-nav.mega-menu > li:nth-child(1) > a');
await percySnapshot('Cancer-Types');



    //delay(60000);

    await page.hover('#navbarSupportedContent > ul.navbar-nav.mega-menu > li:nth-child(1) > a')
    await page.click('#navbarSupportedContent > ul.navbar-nav.mega-menu > li:nth-child(1) > div > div:nth-child(1) > ul > li:nth-child(1) > a');   

await percySnapshot('Breast Cancer Page');


    //await page.setViewport({ 'width': 1024, 'height': 1600 });
    //await page.$x('//*[@id="navbarSupportedContent"]/ul[1]/li[1]/div/div[1]/ul/li[1]/a');
   // const elements = await page.$x('//*[@id="navbarSupportedContent"]/ul[1]/li[1]/div/div[1]/ul/li[1]/a');
    //await elements[0].click();

//await percySnapshot('Breast Cancer');





  // Enter a new to-do.
  //await page.type('.new-todo', 'A really important todo');
  //await page.keyboard.press('Enter');
  //await percySnapshot('TodoMVC with a new todo', { widths: [768, 992, 1200] });
  server.close();
});
