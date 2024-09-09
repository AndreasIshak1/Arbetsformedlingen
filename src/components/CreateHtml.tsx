import {
  DigiLayoutBlock,
  DigiLayoutContainer,
} from "@digi/arbetsformedlingen-react";
import { useContext } from "react";
import { AdContext } from "../context/AdContext";
import { useNavigate } from "react-router-dom";
import { LayoutBlockVariation } from "@digi/arbetsformedlingen";
import { Button } from "./Button";
import { ActionType } from "../reducers/buttonReducer";

//ta emot input här
export const CreateHtml = () => {
  const { hits } = useContext(AdContext);
  const navigate = useNavigate();

  return (
    <>
      <h2>Antal resultat: {hits.length}</h2>
      <DigiLayoutContainer>
        {hits.map((ads) => {
          return (
            <DigiLayoutBlock
              afVariation={LayoutBlockVariation.PRIMARY}
              className="homePage"
              afVerticalPadding
              key={ads.id}
            >
              <section
                className="infoLeft"
                onClick={() => navigate(`/ad/${ads.id}`)}
              >
                <h2>{ads.headline}</h2>
                <p>Tjänst typ: {ads.working_hours_type.label}</p>
                <p>{ads.employer.name}</p>
                <p>
                  {ads.workplace_address.postcode} {ads.workplace_address.city}
                </p>
              </section>
              <div className="removeBtnContainer">
                <Button actionType={ActionType.SAVED} ad={ads}>
                  <>
                    <p>Spara</p>
                  </>
                </Button>
              </div>
            </DigiLayoutBlock>
          );
        })}
      </DigiLayoutContainer>
    </>
  );
};
