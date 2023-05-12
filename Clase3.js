const { create } = require('domain')
const fs = require('fs')

class ProductManager {
    constructor () {
        this.path = []
    }
    
    #createId() {
        let newId = 0
        for (let i = 0; i < this.path.length; i++) {
            const paths = this.path[i];
            if (paths.id > newId) {
                newId = paths.id
            }
        }
        return ++newId
    } 

    addProduct (title, description, price, thumbnail, code, stock
    ) {
        let newProduct = {
            title,
            description,
            price,
            thumbnail,
            code, 
            stock,
            id: this.#createId()
        }
        this.path = [...this.path, newProduct]
    }

    getProducts () {
        return this.path
    }
    
    getProductById (id) {
        const path = this.path.find((paths) => paths.id == id)
        return path
    }
    
    updateProduct (id, title) {
        const elemento = this.getProductById(id)
        elemento.title = title  
    }

    async deleteProduct(id) {
        const elemento = this.getProductById(id)
        await fs.promises.unlink(elemento)
    } 
}

const productManager = new ProductManager()
productManager.getProducts()
console.log(productManager.getProducts());

productManager.addProduct('producto', 'este', 200, 'sin imagen', 'abc123', 25
)
console.log(productManager.getProducts());
console.log('este es filtrado por id',productManager.getProductById(1));

productManager.updateProduct(1, 'otro titulo')
console.log('cambio de titulo', productManager.getProducts());

productManager.deleteProduct(1)