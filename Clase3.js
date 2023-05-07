class ProductManager {
    constructor () {
        this.path = []
        const pathString = fs.readFileSync('path.json', 'utf-8')
        const path = JSON.parse(pathString)
        this.path = path;
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

    addProduct (product) {
        let newProduct = {
            title,
            description,
            price,
            thumbnail,
            code, 
            stock,
            id: this.#createId()
        }
        this.path.push = [...this.path, newProduct]
        const pathString = JSON.stringify(this.path)
        fs.writeFileSync('path.json', pathString)
        return true
    }

    getProducts () {
        return this.path 
    }
    
    addProduct (
        
    )
    getProductById (id) {
        const path = this.products.find((paths) => paths.id == id)
        if (path) {
            return path
        } else {
            return "Not found"
        }
    }
    
}