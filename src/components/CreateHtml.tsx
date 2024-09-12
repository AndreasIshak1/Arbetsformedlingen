import {
  DigiIconBookmarkSolid,
  DigiLayoutBlock,
} from "@digi/arbetsformedlingen-react";
import { useContext, useState } from "react";
import { AdContext } from "../context/AdContext";
import { useNavigate } from "react-router-dom";
import { LayoutBlockVariation } from "@digi/arbetsformedlingen";
import { Button } from "./Button";
import { ActionType } from "../reducers/buttonReducer";
import { Pagination } from "./Pagination";

//ta emot input här
export const CreateHtml = () => {
  const { hits, savedAds, loader } = useContext(AdContext);
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [adsPerPage] = useState(10);

  const indexOfLastAd = currentPage * adsPerPage;
  const indexOfFirstAd = indexOfLastAd - adsPerPage;
  const currentAds = hits.slice(indexOfFirstAd, indexOfLastAd);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <h2>
        {" "}
        <span className="totalJobs">Antal Jobb: {hits.length} </span>
      </h2>
      <section className="adsContainer">
        {currentAds.length === 0 && !loader ? (
          <h1>Inga resulat hittades</h1>
        ) : (
          ""
        )}
        {currentAds.map((ads) => {
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
                <h3 className="adHeadline">{ads.headline}</h3>
                <p>
                  Tjänst typ:
                  <span className="employmentType">
                    {ads.working_hours_type.label}
                  </span>
                </p>
                <p>{ads.employer.name}</p>
                <p>
                  {ads.workplace_address.postcode} {ads.workplace_address.city}
                </p>
              </section>
              <section className="removeBtnContainer">
                {savedAds.some((savedAd) => savedAd.adValue.id === ads.id) ? (
                  <Button actionType={ActionType.REMOVED} ad={ads}>
                    <>
                      <p>Sparad</p>
                    </>
                  </Button>
                ) : (
                  <Button actionType={ActionType.SAVED} ad={ads}>
                    <>
                      <p>Spara</p>
                    </>
                  </Button>
                )}
              </section>
            </DigiLayoutBlock>
          );
        })}
        {hits.length > 0 ? (
          <Pagination
            adsPerPage={adsPerPage}
            totalAds={hits.length}
            paginate={paginate}
          ></Pagination>
        ) : (
          ""
        )}
      </section>
    </>
  );
};
