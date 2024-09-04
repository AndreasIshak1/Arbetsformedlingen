import { ButtonSize, ButtonVariation } from "@digi/arbetsformedlingen"
import { DigiButton } from "@digi/arbetsformedlingen-react"
import { ActionType } from "../reducers/buttonReducer";
import { useContext } from "react";
import { DispatchContext } from "../context/DispatchContext";
import { IHits } from "../models/IHits";

interface IsaveBttonProps {
  actionType: ActionType;
  children: JSX.Element;
  ad?: IHits;
}

export const SaveButton = ({
  actionType,
  children,
  ad,
}: IsaveBttonProps) => {
  const dispatch = useContext(DispatchContext)

  const handleClick = () => {
    if (ad) {
      const action = {
        type: actionType,
        payload: ad.id,
      }
      dispatch(action)

    }
  }
  return (
    <DigiButton
      onAfOnClick={handleClick}
      afSize={ButtonSize.LARGE}
      afVariation={ButtonVariation.FUNCTION}
      afFullWidth={false}
    >{children}</DigiButton>
  )
}

