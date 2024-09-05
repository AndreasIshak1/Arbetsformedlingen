import { IAdContext } from "../context/AdContext";
import { SavedAd } from "../models/SavedAd";

export enum ActionType {
  SAVED,
  REMOVED,
  LOADED,
  SEARCHED
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

    case ActionType.SEARCHED: {
      const updatedSearched = JSON.parse(action.payload);
      return { ...ads, hits: updatedSearched }
    }

    case ActionType.SAVED: {
      const newSavedAd = ads.hits.find((selectedAd) => selectedAd.id === action.payload);

      if (newSavedAd) {

        if (ads.savedAds.find((ad) => ad.adValue.id === newSavedAd.id)) {
          return ads
        } else {
          const updatedState = { ...ads, savedAds: [...ads.savedAds, new SavedAd(newSavedAd)] }

          localStorage.setItem("savedList", JSON.stringify(updatedState.savedAds))

          return updatedState
        }

      }
      else return ads
    }
    case ActionType.REMOVED: {
      const updatedSavedAds = ads.savedAds.filter((ad) => ad.adValue.id !== action.payload)

      const updateObject = { ...ads, savedAds: updatedSavedAds }

      localStorage.setItem("savedList", JSON.stringify(updatedSavedAds))

      return updateObject
    }

    default:
      return ads
  }

} 