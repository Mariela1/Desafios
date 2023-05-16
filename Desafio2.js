const fs = require('fs');

class ProductManager {
    constructor(path) {
        this.products = [];
        this.path = path;
      
    }

async readFile() {

    try {
        const data = await fs.promises.readFile("./productos.txt", "utf8");
        return JSON.parse(data);
    } catch (error) {
        console.log("Error al leer el archivo",error);
        return [];
    }
}
  async writeFile(data) {
    try {
        await fs.promises.writeFile(this.path, JSON.stringify(data));        
    } catch (error) {
        console.log("Error al escribir el archivo",error);
    }

}
    async addProduct(product) {
        try {
            const products = await this.readFile();
            const newProduct = {
                id: products.length + 1,
                title: product.title,
                description: product.description,
                price: product.price,
                thumbnail: product.thumbnail,
                code: product.code,
                stock: product.stock,
            };
            products.push(newProduct);
            await this.writeFile(products);
            console.log("Producto agregado", newProduct);
            } catch (error) {
            console.log("Error al agregar el producto", error);
            }
        }

    async getProducts() {

        try {
            const products = await this.readFile();
            console.log("Productos encontrados:", products );
            return products;
        } catch (error) {
            console.log("Error al obtener los productos", error);
            return [];
        }

    }

    async getProductById(id) {
        try {
            const products = await this.readFile();
            const product = products.find((product) => product.id === id);
            if (product) {
                console.log("Producto encontrado:", product);
            } else {
                console.log("Producto no encontrado");
            }
        } catch (error) {
            console.log("Error al obtener el producto", error);
        }
    }





    async updateProduct(id, updateFields) {
        try {
            const products = await this.readFile();
            const productIndex = products.findIndex((product) => product.id === id);
            if (productIndex === -1) {
                console.log("Producto no encontrado");
                return;
            }
            const product = products[productIndex];
            const updatedProduct = {
                ...product,
                ...updateFields,
            };
            products[productIndex] = updatedProduct;
            await this.writeFile(products);
            console.log("Producto actualizado", updatedProduct);
        } catch (error) {
            console.log("Error al actualizar el producto", error);
        }
    }

    async deleteProduct(id) {
        try {
            const products = await this.readFile();
            const index = products.findIndex((product) => product.id !== id);
            if (index !== -1) {
                const deleteProduct = products.splice(index, 1)[0];
                await this.writeFile(products);
                console.log("Producto eliminado", deleteProduct);
            } else {
                console.log("Producto no encontrado");
            }
            
        } catch (error) {
            console.log("Error al eliminar el producto", error);
        }
    }
}

    const productManager = new ProductManager("./productos.txt");
    
    productManager.addProduct({
        title: "Producto 1",
        description: "Descripcion 1",
        price: 100,
        thumbnail: "/images/producto1.jpg",
        code: "PO15",
        stock: 10,
    });

    console.log("Archivo productos.txt creado exitosamente");

    productManager.updateProduct(1,
        {
            title: "Producto 11",
            description: "Descripcion 11",
            price: 1001,
            thumbnail: "/images/producto11.jpg",
            code: "PO151",
            stock: 101,
        });



productManager.deleteProduct(1);
const producto = productManager.getProductById(2);
console.log(producto);

productManager.updateProduct(2, { price: 250, stock: 15 });
productManager.getProducts();




