const products = require('./products.js');

function findProductByName(productName) {
  const foundProduct = products.find(
    product => product.name.toLowerCase() === productName.toLowerCase()
  );

  if (foundProduct) {
    console.log(`Product found:`);
    console.log(`  Name: ${foundProduct.name}`);
    console.log(`  Price: $${foundProduct.price}`);
    console.log(`  Category: ${foundProduct.category}`);
  } else {
    console.log(`Product "${productName}" was not found.`);
  }

  return foundProduct;
}

// Call the function with different product names
findProductByName("Iphone 13");
findProductByName("MacBook Pro");
findProductByName("Samsung Galaxy S21");
findProductByName("Sony Headphones");
