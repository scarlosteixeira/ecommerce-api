"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const reviewSchema = new mongoose_1.default.Schema({
    comment: { type: String, required: [true, "You haven't written anything."] },
    rating: { type: Number, default: 5 },
    user: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });
exports.productSchema = new mongoose_1.default.Schema({
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
    user: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });
exports.default = mongoose_1.default.model('Product', exports.productSchema);
