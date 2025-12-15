import type { IUser, ICreateUser } from "@/types/user.types";
import { api } from "../api";

export async function postUser(user: ICreateUser): Promise<IUser>{

    try {

        const response = await api.post("/users", user);
        return response.data;
        
    } catch (error: any) {
      
        throw new Error(error);
    };
};