// Copies JSON data to the clipboard
function copyToClipboard(json) {
  if (!json) {
    return "Nothing to copy!";
  }
  navigator.clipboard.writeText(JSON.stringify(json, null, 2));
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
