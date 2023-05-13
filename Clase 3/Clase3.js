const { create } = require('domain')
const fs = require('fs')

fs.writeFileSync('array.txt', 'asdasd ver')

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

    addProduct(title, description, price, thumbnail, code, stock) {
        let newProduct = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            id: this.#createId()
        }
        this.path.push(newProduct)
        const productString = JSON.stringify(this.path)
        fs.writeFileSync('array.txt', productString)
    }

    getProducts () {
        return this.path
    }
    
    getProductById (id) {
        const path = this.path.find((paths) => paths.id == id)
        return path
    }
    
    updateProduct (id, title) {
        fs.readFileSync('array.txt', 'utf-8')
        const tittle = JSON.parse()
        const elemento = this.getProductById(id)
        elemento.title = title 
        fs.whiteFileSync('array.txt', JSON.stringify(title))
    }

    async deleteProduct(id) {
        fs.readFileSync('array.txt', 'utf-8')
        const elemento = this.getProductById(id)
        fs.unlink('array.txt', elemento)
    } 
}

const productManager = new ProductManager()
productManager.getProducts()
console.log(productManager.getProducts());

productManager.addProduct('bla', 'blabla', 20, 'sin imagen', 'a1s32d', 15
)
console.log(productManager.getProducts());

console.log('este es filtrado por id',productManager.getProductById(1));

productManager.updateProduct(1, 'otro titulo')
console.log('cambio de titulo', productManager.getProducts());

productManager.deleteProduct(1)
console.log('borrado', getProductById(1));