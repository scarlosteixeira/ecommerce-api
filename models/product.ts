import mongoose, { Schema } from 'mongoose'

const reviewSchema = new mongoose.Schema(
  {
    comment: { type: String, required: [true, "You haven't written anything."] },
    rating: { type: Number, default: 5 },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
  },
  { timestamps: true }
)

export const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, 'Enter a valid name'] },
    description: { type: String },
    price: { type: Number, required: [true, 'Enter a price']
      // baseprice: { type: Number, required: [true, 'Enter a price'] },
      // minPrice: { type: Number },
      // maxPrice: { type: Number },
      // discount: { type: Number, required: true, default: 0 }
    },
    categories: { type: String },
    image: { type: String },
    // physicalChar: {
    //   size: { l: { type: Number }, w: { type: Number }, h: { type: Number } },
    //   weight: { type: Number },
    //   color: { type: Array }
    // },
    quantity: { type: Number, required: [true, 'Enter a quantity'] },
    reviews: [reviewSchema],
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
  },
  { timestamps: true }
)

export default mongoose.model('Product', productSchema)
