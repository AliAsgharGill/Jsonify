import validateJSON from "./utils/validate.js";
import minifyJSON from "./utils/minify.js";
import countFrequency from "./utils/frequency.js";
import searchJSON from "./utils/search.js";
import replaceKey from "./utils/replace.js";
import { copyToClipboard, pasteFromClipboard } from "./utils/importExport.js";
import { getUniqueValues } from "./utils/uniqueValues.js"; // Import the function
import beautifyJSON from "./utils/beautify.js"; // Import the function
import showAlert from "./utils/alert.js";

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
  const input = document.getElementById("jsonInput").value; // Get JSON from input
  const output = beautifyJSON(input); // Beautify the JSON
  if (output === "Invalid JSON") {
    showAlert("Invalid JSON");
  } else {
    document.getElementById("output").textContent = output; // Display the beautified JSON
  }
});

// Validate JSON
document.getElementById("validate").addEventListener("click", () => {
  const input = document.getElementById("jsonInput").value;
  const result = validateJSON(input);
  if (result === "Invalid JSON: Unexpected end of JSON input") {
    showAlert("Invalid JSON");
  } else {
    document.getElementById("output").textContent = result.message;
  }
});

// Minify JSON
document.getElementById("minify").addEventListener("click", () => {
  const input = document.getElementById("jsonInput").value;
  const output = minifyJSON(input);
  if (output === "Invalid JSON") {
    showAlert("Invalid JSON");
  } else {
    document.getElementById("output").textContent = output;
  }
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
    showAlert("Invalid JSON");
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
  showAlert(message);
});

document.getElementById("closeAlert").addEventListener("click", () => {
  document.getElementById("customAlert").style.display = "none";
});

// Close the alert when clicking outside of the alert box
window.addEventListener("click", (event) => {
  const customAlert = document.getElementById("customAlert");
  if (event.target === customAlert) {
    customAlert.style.display = "none";
  }
});

// Count Unique Values
document.getElementById("uniqueCount").addEventListener("click", () => {
  const input = document.getElementById("jsonInput").value;
  const key = document.getElementById("uniqueKey").value; // Get the key from input
  try {
    const jsonObj = JSON.parse(input);
    const uniqueValues = getUniqueValues(jsonObj, key);
    const output = Object.entries(uniqueValues)
      .map(([value, count]) => `${value}: ${count}`)
      .join("\n");

    document.getElementById("output").textContent = output; // Display formatted output
  } catch (e) {
    showAlert("Invalid JSON");
  }
});

// Validate JSON
document.getElementById("validate").addEventListener("click", () => {
  const input = document.getElementById("jsonInput").value;
  const result = validateJSON(input);
  document.getElementById("output").textContent = result.message;
  showAlert(result.message); // Show alert with validation message
  if (!result.isValid) {
    showAlert("Invalid JSON");
  }
});

// Repeat this for all instances where "Invalid JSON" is shown in the code
