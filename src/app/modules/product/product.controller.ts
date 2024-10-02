import { Request, RequestHandler, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import httpStatus from 'http-status';
import sendResponse from '../../../shared/sendResponse';
import { ProductService } from './product.service';
import { IProduct } from './product.interface';

const createCategory: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const category = req.body.category;
    const result = await ProductService.createProduct(category);

    sendResponse<IProduct>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Product created successfully',
      data: result,
    });
  }
);



const getAllProducts = catchAsync(async (req: Request, res: Response) => {
  const result = await ProductService.getAllProducts();

  sendResponse<IProduct[]>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Products retrieved successfully',
    data: result,
  });
});


const getSingleProduct = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ProductService.getSingleProduct(id);
  sendResponse<IProduct>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Product retrieved successfully',
    data: result,
  });
});

const deleteProduct = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ProductService.deleteProduct(id);
  sendResponse<IProduct>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Products deleted successfully',
    data: result,
  });
});

export const ProductController = {
  createCategory,
  getAllProducts,
  getSingleProduct,
  deleteProduct,
};
