const checkLink = (searchPrompt) => {
  if (searchPrompt.includes("jumia")) {
    console.log(`The text contains "jumia": ${searchPrompt.match(/jumia/)[0]}`); // Extracts "jumia"
    return {
      message: "jumia",
    };
  } else if (searchPrompt.includes("konga")) {
    console.log(`The text contains "konga": ${searchPrompt.match(/konga/)[0]}`); // Extracts "konga"
    return {
      message: "konga",
    };
  } else {
    console.log("The text does not contain 'jumia' or 'konga'.");
    return {
      message: "Not Jumia or Konga",
    };
  }
};

export default checkLink;
