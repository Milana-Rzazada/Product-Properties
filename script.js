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
     static applyDiscount(products, discount) {
        // products → Product və ya PerishableProduct obyektlərindən ibarət array
        // discount → məsələn, 0.15 → 15% endirim
        for (let product of products) {
            product.price = product.price - (product.price * discount);
        }
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


//Part 2
console.log("Part 2 Started");

class PerishableProductProperties extends ProductProperties {
  
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity); 
        this.expirationDate = expirationDate; 
    }

    toString() {
        return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}, Expiration Date: ${this.expirationDate}`;
    }
}

const milk = new PerishableProductProperties("Milk", 1.5, 10, "2024-12-31");
const cheese = new PerishableProductProperties("Cheese", 4.0, 5, "2024-11-15");
const yogurt = new PerishableProductProperties("Yogurt", 2.0, 7, "2024-10-20");
const eggs = new PerishableProductProperties("Eggs", 1.0, 12, "2024-09-15");
console.log(milk.toString());
console.log(cheese.toString());
console.log(yogurt.toString());
console.log(eggs.toString());
console.log("Part2 ended:");
//Part 2 ended


//Part 3
console.log("Part 3 Started");

// ===== Test Part 3 =====
const apple = new ProductProperties("Apple", 2.5, 50);
const orange = new PerishableProductProperties("Orange", 1.5, 10, "2024-12-31");
const pear = new PerishableProductProperties("Pear", 4.0, 5, "2024-11-15");

// ===== Test Part 3 =====

const productsList = [apple, orange, pear];

console.log("💰 Prices before discount:");
productsList.forEach(p => console.log(p.toString()));


ProductProperties.applyDiscount(productsList, 0.15);

console.log("\n💰 Prices after discount:");
productsList.forEach(p => console.log(p.toString()));

