import { DigiLayoutContainer } from "@digi/arbetsformedlingen-react"
import { useContext, } from "react"
import { AdContext } from "../context/AdContext";

//ta emot input här
export const CreateHtml = () => {

  const ad = useContext(AdContext)

  return (
    <>
      {ad.map((ads) => {
        return (
          <DigiLayoutContainer afVerticalPadding key={ads.id}>
            <h2>{ads.headline}</h2>
            <p>Tjänst typ: {ads.working_hours_type.label}</p>
            <p>{ads.employer.name}</p>
            <p>{ads.workplace_address.postcode} {ads.workplace_address.city}</p>
          </DigiLayoutContainer >)

      })}
    </>
  )
}
