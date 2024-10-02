import { Model } from 'mongoose';

// Define an interface for the product
export type IProduct = {
    title: string;
    permaLink: string;
    flavor: string;
    weight: string;
    brand: string;
    productType: string;
    productOrigin: string;
    sku: string;
    price: number;
    discountPrice: number;
    quantity: number;
    category: string;
    image: string;
    description: {
        id: number;
        title: string;
        pera: string;
    }[];
    reviews: {
        id: number;
        rating: number;
        comment: string;
    }[];
}



export type ProductModel = Model<IProduct, Record<string, unknown>>;
