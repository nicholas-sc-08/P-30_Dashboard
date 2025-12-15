"use client";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UserRound } from "lucide-react";
import { ICard } from "@/types/card.types";
import { cardIcon, cardTittle } from "@/services/card-type/card-type";

export default function UserCard({ type }: ICard) {

    const Icon = cardIcon(type);

    return (

        <Card className="w-1/1 h-1/3 flex-col items-center cursor-pointer">
            <CardHeader className="flex w-full h-15 justify-start items-center">
                <div className="flex justify-center items-center w-15 h-10 rounded">
                    {Icon ? <Icon size={20}/> : "N/A"}
                </div>
                <CardTitle className="w-100">{cardTittle(type)}</CardTitle>
            </CardHeader>
            <CardDescription className="w-70">
                This card provides an at-a-glance overview of the platform's user engagement and growth metrics. It is typically positioned as a key performance indicator (KPI) on the main dashboard view.
            </CardDescription>
        </Card>
    );
};