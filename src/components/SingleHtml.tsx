import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IHits } from "../models/IHits";
import axios from "axios";
import {
  InfoCardHeadingLevel,
  InfoCardType,
  InfoCardVariation,
  LayoutBlockVariation,
  LinkVariation,
} from "@digi/arbetsformedlingen";
import {
  DigiInfoCard,
  DigiLayoutBlock,
  DigiLayoutContainer,
  DigiLinkExternal,
} from "@digi/arbetsformedlingen-react";
import parse from "html-react-parser";
import { Button } from "./Button";
import { ActionType } from "../reducers/buttonReducer";
export const SingleHtml = () => {
  const { id } = useParams<{ id: string }>();
  const [singleAd, setSingAd] = useState<IHits>();

  useEffect(() => {
    const getSingelApi = async () => {
      const response = await axios.get<IHits>(
        `https://jobsearch.api.jobtechdev.se/ad/${id}`
      );
      if (response) {
        setSingAd(response.data);
      }
    };
    getSingelApi();
  }, [id]);

  return (
    <>
      <DigiLayoutContainer>
        <DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY}>
          <section className="infoLeft">
            <div>
              <img src={singleAd?.logo_url} alt="logo" />
            </div>
            <h2>{singleAd?.headline}</h2>
            <p>Tjänst typ: {singleAd?.working_hours_type.label}</p>
            <p>{singleAd?.employer.name}</p>
            <p>
              {singleAd?.workplace_address.postcode}{" "}
              {singleAd?.workplace_address.city}
            </p>

            <DigiInfoCard
              afHeading="Jag är ett infokort"
              afHeadingLevel={InfoCardHeadingLevel.H3}
              afType={InfoCardType.TIP}
              afVariation={InfoCardVariation.SECONDARY}
            //afSize={infoCardSize.STANDARD}
            >
              <p>
                {parse(
                  singleAd?.description.text_formatted
                    ? singleAd?.description.text_formatted
                    : ""
                )}
              </p>
            </DigiInfoCard>
          </section>
        </DigiLayoutBlock>

        <DigiInfoCard
          afHeading="Kontakt information"
          afHeadingLevel={InfoCardHeadingLevel.H2}
          afType={InfoCardType.TIP}
          afVariation={InfoCardVariation.PRIMARY}
        //afSize={infoCardSize.STANDARD}
        >
          <DigiLinkExternal
            afHref={
              singleAd?.application_details.url
                ? singleAd?.application_details.url
                : "skapa komponent"
            }
            afTarget="_blank"
            afVariation={LinkVariation.LARGE}
          >
            Besök hemsida
          </DigiLinkExternal>
          <p>{singleAd?.employer.name}</p>
          <p>{singleAd?.workplace_address.region}</p>
          <p>
            Adress :{singleAd?.workplace_address.street_address},{" "}
            {singleAd?.workplace_address.postcode}
          </p>
          <Button actionType={ActionType.SAVED} ad={singleAd}>
            <><p>Saved</p></>
          </Button>
        </DigiInfoCard>
      </DigiLayoutContainer>
    </>
  );
};
