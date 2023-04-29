class ProductManager {
    constructor () {
        this.products = []
    }

    getProducts () {
        return this.products
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
            stock
        }
        this.products = [...this.products, newProduct]
    }
}