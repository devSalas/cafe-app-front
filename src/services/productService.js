import { productModel } from '../models/productModels.js'

const getAllProducts = async () => {
  try {
    const products = await productModel.find({})
    return products
  } catch (err) {
    return err
  }
}
const getOneProduct = async (id) => {
  try {
    const products = await productModel.findById({ _id: id })
    console.log({ products, error: 'entro aqui' })
    return products
  } catch (err) {
    return err
  }
}
const createOneProduct = async (newProduct) => {
  try {
    const createdProduct = await productModel.create(newProduct)
    return createdProduct
  } catch (error) {
    return error
  }
}
const updateOneProduct = async (id, product) => {
  try {
    const updatedProduct = await productModel.findByIdAndUpdate({ _id: id }, product, { new: true })
    return updatedProduct
  } catch (error) {
    return error
  }
}
const deleteOneProduct = async (id) => {
  try {
    const deletedProduct = await productModel.findByIdAndDelete(id)
    return deletedProduct
  } catch (error) {
    return error
  }
}

const productService = {
  getAllProducts,
  getOneProduct,
  createOneProduct,
  updateOneProduct,
  deleteOneProduct
}

export default productService
