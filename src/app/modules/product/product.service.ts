import httpStatus from 'http-status';
import { IProduct } from './product.interface';
import { Product } from './product.modal';
import ApiError from '../../../errors/ApiError';

const createProduct = async (payload: IProduct): Promise<IProduct> => {
  const result = (await Product.create(payload));
  return result;
};

const getAllProducts = async (): Promise<IProduct[] | []> => {
  const result = await Product.find({});
  return result;
};

const getSingleProduct = async (id: string): Promise<IProduct | null> => {
  const result = await Product.findById(id);
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
  }
  return result;
};

const deleteProduct = async (id: string): Promise<IProduct | null> => {
  const isExist = await Product.findOne({ _id: id });
  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
  }
  const result = await Product.findByIdAndDelete(id);
  return result;
};

export const ProductService = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  deleteProduct,
};
