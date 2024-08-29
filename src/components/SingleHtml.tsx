import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { IHits } from "../models/IHits";
import axios from "axios";
import { LayoutBlockVariation, LinkVariation } from "@digi/arbetsformedlingen";
import { DigiLayoutBlock, DigiLayoutContainer, DigiLinkExternal } from "@digi/arbetsformedlingen-react";
import parse from 'html-react-parser';
export const SingleHtml = () => {
  const { id } = useParams<{ id: string }>();
  const [singleAd, setSingAd] = useState<IHits>();

  useEffect(() => {
    const getSingelApi = async () => {
      const response = await axios.get<IHits>(`https://jobsearch.api.jobtechdev.se/ad/${id}`);
      if (response) {
        setSingAd(response.data);
      }
    }
    getSingelApi();
  }, [id])


  return (

    <>
      <DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY}>

        <DigiLayoutContainer afVerticalPadding>
          <img src={singleAd?.logo_url} alt="logo" />
          <h2>{singleAd?.headline}</h2>
          <p>Tjänst typ: {singleAd?.working_hours_type.label}</p>
          <p>{singleAd?.employer.name}</p>
          <p>{singleAd?.workplace_address.postcode} {singleAd?.workplace_address.city}</p>


          <DigiLinkExternal
            afHref={singleAd?.application_details.url ? singleAd?.application_details.url : "skapa komponent"}
            afTarget="_blank"
            afVariation={LinkVariation.LARGE}
          >
            Jag är en extern länk
          </DigiLinkExternal>

          <p>{parse(singleAd?.description.text_formatted ? singleAd?.description.text_formatted : "")}</p>

        </DigiLayoutContainer>

      </DigiLayoutBlock>
    </>
  )
}

