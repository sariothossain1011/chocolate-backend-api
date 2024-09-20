import { Request,Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { IUser } from "./user.interface";
import httpStatus from 'http-status';
import sendResponse from "../../../shared/sendResponse";
import { UserService } from "./user.service";




const getAllUsers = catchAsync(async (req: Request, res: Response) => {
    const result = await UserService.getAllUsers();
  
    sendResponse<IUser[]>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Users retrieved successfully',
      data: result,
    });
  });

  export const UserController = {
    getAllUsers,
  }
