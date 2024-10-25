// Replaces all occurrences of a specified key in a JSON object
function replaceKey(jsonObj, oldKey, newKey) {
  const result = {};

  const traverseAndReplace = (obj) => {
    const newObj = {};
    for (const key in obj) {
      const value = obj[key];
      const finalKey = key === oldKey ? newKey : key;

      if (typeof value === "object" && !Array.isArray(value)) {
        newObj[finalKey] = traverseAndReplace(value);
      } else {
        newObj[finalKey] = value;
      }
    }
    return newObj;
  };

  return traverseAndReplace(jsonObj);
}

export default replaceKey;
