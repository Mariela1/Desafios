const fs = require('fs');

class ProductManager{
    constructor(filePath) {
        this.filePath = filePath;
        this.products = this.loadProductsFromFile();
    }


loadProductsFromFile() {
    try {
      const fileData = fs.readFileSync(this.filePath, 'utf-8');
      const products = JSON.parse(fileData);
      return products;
    } catch (error) {
      console.error(`Error al cargar los productos desde el archivo: ${this.filePath}`);
      return [];
    }
  }

  getAllProducts() {
    return this.products;
  }

  getProductById(productId) {
    return this.products.find(product => product.id === productId);
  }

}


module.exports = new ProductManager('./productos.json');