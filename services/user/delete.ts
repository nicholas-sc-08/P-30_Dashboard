import { api } from "../api";

export async function deleteUser(id: number): Promise<void>{

    try {

        await api.put(`/users/${id}`);
        
    } catch (error: any) {
      
        throw new Error(error);
    };
};