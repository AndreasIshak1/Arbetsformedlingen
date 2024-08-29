import { DigiLayoutContainer } from "@digi/arbetsformedlingen-react"
import { useContext, } from "react"
import { AdContext } from "../context/AdContext";
import { useNavigate } from "react-router-dom";

//ta emot input här
export const CreateHtml = () => {

  const { hits } = useContext(AdContext)
  const navigate = useNavigate();


  return (
    <>
      {hits.map((ads) => {
        return (
          <DigiLayoutContainer onClick={() => navigate(`/ad/${ads.id}`)} afVerticalPadding key={ads.id} >
            <h2>{ads.headline}</h2>
            <p>Tjänst typ: {ads.working_hours_type.label}</p>
            <p>{ads.employer.name}</p>
            <p>{ads.workplace_address.postcode} {ads.workplace_address.city}</p>
          </DigiLayoutContainer >)

      })}
    </>
  )
}
