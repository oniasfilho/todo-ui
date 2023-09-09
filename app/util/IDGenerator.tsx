export const IDGenerator = (() => {
  let currentID = 0;

  const getNextID = () => {
    return currentID++;
  };

  return {
    getNextID
  };
})();