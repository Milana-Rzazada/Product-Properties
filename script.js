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
const product2 = new ProductProperties("Banana", 0.50, 10);
const product3 = new ProductProperties("Orange", 1.50, 7);
const product4 = new ProductProperties("Grapes", 2.00, 3);
const product5 = new ProductProperties("Mango", 3.00, 2);
const product6 = new ProductProperties("Pineapple", 4.00, 1);
const product7 = new ProductProperties("Watermelon", 5.00, 4);
console.log(product1.toString());
console.log("Total Value: $" + product1.getTotalValue());
console.log(product2.toString());
console.log("Total Value: $" + product2.getTotalValue());
console.log(product3.toString());
console.log("Total Value: $" + product3.getTotalValue());
console.log(product4.toString());
console.log("Total Value: $" + product4.getTotalValue());
console.log(product5.toString());
console.log("Total Value: $" + product5.getTotalValue());
console.log(product6.toString());
console.log("Total Value: $" + product6.getTotalValue());
console.log(product7.toString());
console.log("Total Value: $" + product7.getTotalValue());

console.log("PART 1 ENDED");

console.log("Part 2 Started");

class PerishableProductProperties extends ProductProperties{
    constructor(name, price, quantity, expirationDate){
        super(name, price, quantity, expirationDate);
        this.expirationDate = expirationDate;
}
toString(){
    return `Product: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}, Expiration Date: ${this.expirationDate}`;
}


}

const milk = new PerishableProductProperties("Milk", 2.00, 5, "2025-4-15");
const cheese = new PerishableProductProperties("Cheese", 3.00, 10, "2025-3-26");
const eggs = new PerishableProductProperties("Eggs", 1.50, 7, "2024-11-25");
const yogurt = new PerishableProductProperties("Yogurt", 2.50, 3, "2025-2-20");