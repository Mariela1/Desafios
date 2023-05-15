class ProductManager {
    
    constructor(products = []) {
        this.products = products;
        this.lastId = 0;
    }
    
    addProduct(product) {
       
    
        const {
            title,
            description,
            price,
            thumbnail,
            code,
            stock

        } = product;

        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("Debe completar todos los campos");
            return;
        }

        if (this.products.find(p => p.code === product.code)) {
            console.log("El codigo ya existe");
            return;
        }

        product.id = this.lastId;
        this.lastId++;
        this.products.push(product);
        console.log("Producto agregado exitosamente", product);

        
    }

getProducts() {
    console.log("Listado de productos");
    console.log(this.products);
}

getProductById(id) {
    const product = this.products.find((product) => product.id === id);
    if (product) {
        console.log(product);
    } else {
        console.log("Producto no encontrado");
    }
}

}

//Probando con valores

const productManager = new ProductManager();


    productManager.addProduct({

        title: "Producto 1",
        description: "Descripcion 1",
        price: 100,
        thumbnail: "/images/producto1.jpg",
        code: "PO15",
        stock: 10,
    
    });

    productManager.addProduct({

        title: "Producto 2",
        description: "Descripcion 2",
        price: 100,
        thumbnail: "/images/producto2.jpg",
        code: "PO13",
        stock: 10,
    
    });

    productManager.addProduct({

        title: "Producto 3",
        description: "Descripcion 3",
        price: 100,
        thumbnail: "/images/producto3.jpg",
        code: "PO14",
        stock: 10,
    
    });



productManager.addProduct({

    title: "Producto 8",
    description: "Descripcion 3",
    price: 100,
    thumbnail: "/images/producto3.jpg",
    code: "PO14",
    stock: 100,

});

productManager.getProducts();

productManager.getProductById(8);
