import { createContext } from "react";
import { IHits } from "../models/IHits";

export interface IAdContext {
    hits: IHits[];
    //search: (text:string) => void
}

export const AdContext = createContext<IAdContext>({hits:[]});