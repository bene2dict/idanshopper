import { NextResponse } from "next/server";
import puppeteer from "puppeteer";
import * as cheerio from "cheerio";

export async function POST(req, res) {
  const data = await req.json();
  const { url, linkType } = data;
  console.log("Starting Scraping", url);
  console.log("Starting Scraping", linkType);

  let browser;
  try {
    browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto(url);
    await page.setViewport({ width: 1920, height: 1080 });

    const html = await page.content();

    const $ = cheerio.load(html);

    const parentDiv = $(
      "section.col12.-df.-d-co >  div.row.card._no-g.-fg1.-pas"
    );

    const sellerInfoParent = $("div.col4");

    const sellerName = sellerInfoParent
      .find("div.-pts section.card div.-hr.-pas > p.-m.-pbs")
      .text();

    await page.waitForSelector("div#imgs a img[data-src]", {
      visible: true,
    });

    const images = await page.evaluate(() => {
      const imageElements = document.querySelectorAll(
        "div#imgs a img[data-src]"
      ); // Use the selector from `image`
      console.log(imageElements);

      if (imageElements.length > 0) {
        return Array.from(imageElements).map((img) => img.dataset.src);
      } else {
        return imageElements;
      }
    });

    const textDivParent = parentDiv.find("div.col10");

    const title = textDivParent
      .find("div.-df.-j-bet > div.-pls.-prl h1.-fs20.-pts.-pbxs")
      .text();

    const brand = textDivParent.find("div.-phs > div.-pvxs").text();

    const priceParentElement = textDivParent.find("div.-hr.-mtxs.-pvs");

    const currentPrice = priceParentElement
      .find("div.df.-i-ctr.-fw-w > span")
      .text();

    const oldPrice = priceParentElement
      .find(
        "div.df.-i-ctr.-fw-w > div.-dif.-i-ctr > span.-tal.-gy5.-lthr.-fs16.-pvxs"
      )
      .text();

    const priceChangePercent = priceParentElement
      .find("div.df.-i-ctr.-fw-w span.bdg._dsct._dyn.-mls")
      .text();

    const product = [];

    // console.log("images", images);
    // console.log("title", title);
    // console.log("brand name", brand);
    // console.log("current Price", currentPrice);
    // console.log("Old Price", oldPrice);
    // console.log("price percentage change", priceChangePercent);

    // product.push(images);

    const items = {
      images,
      title,
      brand,
      sellerName,
      currentPrice,
      oldPrice,
      priceChangePercent,
      url,
      linkType,
    };

    product.push(items);

    // console.log("items ", items);

    return NextResponse.json(product);
  } catch (error) {
    console.log("error", error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// https://www.konga.com/product/sony-playstation-5-digital-edition-5842154

// https://www.jumia.com.ng/sony-playstation-5-console-standard-edition-257094579.html
