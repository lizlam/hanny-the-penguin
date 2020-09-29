const puppeteer = require("puppeteer");

const books = [
  //"http://localhost:3000/books/which-came-first",
  "http://localhost:3000/books/what-cheers",
  //"http://localhost:3000/books/speak-butterfly",
];

const getPDF = async () => {
  return Promise.all(
    books.map(async (url, index) => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto(url, { waitUntil: "networkidle2" });

      // remove navigation
      await page.evaluate((sel) => {
        let element = document.querySelector(sel);
        element.remove();
      }, ".mobile-nav");

      // Add author information
      await page.evaluate((sel) => {
        let byline = document.createElement("div");
        byline.innerHTML = "By Elizabeth Rich";
        let el = document.querySelector(sel);
        el.insertAdjacentElement("afterend", byline);
      }, "h1");

      // Add End page
      await page.evaluate((sel) => {
        let theEnd = document.createElement("h1");
        theEnd.innerHTML = "The End";
        let el = document.querySelector(sel);
        // vh will change depending on story
        //el.style.height = "45vh"; // butterfly
        el.style.height = "27vh"; // which-came-first
        el.style.width = "100%";
        el.style.background = "#ffffff8";
        el.insertAdjacentElement("afterend", theEnd);
      }, "#end");

      await page.evaluate((sel) => {
        let el = document.querySelector(sel);
        let afterTheEnd = document.createElement("div");
        // vh is relative to above vh, must add up to 90
        //afterTheEnd.style.height = "45vh"; // butterfly
        afterTheEnd.style.height = "63vh"; // which-came-first
        afterTheEnd.style.width = "100%";
        afterTheEnd.style.background = "#ffffff8";
        el.insertAdjacentElement("afterend", afterTheEnd);
      }, "#afterEnd");

      // Get file name
      const startIndex = url.indexOf("books/") + 6;
      const endIndex = url.length;
      const pdfTitle = url.substring(startIndex, endIndex) + ".pdf";

      // Create PDF
      await page.pdf({
        path: pdfTitle,
        width: "6in",
        height: "9in",
        //margin: {top: '.5in', bottom: '.5in'},
        margin: { top: ".5in", right: ".25in", bottom: ".5in", left: ".25in" },
        printBackground: true,
        pageRanges: "1-6",
      });
      await browser.close();
    })
  );
};

getPDF();
