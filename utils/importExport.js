// Copies JSON data to the clipboard
function copyToClipboard(json) {
  navigator.clipboard.writeText(JSON.stringify(json, null, 2));
  return "Copied to clipboard!";
}

// Parses JSON from clipboard text
async function pasteFromClipboard() {
  try {
    const text = await navigator.clipboard.readText();
    return JSON.parse(text);
  } catch (e) {
    return "Error parsing JSON from clipboard";
  }
}

export { copyToClipboard, pasteFromClipboard };
