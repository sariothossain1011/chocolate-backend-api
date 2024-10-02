import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { RequestHandler } from 'express-serve-static-core';
import httpStatus from 'http-status';
import sendResponse from '../../../shared/sendResponse';
import { CategoryService } from './category.service';
import { ICategory } from './category.interface';


const createCategory: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const category = req.body.category;
    const result = await CategoryService.createCategory(category);

    sendResponse<ICategory>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Category created successfully',
      data: result,
    });
  }
);



const getAllCategories = catchAsync(async (req: Request, res: Response) => {
  const result = await CategoryService.getAllCategories();
  sendResponse<ICategory[]>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Category retrieved successfully',
    data: result,
  });
});

const getSingleCategory = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await CategoryService.getSingleCategory(id);
  sendResponse<ICategory>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Category retrieved successfully',
    data: result,
  });
});

const deleteCategory = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await CategoryService.deleteCategory(id);
  sendResponse<ICategory>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Category deleted successfully',
    data: result,
  });
});

export const CategoryController = {
  createCategory,
  getAllCategories,
  getSingleCategory,
  deleteCategory,
};
