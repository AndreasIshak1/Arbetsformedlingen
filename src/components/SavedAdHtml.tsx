import { useContext } from "react"
import { AdContext } from "../context/AdContext"
import { DigiLayoutBlock, DigiTypography } from "@digi/arbetsformedlingen-react"
import { LayoutBlockVariation } from "@digi/arbetsformedlingen"
import { ActionType } from "../reducers/buttonReducer"
import { Button } from "./Button"

export const SavedAdHtml = () => {
  const { savedAds } = useContext(AdContext)


  return <>
    {
      savedAds.map((ad) => {
        return (
          <DigiLayoutBlock afVariation={LayoutBlockVariation.SYMBOL} className="savedAdBlock">
            <DigiTypography>
              <h2>{ad.adValue.headline}</h2>
              <p>{ad.adValue.employer.name}</p>
              <p> Typ av tjänst: {ad.adValue.working_hours_type.label}</p>
            </DigiTypography>
            <div className="removeBtnContainer">
              <Button actionType={ActionType.REMOVED} ad={ad.adValue} >
                <><p>Ta bort</p></>
              </Button>
            </div>
          </DigiLayoutBlock>)
      })
    }
  </>
}