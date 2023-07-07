import { model, Schema } from 'mongoose'

const productSchema = new Schema({
  product: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    require: true
  }

}, {
  timestamps: true,
  versionKey: false
})

export const productModel = model('products', productSchema)
