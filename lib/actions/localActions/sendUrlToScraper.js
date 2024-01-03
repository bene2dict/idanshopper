export default async function sendUrlToScraper(url) {
  console.log("Starting scraper");
  console.log(url);

  try {
    const response = await fetch("/api/scrapper/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: url }),
    });

    // if (!response.ok) {
    //   return "Failed to send data to Scrapper";
    // }

    const data = await response.json();

    // console.log(response);

    console.log("send url to scrapper", data);
    return data;
  } catch (error) {
    console.log("Error from send url to scrapper", error);
  }
}
