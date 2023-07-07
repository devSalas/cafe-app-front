import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI)
    console.log('connect database success')
  } catch (error) {
    console.log(error)
  }
}

export default connectDB
