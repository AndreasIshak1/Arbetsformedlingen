import { createContext } from "react";
import { IHits } from "../models/IHits";
import { SavedAd } from "../models/SavedAd";

export interface IAdContext {
  hits: IHits[];
  savedAds: SavedAd[];
  loader: boolean;
  //search: (text:string) => void
}

export const AdContext = createContext<IAdContext>({
  hits: [],
  savedAds: [],
  loader: false,
});
