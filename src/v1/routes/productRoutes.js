import { Router } from 'express'
import productController from '../../controllers/productController.js'
const router = Router()
router
  .get('/', productController.getAllProducts)
  .get('/:productId', productController.getOneProduct)
  .post('/', productController.createOneProduct)
  .patch('/:productId', productController.updateOneProduct)
  .delete('/:productId', productController.deleteOneProduct)

export default router
