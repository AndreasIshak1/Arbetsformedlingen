import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { IHits } from "../models/IHits";
import axios from "axios";
import { InfoCardHeadingLevel, InfoCardType, InfoCardVariation, LayoutBlockVariation, LinkVariation } from "@digi/arbetsformedlingen";
import { DigiInfoCard, DigiLayoutBlock, DigiLayoutContainer, DigiLinkExternal } from "@digi/arbetsformedlingen-react";
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



      <DigiLayoutContainer afVerticalPadding>

        <DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY}>

          <section className="infoLeft">
            <img src={singleAd?.logo_url} alt="logo" />
            <h2>{singleAd?.headline}</h2>
            <p>Tjänst typ: {singleAd?.working_hours_type.label}</p>
            <p>{singleAd?.employer.name}</p>
            <p>{singleAd?.workplace_address.postcode} {singleAd?.workplace_address.city}</p>

            <p>{parse(singleAd?.description.text_formatted ? singleAd?.description.text_formatted : "")}</p>

          </section>
        </DigiLayoutBlock >




        <DigiInfoCard
          afHeading="Kontakt information"
          afHeadingLevel={InfoCardHeadingLevel.H2}
          afType={InfoCardType.TIP}
          afVariation={InfoCardVariation.PRIMARY}
        //afSize={infoCardSize.STANDARD}
        >
          <DigiLinkExternal
            afHref={singleAd?.application_details.url ? singleAd?.application_details.url : "skapa komponent"}
            afTarget="_blank"
            afVariation={LinkVariation.LARGE}
          >
            Besök hemsida
          </DigiLinkExternal>
          <p>
            Det här är bara ord för att illustrera hur det ser ut med text inuti. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Suspendisse commodo egestas elit in consequat. Proin in ex consectetur,
            laoreet augue sit amet, malesuada tellus.
          </p>
        </DigiInfoCard>


      </DigiLayoutContainer>
    </>
  )
}

