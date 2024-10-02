import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { ICategory } from './category.interface';
import { Category } from './category.modal';


const createCategory = async (payload: ICategory): Promise<ICategory> => {
  const result = (await Category.create(payload));
  return result;
};

const getAllCategories = async (): Promise<ICategory[] | []> => {
  const result = await Category.find({});
  return result;
};

const getSingleCategory = async (id: string): Promise<ICategory | null> => {
  const result = await Category.findById(id);
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Category not found');
  }
  return result;
};

const deleteCategory = async (id: string): Promise<ICategory | null> => {
  const isExist = await Category.findOne({ _id: id });
  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Category not found');
  }
  const result = await Category.findByIdAndDelete(id);
  return result;
};

export const CategoryService = {
  createCategory,
  getAllCategories,
  getSingleCategory,
  deleteCategory,
};
