import productService from '../services/productService.js'

const getAllProducts = async (req, res) => {
  const allproducts = await productService.getAllProducts()
  res.send({ status: 'OK', message: 'correct', data: allproducts })
}
const getOneProduct = (req, res) => {
  const oneProduct = productService.getOneProduct()
  res.send({ status: true, message: 'success', data: oneProduct })
}
const createOneProduct = async (req, res) => {
  const { product, price } = req.body

  if (!product || !price) return res.json({ error: 'falta agregar datos' })
  const newProduct = {
    product,
    price
  }
  console.log('entro')
  const createdProduct = await productService.createOneProduct(newProduct)
  res.status(201).send({ status: 'OK', data: createdProduct })
}
const updateOneProduct = (req, res) => {
  const updatedProduct = productService.updateOneProduct()
  res.send('update product')
}
const deleteOneProduct = (req, res) => {
  const deleteOneProduct = productService.deleteOneProduct()
  res.send(`delete product ${req.params.productId}`)
}

const productController = {
  getAllProducts,
  getOneProduct,
  createOneProduct,
  updateOneProduct,
  deleteOneProduct
}

export default productController
