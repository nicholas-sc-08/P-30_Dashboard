import { Album, UserRound } from "lucide-react";
import { cardType } from "./enum";

export interface ICard{

    type: cardType;
    icon?: typeof UserRound | typeof Album;
};