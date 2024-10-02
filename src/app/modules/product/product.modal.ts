
import { Schema, model } from 'mongoose';
import { IProduct, ProductModel } from './product.interface';

const ProductSchema: Schema = new Schema<IProduct ,ProductModel >({
    title: { type: String, required: true },
    permaLink: { type: String, required: true, unique: true },
    flavor: { type: String },
    weight: { type: String },
    brand: { type: String },
    productType: { type: String, required: true },
    productOrigin: { type: String },
    sku: { type: String },
    price: { type: Number, required: true },
    discountPrice: { type: Number },
    quantity: { type: Number, required: true },
    category: { type: String, required: true },
    image: { type: String },
    description: [
        {
            id: { type: Number },
            title: { type: String },
            pera: { type: String }
        }
    ],
    reviews: [
        {
            id: { type: Number },
            rating: { type: Number, required: true },
            comment: { type: String, required: true }
        }
    ]
});

export const Product = model<IProduct, ProductModel>('Product', ProductSchema);
