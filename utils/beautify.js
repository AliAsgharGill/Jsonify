// Beautifies JSON data
function beautifyJSON(json) {
  try {
    return JSON.stringify(JSON.parse(json), null, 2);
  } catch (e) {
    return "Invalid JSON";
  }
}
