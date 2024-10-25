// Filters JSON keys based on a keyword
function filterJSON(jsonObj, keyword) {
  const result = {};
  for (const key in jsonObj) {
    if (key.includes(keyword)) {
      result[key] = jsonObj[key];
    }
  }
  return result;
}
