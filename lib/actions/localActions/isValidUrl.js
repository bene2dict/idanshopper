export default function isValidUrl(url) {
  const urlRegex =
    /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;

  const checkUrl = urlRegex.test(url);
  if (checkUrl) {
    return true;
  }

  return false;
}
