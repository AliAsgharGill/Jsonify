// Searches for a keyword in JSON keys and values
function searchJSON(jsonObj, keyword) {
  const result = [];
  const traverse = (obj, path = "") => {
    for (const key in obj) {
      const value = obj[key];
      const currentPath = path ? `${path}.${key}` : key;

      if (
        key.includes(keyword) ||
        (typeof value === "string" && value.includes(keyword))
      ) {
        result.push({ path: currentPath, value });
      }

      if (typeof value === "object") {
        traverse(value, currentPath);
      }
    }
  };

  traverse(jsonObj);
  return result;
}

export default searchJSON;
