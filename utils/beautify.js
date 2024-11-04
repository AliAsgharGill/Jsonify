function beautifyJSON(jsonString) {
  try {
    // Parse the JSON string to an object
    const jsonData = JSON.parse(jsonString);

    // Beautify the JSON data
    const beautifiedJSON = JSON.stringify(jsonData, null, 2); // Indent with 2 spaces

    return beautifiedJSON; // Return the beautified JSON string
  } catch (error) {
    console.error("Invalid JSON:", error);
    return "Invalid JSON"; // Return error message for invalid JSON
  }
}
export default beautifyJSON;
