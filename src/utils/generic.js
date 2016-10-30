

/**
* Sequential number generator for unique IDs.
* @return {number}
*/
export const nextUniqueId = (() => {
  let uid = 0;
  return () => uid++;
})();
