const puppeteer = require('puppeteer');

const books = [
  //'https://hanny-the-penguin.netlify.app/books/which-came-first'
  'http://localhost:3000/books/speak-butterfly'
]

const getPDF = async () => {
  return Promise.all(
    books.map( async (url,index) => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto(url, {waitUntil: 'networkidle2'});
      // remove navigation
      await page.evaluate(sel => {
        let element = document.querySelector(sel);
        element.remove();
      },'.mobile-nav')
      await page.evaluate(sel => {
        let byline = document.createElement('div');
        byline.innerHTML = "By Elizabeth Rich";
        let el = document.querySelector(sel);
        el.insertAdjacentElement('afterend', byline);
      },'h1')
      await page.pdf({
         //path: 'which-came-first.pdf', 
         path: 'speak-butterfly.pdf', 
         width: '6in', 
         height: '9in',
         //margin: {top: '.5in', bottom: '.5in'},
         margin: {top: '.5in', right: '.25in', bottom: '.5in', left: '.25in'},
         printBackground: true,
         pageRanges: '1-5'
      });
      await browser.close();
    })
  )
}

getPDF();
