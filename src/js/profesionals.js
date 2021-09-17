const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../database/profesionals.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const professionals = {
  findAll() {
    const filteredProducts = products.filter((prod) => {
      return !prod.deleted;
    });
    return filteredProducts;
  },

  findOneById(id) {
    const product = products.find((prod) => {
      return prod.id == id;
    });

    return product;
  },

  createOne(payload, image) {
    const lastProduct = products[products.length - 1];
    const biggestProductId = products.length > 0 ? lastProduct.id : 1;
    const product = {
      id: biggestProductId + 1,
      ...payload,
      profileImage: image ? image.filename : "default-image.png",
    };
    products.push(product);
    this.save();
  },

  editOne(id, payload, image) {
    const product = this.findOneById(id);
    product.name = payload.name;
    product.profession = payload.profession;
    product.location = payload.location;
    product.description = payload.description;
    product.payMethod = payload.payMethod;
    product.profileImage = image ? image.filename : product.profileImage;
    this.save();
  },

  destroyOne(id) {
    const product = this.findOneById(id);
    product.deleted = true;
    this.save();
  },

  save() {
    const jsonString = JSON.stringify(products, null, 4);
    fs.writeFileSync(productsFilePath, jsonString);
  },
};

module.exports = professionals;
