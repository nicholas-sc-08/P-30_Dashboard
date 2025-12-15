import type { IUser } from "@/types/user.types";
import { api } from "../api";

export async function getUsers(): Promise<IUser[]> {

    try {

        const response = await api.get("/users");
        return response.data;

    } catch (error: any) {

        throw new Error(error);
    };
};

export async function getUser(id: number): Promise<IUser> {

    try {

        const response = await api.get(`/users/${id}`);
        return response.data;

    } catch (error: any) {

        throw new Error(error);
    };
};