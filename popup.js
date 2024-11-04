// import beautifyJSON from "./utils/beautify.js";
import validateJSON from "./utils/validate.js";
import minifyJSON from "./utils/minify.js";
import countFrequency from "./utils/frequency.js";
import searchJSON from "./utils/search.js";
import replaceKey from "./utils/replace.js";
import { copyToClipboard, pasteFromClipboard } from "./utils/importExport.js";
import { getUniqueValues } from "./utils/uniqueValues.js"; // Import the function

// Existing code...

document.getElementById("uniqueCount").addEventListener("click", () => {
  const input = document.getElementById("jsonInput").value;
  const key = document.getElementById("uniqueKey").value; // Get the key from input
  try {
    const jsonObj = JSON.parse(input);
    const uniqueValues = getUniqueValues(jsonObj, key);

    // Format output as required
    const output = Object.entries(uniqueValues)
      .map(([value, count]) => `${value}: ${count}`)
      .join("\n");

    document.getElementById("output").textContent = output; // Display formatted output
  } catch (e) {
    showAlert("Invalid JSON");
  }
});

// Beautify JSON
document.getElementById("beautify").addEventListener("click", () => {
  const input = document.getElementById("jsonInput").value;
  const output = beautifyJSON(input);
  document.getElementById("output").textContent = output;
});

// Validate JSON
document.getElementById("validate").addEventListener("click", () => {
  const input = document.getElementById("jsonInput").value;
  const result = validateJSON(input);
  document.getElementById("output").textContent = result.message;
});

// Minify JSON
document.getElementById("minify").addEventListener("click", () => {
  const input = document.getElementById("jsonInput").value;
  const output = minifyJSON(input);
  document.getElementById("output").textContent = output;
});

// Count Frequency of Values
document.getElementById("frequency").addEventListener("click", () => {
  const input = document.getElementById("jsonInput").value;
  try {
    const jsonObj = JSON.parse(input);
    const frequency = countFrequency(jsonObj);
    document.getElementById("output").textContent = JSON.stringify(
      frequency,
      null,
      2
    );
  } catch (e) {
    document.getElementById("output").textContent = "Invalid JSON";
  }
});

// Search in JSON
document.getElementById("search").addEventListener("click", () => {
  const input = document.getElementById("jsonInput").value;
  const keyword = document.getElementById("searchKeyword").value; // Assuming you have an input for the search keyword
  try {
    const jsonObj = JSON.parse(input);
    const results = searchJSON(jsonObj, keyword);
    document.getElementById("output").textContent = JSON.stringify(
      results,
      null,
      2
    );
  } catch (e) {
    document.getElementById("output").textContent = "Invalid JSON";
  }
});

// Replace Key in JSON
document.getElementById("replace").addEventListener("click", () => {
  const input = document.getElementById("jsonInput").value;
  const oldKey = document.getElementById("oldKey").value; // Input for old key
  const newKey = document.getElementById("newKey").value; // Input for new key
  try {
    const jsonObj = JSON.parse(input);
    const newJsonObj = replaceKey(jsonObj, oldKey, newKey);
    document.getElementById("output").textContent = JSON.stringify(
      newJsonObj,
      null,
      2
    );
  } catch (e) {
    document.getElementById("output").textContent = "Invalid JSON";
  }
});

// Copy JSON to Clipboard
document.getElementById("copy").addEventListener("click", () => {
  const output = document.getElementById("output").textContent;
  const message = copyToClipboard(output);
  alert(message);
});

// Paste JSON from Clipboard
document.getElementById("paste").addEventListener("click", async () => {
  const message = await pasteFromClipboard();
  document.getElementById("jsonInput").value = JSON.stringify(message, null, 2);
});
