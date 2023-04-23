import fs from "fs";
import { faker } from "@faker-js/faker";
const products = [];

for (let i = 0; i < 10; i++) {
  const generatedProduct = {
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    type: faker.commerce.product(),
    color: faker.commerce.color(),
    material: faker.commerce.productMaterial(),
    description: faker.commerce.productDescription,
  }
  products.push(generatedProduct);
}


const api = { products }
fs.writeFile("db.json", JSON.stringify(api), (err) => {
  if (err) throw err;
  console.log("Updated!!")
})
