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

    addProduct (
        title = "producto prueba",
        description = "este es un producto prueba",
        price = 200,
        thumbnail = "sin imagen",
        code = "abc123",
        stock = 25
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