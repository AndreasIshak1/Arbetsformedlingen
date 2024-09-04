import { createContext } from "react";
import { IHits } from "../models/IHits";
import { SavedAd } from "../models/SavedAd";

export interface IAdContext {
    hits: IHits[];
    savedAds: SavedAd[];
    //search: (text:string) => void
}

export const AdContext = createContext<IAdContext>({hits:[], savedAds: []});