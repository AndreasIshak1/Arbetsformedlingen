import {
  DigiLayoutBlock,
  
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
      <h2 className="totalJobs">Antal Jobb: {hits.length}</h2>
      <section className="adsContainer">
        {hits.length === 0 ? <h1>Inga resulat hittades</h1> : ""}
        {hits.map((ads) => {
          return (
            <DigiLayoutBlock
              afVariation={LayoutBlockVariation.PRIMARY}
              className="adbox"
              afVerticalPadding
              key={ads.id}
            >
              <section
                className="infoLeft"
                onClick={() => navigate(`/ad/${ads.id}`)}
              >
                <h2 className="adHeadline">{ads.headline}</h2>
                <p>Tjänst typ:
                  <span className="employmentType">{ads.working_hours_type.label}</span>
                </p>
                <p>{ads.employer.name}</p>
                <p>
                  {ads.workplace_address.postcode} {ads.workplace_address.city}
                </p>
              </section>
              <section className="removeBtnContainer">
                <Button actionType={ActionType.SAVED} ad={ads}>
                  <>
                    <p>Spara</p>
                  </>
                </Button>
              </section>
            </DigiLayoutBlock>
          );
        })}
      </section>
    </>
  );
};
