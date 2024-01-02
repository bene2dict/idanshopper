import { NextResponse } from "next/server";
import puppeteer from "puppeteer";
import * as cheerio from "cheerio";

export async function POST(req, res) {
  const data = await req.json();
  const { url } = data;
  console.log("Starting Scraping", url);

  try {
    let browser;
    browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto(url);

    await page.waitForSelector(".c6dfe_HidJc", { timeout: 7000 });

    const html = await page.content();

    const $ = cheerio.load(html);

    const imageDivParent = $(
      "div.d9549_IlL3h div._8f9c3_230YI._47f1e_1dZrT div.bf1a2_3kz7s"
    );

    const picture = imageDivParent
      .find("div._7f96a_3PgMp._7f231_24Ywf picture img")
      .attr("data-src");

    const textDivParent = $("div._680e2_KPkEz div.aadf4_2-w0o");

    const title = textDivParent.find("h4._24849_2Ymhg").text();

    const productCode = textDivParent
      .find("form div._31c33_NSdat div._97fc0_3W515.b50e0_1HOLM span")
      .text();

    const brandName = textDivParent
      .find("form div._31c33_NSdat div._71bb8_13C6j a span")
      .text();

    const priceParentElement = textDivParent.find(
      "div._3924b_1USC3 div._678e4_e6nqh"
    );

    const priceElement = textDivParent
      .find("div._3924b_1USC3 div._678e4_e6nqh")
      .text();

    const price_symbol = priceParentElement.find("span").text();
    let priceSymbol = price_symbol.length;

    const checkSymbol = priceSymbol.toString().includes("₦");
    if (checkSymbol) {
      priceSymbol = "₦";
    }

    // start from here
    let price = priceElement.split("₦").text();
    price = price[1];

    const merchantNumber = textDivParent
      .find("div._36c13_Xgo4y div.c291c_1zPM7 a#phoneNumberDisplay")
      .text();

    const merchantName = $(
      "div.b3a55_3tPmA#product-seller-band div._835ed_2kqSg a._70f3d_3BLwX"
    ).text();

    console.log("picture", picture);
    console.log("title", title);
    console.log("product code", productCode);
    console.log("brand name", brandName);
    console.log(priceSymbol);
    console.log("price", price);
    console.log("merchant name", merchantName);
    console.log("merchant number", merchantNumber);

    await browser.close();
  } catch (error) {
    console.log("error", error);
  }
}

// https://www.konga.com/product/sony-playstation-5-digital-edition-5842154
