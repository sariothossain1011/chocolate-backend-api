import httpStatus from "http-status";
import { IUser } from "./user.interface";
import { User } from "./user.model";
import ApiError from "../../../errors/ApiError";




const getAllUsers = async (): Promise<IUser[] | []> => {
    const result = await User.find({});
    return result;
  };

  const getSingleUser = async (id: string): Promise<IUser | null> => {
    const result = await User.findById(id);
    if (!result) {
      throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
    }
    return result;
  };
  
  const deleteUser = async (id: string): Promise<IUser | null> => {
    const isExist = await User.findOne({ _id: id });
    if (!isExist) {
      throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
    }
    const result = await User.findByIdAndDelete(id);
    return result;
  };



  export const UserService = {
    getAllUsers,
    getSingleUser,
    deleteUser
  }