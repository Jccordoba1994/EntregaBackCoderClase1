class ProductManager {
    constructor () {
        this.products = []
    }
    
    #createId() {
        let newId = 0
        for (let i = 0; i < this.products.length; i++) {
            const product = this.products[i];
            if (product.id > newId) {
                newId = product.id
            }
        }
        return ++newId
    } 

    addProduct () {
        let newProduct = {
            title: "prueba",
            description: "todo prueba",
            price: 200,
            thumbnail: "sin imagen",
            code: "1234",
            stock: 200,
            id: this.#createId()
        }
        this.products = [...this.products, newProduct]
        return true
    }

    getProducts () {
        return this.products
    }
    
    addProduct (
        
    )
    getProductById (id) {
        const findProduct = this.products.find((product) => product.id == id)
        if (findProduct) {
            return findProduct
        } else {
            return "Not found"
        }
    }
    
}