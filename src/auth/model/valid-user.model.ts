import { UserModel } from "src/users/model/user.model";

export type IValidUser = Omit<UserModel, "password">;
