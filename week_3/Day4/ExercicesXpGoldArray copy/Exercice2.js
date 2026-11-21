function keysAndValues(object) {
  const keys = Object.keys(object).sort();
  const values = keys.map((key) => object[key]);

  return [keys, values];
}