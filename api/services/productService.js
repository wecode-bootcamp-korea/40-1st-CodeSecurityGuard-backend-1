const productDao = require('../models/productDao')

const getAllProducts = async () => {
    let result = await productDao.getAllProducts()
    return result
}

const getProductByCategoryId = async (categoryId) => {
    let result = await productDao.getProductByCategoryId(categoryId)
    return result
}

const getProductBySubCategoryId = async (subCategoryId) => {
    let result = await productDao.getProductBySubCategoryId(subCategoryId)
    return result
}

const getProductById = async (productId) => {
    let result = await productDao.getProductById(productId)
    return result
}

module.exports = {
    getAllProducts,
    getProductByCategoryId,
    getProductBySubCategoryId,
    getProductById
}