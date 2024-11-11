import validateJSON from "./utils/validate.js";
import minifyJSON from "./utils/minify.js";
import countFrequency from "./utils/frequency.js";
import searchJSON from "./utils/search.js";
import replaceKey from "./utils/replace.js";
import { copyToClipboard, pasteFromClipboard } from "./utils/importExport.js";
import { getUniqueValues } from "./utils/uniqueValues.js"; // Import the function
import beautifyJSON from "./utils/beautify.js"; // Import the function
import showAlert from "./utils/alert.js";
import sampleData from "./assets/sampleDate.js";

// Beautify JSON
document.getElementById("beautify").addEventListener("click", () => {
  const input = document.getElementById("jsonInput").value; // Get JSON from input
  if (!input) {
    showAlert("Please Provide JSON Data", "error");
    return;
  }
  const output = beautifyJSON(input); // Beautify the JSON
  if (output === "Invalid JSON") {
    showAlert("Please Provide JSON Data", "error");
  } else {
    document.getElementById("output").textContent = output; // Display the beautified JSON
    showAlert("JSON Beautified Successfully", "success");
  }
});

// Validate JSON
document.getElementById("validate").addEventListener("click", () => {
  const input = document.getElementById("jsonInput").value;
  if (!input) {
    showAlert("Please Provide JSON Data for validation", "warning");
    return;
  }
  const result = validateJSON(input);
  if (result === "Invalid JSON: Unexpected end of JSON input") {
    showAlert("Please Provide JSON Data", "error");
  } else {
    // document.getElementById("output").textContent = result.message;
    showAlert("Valid JSON", "success");
  }
});

// Minify JSON
document.getElementById("minify").addEventListener("click", () => {
  const input = document.getElementById("jsonInput").value;
  if (!input) {
    showAlert("Please Provide JSON Data for minification", "error");
    return;
  }
  const output = minifyJSON(input);
  if (output === "Invalid JSON") {
    showAlert("Please Provide JSON Data", "error");
  } else {
    document.getElementById("output").textContent = output;
    showAlert("JSON Minified Successfully", "success");
  }
});

// Count Frequency of Values
document.getElementById("frequency").addEventListener("click", () => {
  const input = document.getElementById("jsonInput").value;
  if (!input) {
    showAlert("Please Provide JSON Data", "error");
    return;
  }
  try {
    const jsonObj = JSON.parse(input);
    const frequency = countFrequency(jsonObj);
    document.getElementById("output").textContent = JSON.stringify(
      frequency,
      null,
      2
    );
    showAlert("Frequency Counted Successfully", "success");
  } catch (e) {
    showAlert("Please Provide JSON Data", "error");
  }
});

// Search in JSON
document.getElementById("search").addEventListener("click", () => {
  const input = document.getElementById("jsonInput").value;
  if (!input) {
    showAlert("Please Provide JSON Data", "error");
    return;
  }
  const keyword = document.getElementById("searchKeyword").value; // Assuming you have an input for the search keyword
  if (!keyword) {
    showAlert("Please Enter Keyword to Search", "warning");
    return;
  }
  try {
    const jsonObj = JSON.parse(input);
    const results = searchJSON(jsonObj, keyword);
    document.getElementById("output").textContent = JSON.stringify(
      results,
      null,
      2
    );
    showAlert("Search Results Displayed Successfully", "success");
  } catch (e) {
    document.getElementById("output").textContent = "Invalid JSON";
    showAlert("Invalid JSON Data", "warning");
  }
});

// Replace Key in JSON
document.getElementById("replace").addEventListener("click", () => {
  const input = document.getElementById("jsonInput").value;
  if (!input) {
    showAlert("Please Provide JSON Data", "error");
    return;
  }
  const oldKey = document.getElementById("oldKey").value; // Input for old key
  if (!oldKey) {
    showAlert("Please Enter Old Key to Replace", "warning");
    return;
  }
  const newKey = document.getElementById("newKey").value; // Input for new key
  if (!newKey) {
    showAlert("Please Enter New Key to Replace", "warning");
    return;
  }
  try {
    const jsonObj = JSON.parse(input);
    const newJsonObj = replaceKey(jsonObj, oldKey, newKey);
    document.getElementById("output").textContent = JSON.stringify(
      newJsonObj,
      null,
      2
    );
    showAlert("Key Replaced Successfully", "success");
  } catch (e) {
    document.getElementById("output").textContent = "Invalid JSON";
  }
});

// Copy JSON to Clipboard
document.getElementById("copy").addEventListener("click", () => {
  const output = document.getElementById("output").textContent;
  const message = copyToClipboard(output);
  if (message === "Nothing to copy!") {
    showAlert(message, "warning");
    return;
  }
  showAlert(message, "success");
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
  if (!input) {
    showAlert("Please Provide JSON Data", "error");
    return;
  }
  const key = document.getElementById("uniqueKey").value; // Get the key from input
  if (!key) {
    showAlert("Please Enter a Key to get Unique Values", "warning");
    return;
  }
  try {
    const jsonObj = JSON.parse(input);
    const uniqueValues = getUniqueValues(jsonObj, key);
    const output = Object.entries(uniqueValues)
      .map(([value, count]) => `${value}: ${count}`)
      .join("\n");

    document.getElementById("output").textContent = output; // Display formatted output
    showAlert("Unique Values Counted Successfully", "success");
  } catch (e) {
    showAlert("Please Provide JSON Data", "error");
  }
});

document.getElementById("sample-data").addEventListener("click", () => {
  // Convert sample data to a beautified JSON string
  const beautifiedSampleData = JSON.stringify(sampleData, null, 2);

  // Insert the beautified JSON into the textarea
  document.getElementById("jsonInput").value = beautifiedSampleData;

  // Clear the output textarea
  document.getElementById("output").textContent = "";

  // Show alert with sample data message
  showAlert("Sample Data Imported", "success");
});

document.getElementById("clear-output").addEventListener("click", () => {
  document.getElementById("output").textContent = ""; // Clear the output
  showAlert("Output Cleared", "success");
});
