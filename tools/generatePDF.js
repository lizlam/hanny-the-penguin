const puppeteer = require('puppeteer');

const books = [
  'https://hanny-the-penguin.netlify.app/books/which-came-first'
]

const getPDF = async () => {
  return Promise.all(
    books.map( async (url,index) => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto(url, {waitUntil: 'networkidle2'});
      await page.pdf({
         path: 'which-came-first.pdf', 
         width: '6in', 
         height: '9in',
         margin: {top: '.5in', bottom: '.5in'},
         printBackground: true,
         headerTemplate: '<span class="pageNumber" />'
      });
      await browser.close();
    })
  )
}

getPDF();
