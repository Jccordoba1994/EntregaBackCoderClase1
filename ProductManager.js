class ProductManager {
    constructor () {
        this.products = []
    }

    getProducts () {
        return this.products
    }

    getProductById (id) {
        const findProduct = this.products.find((product) => product.id == id)
        if (findProduct) {
            return findProduct
        } else {
            return "Not found"
        }
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
        title,
        description,
        price,
        thumbnail,
        code,
        stock
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
}