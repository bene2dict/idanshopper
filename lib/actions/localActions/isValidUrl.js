export default function isValidUrl(url) {
  try {
    const parsedUrl = new URL(url);
    const isValidHostname =
      parsedUrl.hostname.includes("jumia.com") ||
      parsedUrl.hostname.includes("konga.com");

    return isValidHostname;
  } catch (error) {
    return false;
  }
}
