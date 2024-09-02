import {
  DigiLayoutBlock,
  DigiLayoutContainer,
} from "@digi/arbetsformedlingen-react";
import { useContext } from "react";
import { AdContext } from "../context/AdContext";
import { useNavigate } from "react-router-dom";
import { LayoutBlockVariation } from "@digi/arbetsformedlingen";

//ta emot input här
export const CreateHtml = () => {
  const { hits } = useContext(AdContext);
  const navigate = useNavigate();

  return (
    <>
      <DigiLayoutContainer>
        {hits.map((ads) => {
          return (
            <DigiLayoutBlock
              afVariation={LayoutBlockVariation.PRIMARY}
              className="homePage"
              onClick={() => navigate(`/ad/${ads.id}`)}
              afVerticalPadding
              key={ads.id}
            >
              <section className="infoLeft">
                <h2>{ads.headline}</h2>
                <p>Tjänst typ: {ads.working_hours_type.label}</p>
                <p>{ads.employer.name}</p>
                <p>
                  {ads.workplace_address.postcode} {ads.workplace_address.city}
                </p>
              </section>
            </DigiLayoutBlock>
          );
        })}
      </DigiLayoutContainer>
    </>
  );
};
