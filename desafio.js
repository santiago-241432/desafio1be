class ProductManager{

    constructor(){
        this.products = [];

    }

    getProducts(){
        console.log(this.products)
    }

    addProduct(title, description, price, thumbnail, code, stock){
        const id = this.products.length + 1;
        

        const product = {
            id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        
        }

        const areAllPropertiesSet = 
        Object.values(product).every(value => value !== undefined);
        if(areAllPropertiesSet){
            this.products.push(product);

            console.log(`Producto ${title} agregado!`)

        }

        if(!areAllPropertiesSet){
            console.error("DEBE COMPLETAR TODOS LOS CAMPOS");
        }

        const existecode = this.products.every(e => e.code === code);
        if(existecode){
            console.log("SE REPITE EL CODE");
        } 
        



        
        
    }

    getProductById(productId){

        const product = this.products.find(e => e.id === productId);

        if(!product) {
            console.error("Not Found");
            
        }
        if(product) {
            console.log(`Su producto es ${product.title}`)
        }
        
    }
}

const productManager = new ProductManager();

productManager.addProduct("milanesa","grande",500,"asd", 3, 2);
productManager.addProduct("costeleta","mediana",400,"asd", 3, 3);
productManager.addProduct("costeleta","mediana",400,"asd", 2 );
productManager.addProduct("chuletas","mediana",450,"asd", 4,3);
productManager.getProducts();
productManager.getProductById(2);

