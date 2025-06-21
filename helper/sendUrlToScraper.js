import { toast } from "react-toastify";

export default async function sendUrlToScraper(url) {
  console.log("Send url to scrapper", url);


  try {
    const response = await fetch(`http://localhost:8000/scrape`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });

    if (!response.ok) {
      toast.error("Failed action, scrapping page");
      return;
    }

    const data = await response.json();

    return data;
  } catch (error) {
    toast.error("Error sending URL to Scrapper");
    console.log("Error from send url to scrapper", error);
  }
}
