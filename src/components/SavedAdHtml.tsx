import { useContext } from "react"
import { AdContext } from "../context/AdContext"
import { DigiLayoutBlock, DigiTypography } from "@digi/arbetsformedlingen-react"
import { LayoutBlockVariation } from "@digi/arbetsformedlingen"
import { ActionType } from "../reducers/buttonReducer"
import { Button } from "./Button"
import { useNavigate } from "react-router-dom"

export const SavedAdHtml = () => {
  const { savedAds } = useContext(AdContext)
  const navigate = useNavigate()

  // onClick={() => navigate(`/ad/${ads.id}

  return <>
    {savedAds.length === 0 ? <h1>Du har inga sparade annonser än! 😎</h1> : ""}
    {
      savedAds.map((ad) => {
        return (
          <DigiLayoutBlock afVariation={LayoutBlockVariation.SYMBOL} className="savedAdBlock" >
            <DigiTypography onClick={() => navigate(`/ad/${ad.adValue.id}`)}>
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