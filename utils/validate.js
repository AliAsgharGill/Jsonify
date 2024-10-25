// Validates JSON data by attempting to parse it
function validateJSON(json) {
  try {
    JSON.parse(json);
    return { isValid: true, message: "Valid JSON!" };
  } catch (e) {
    return { isValid: false, message: "Invalid JSON: " + e.message };
  }
}

export default validateJSON;
