import { useContext } from "react";
import { CreateHtml } from "../components/CreateHtml";
import { Input } from "../components/Input";
import { AdContext } from "../context/AdContext";
import { LoaderSpinnerSize } from "@digi/arbetsformedlingen";
import { DigiLoaderSpinner } from "@digi/arbetsformedlingen-react";
export const Home = () => {
  const { loader } = useContext(AdContext);

  return (
    <>
      <Input />
      <CreateHtml />
      {loader ? (
        <DigiLoaderSpinner
          afSize={LoaderSpinnerSize.LARGE}
          afText="Laddar"
        ></DigiLoaderSpinner>
      ) : (
        ""
      )}
    </>
  );
};
