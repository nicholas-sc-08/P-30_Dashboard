"use client";

import { LucideIcon, UserRound } from "lucide-react";
import { Album } from "lucide-react";

export function cardTittle(type: string): string {

    switch (type) {

        case "user":
            return "Total Users";

        case "product":
            return "Total Products"

        default:
            return "";
    };
};

export function cardIcon(type: string): LucideIcon | null {

    switch (type) {

        case "user":
            return UserRound;
        case "product":
            return Album;
        default:
            return null;
    };
};