const puppeteer = require('puppeteer');

const projects = [
  'https://angel-chess-project.now.sh',
  'https://coffee-not-pods.vercel.app',
  'https://postcard-challenge.vercel.app',
  'https://hanny-the-penguin.netlify.app'
]

const getPreview = async () => {
  return Promise.all(
    projects.map( async (url,index) => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto(url);
      await page.screenshot({path:`${index}.png`});
      await browser.close();
    })
  )
}

getPreview();
