import { Schema, model } from 'mongoose';
import { CategoryModel, ICategory } from './category.interface';

export const CategorySchema = new Schema<ICategory, CategoryModel>(
  {
    category: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export const Category = model<ICategory, CategoryModel>('Category', CategorySchema);
