//Part 1

class ProductProperties{
    constructor(name, price, quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getTotalValue(){
        return this.price * this.quantity;
    }

    toString(){
        return `Product: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}`;
    }

}

const product1 = new ProductProperties("Apple", 1.00, 5);
