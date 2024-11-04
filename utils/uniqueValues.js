export function getUniqueValues(jsonObj, key) {
  const valueCount = {};

  // Iterate through each object in the JSON array
  jsonObj.forEach(item => {
      if (item[key] !== undefined) {
          const value = item[key];
          valueCount[value] = (valueCount[value] || 0) + 1; // Increment count for this value
      }
  });

  return valueCount;
}
