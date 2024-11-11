// Copies JSON data to the clipboard
function copyToClipboard(json) {
  if (!json) {
    return "Nothing to copy!";
  }

  // Check if json is already a string. If so, parse it first to avoid double-stringification
  let jsonData = typeof json === "string" ? JSON.parse(json) : json;

  // Convert the JSON object to a formatted string
  const jsonString = JSON.stringify(jsonData, null, 2);

  // Write the stringified JSON to the clipboard
  navigator.clipboard.writeText(jsonString);
  return "Copied to clipboard!";
}

// Parses JSON from clipboard text
async function pasteFromClipboard() {
  try {
    // Read text from the clipboard
    const text = await navigator.clipboard.readText();

    // Attempt to parse the text as JSON
    return JSON.parse(text);
  } catch (e) {
    return null; // Return null on error
  }
}

export { copyToClipboard, pasteFromClipboard };
