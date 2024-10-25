// Counts the frequency of each value in a JSON object
function countFrequency(jsonObj) {
  const frequency = {};
  const traverse = (obj) => {
    for (const key in obj) {
      const value = obj[key];
      if (typeof value === "object") {
        traverse(value);
      } else {
        frequency[value] = (frequency[value] || 0) + 1;
      }
    }
  };

  traverse(jsonObj);
  return frequency;
}

export default countFrequency;
