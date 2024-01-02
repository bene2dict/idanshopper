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

    // const data = await response.json();
    console.log(response);
    // console.log(data);
  } catch (error) {
    console.log("Error", error);
  }
}
