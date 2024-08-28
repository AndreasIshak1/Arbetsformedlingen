import { createContext } from "react";
import { IHits } from "../models/IHits";


export const AdContext = createContext<IHits[]>([])