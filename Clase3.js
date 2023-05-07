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

    addProduct (

    ) {
        let newProduct = {
            title: "producto",
            description: "producto prueba",
            price: 500,
            thumbnail: "sin imagen",
            code: "abc123", 
            stock: 15,
            id: this.#createId()
        }
        this.path.push = [...this.path, newProduct]
        const pathString = JSON.stringify(this.path)
        fs.writeFileSync('path.json', pathString)
    }

    getProducts () {
        const readPathString = fs.readFileSync('path.json', 'utf-8')
        const path = JSON.stringify(readPathString)
        this.path = path;
        return this.path
    }
    
    getProductById (id) {
        const path = this.path.find((paths) => paths.id == id)
        const paths = JSON.parse(path)
        return paths
    }
    
    updateProduct (id, nombre) {
        const search = this.path.find((paths) => paths.id == id)
        const path = JSON.stringify(search)
        fs.writeFileSync('path.json', path.nombre)   
    }

    async deleteProduct(id) {
        const path = this.path.find((paths) => paths.id == id)
        await fs.promises.unlink (path)
    } 
}

ProductManager.updateProduct({ nombre: "José" })