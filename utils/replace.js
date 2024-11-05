function replaceKey(jsonObj, oldKey, newKey) {
  const traverseAndReplace = (obj) => {
    if (Array.isArray(obj)) {
      return obj.map((item) => traverseAndReplace(item));
    } else if (typeof obj === "object" && obj !== null) {
      const newObj = {};
      for (const key in obj) {
        const value = obj[key];
        const finalKey = key === oldKey ? newKey : key;

        // Recursively apply the function to nested objects
        newObj[finalKey] = traverseAndReplace(value);
      }
      return newObj;
    }
    return obj; // Return primitive values as is
  };

  return traverseAndReplace(jsonObj);
}

export default replaceKey;
