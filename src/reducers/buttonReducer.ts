import { IAdContext } from "../context/AdContext";

export enum ActionType {
  SAVED,
  REMOVED,
  LOADED
}

export interface IAction {
  type: ActionType
  payload: string
}

export const AdReducer = (ads: IAdContext, action: IAction): IAdContext => {
  switch (action.type) {
    case ActionType.LOADED: {
      const updatedList = JSON.parse(action.payload);
      return { ...ads, hits: updatedList }

    }

    default:
      return ads
  }

} 