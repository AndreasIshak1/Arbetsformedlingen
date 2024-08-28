import { DigiLayoutContainer } from "@digi/arbetsformedlingen-react"
import { useEffect, useState } from "react"
import { IAds } from "../models/IAds"
import { getAllAds } from "../services/addService";


export const CreateHtml = () => {
  const [ads, setAds] = useState<IAds>();

  useEffect(() => {
    const getApi = async () => {


      const ImportedAds = await getAllAds();
      setAds(ImportedAds);
    }
    getApi();
  }, [])

  return (
    <>
      {ads?.hits.map((ad) => {
        return (
          <DigiLayoutContainer afVerticalPadding key={ad.id}>
            <h2>{ad.headline}</h2>
            <p>Tjänst typ: {ad.working_hours_type.label}</p>
            <p>{ad.employer.name}</p>
            <p>{ad.workplace_address.postcode} {ad.workplace_address.city}</p>
          </DigiLayoutContainer >)

      })}
    </>
  )
}
