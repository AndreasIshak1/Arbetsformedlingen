import { createContext, Dispatch } from "react";
import { IAction } from "../reducers/buttonReducer";

export const DispatchContext = createContext<Dispatch<IAction>>(() => {
    return;
})