const productModel = require("../models/productModels.js");

const getProductList = async (req, res) => {
  try {
    const products = await productModel.getAllProducts();
    res.status(200).json(products);
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to get product list!" });
  }
};

const getMenuList = async (red, res) => {
  try {
    const menuList = await productModel.getAllMenuList();
    res.status(200).json(menuList);
  } catch {
    res
      .status(500)
      .json({ success: false, message: "Failed to get menu list!" });
  }
};

module.exports = { getProductList, getMenuList };
