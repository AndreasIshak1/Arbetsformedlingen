import { useContext } from "react"
import { AdContext } from "../context/AdContext"
import { DigiLayoutBlock, DigiTypography } from "@digi/arbetsformedlingen-react"
import { LayoutBlockVariation } from "@digi/arbetsformedlingen"

export const SavedAdHtml = () => {
  const { savedAds } = useContext(AdContext)
  return <>
    {
      savedAds.map((ad) => { 
        return (
        <DigiLayoutBlock afVariation={LayoutBlockVariation.SYMBOL}>
<DigiTypography>
<h2>{ad.adValue.headline}</h2>
<p>
	{ad.adValue.description.text}
</p>
</DigiTypography>
</DigiLayoutBlock>)
      })
    }
  </>
}