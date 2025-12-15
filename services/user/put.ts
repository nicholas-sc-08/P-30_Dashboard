import type { IUser, IUpdateUser } from "@/types/user.types";
import { api } from "../api";

export async function putUser(id: number, user: IUpdateUser): Promise<IUser>{

    try {

        const response = await api.put(`/users/${id}`, user);
        return response.data;
        
    } catch (error: any) {
      
        throw new Error(error);
    };
};