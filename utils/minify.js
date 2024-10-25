// Minifies JSON data by removing whitespace
function minifyJSON(json) {
  try {
    return JSON.stringify(JSON.parse(json));
  } catch (e) {
    return "Invalid JSON";
  }
}

export default minifyJSON;
