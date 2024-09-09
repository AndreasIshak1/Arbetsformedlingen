import {
  FormInputSearchVariation,
  FormInputType,
} from "@digi/arbetsformedlingen";
import { DigiFormInputSearch } from "@digi/arbetsformedlingen-react";
import { useContext, useState } from "react";
import { DispatchContext } from "../context/DispatchContext";
import { ActionType } from "../reducers/buttonReducer";
import { getAllAds } from "../services/addService";
import { Filter } from "./Filter";

// interface InputProps {
//   search: (inputText: string) => void
// }

export const Input = () => {
  const [inputValue, setInputValue] = useState(
    JSON.parse(localStorage.getItem("searchValue") || "[]")
  );

  const dispatch = useContext(DispatchContext);
  //const { search } = useContext(AdContext)

  const handleSubmit = async (valueText: string) => {
    localStorage.setItem("searchValue", JSON.stringify(inputValue));

    const searchResult = await getAllAds(
      valueText,
      "parttime.min=100",
      "59.329%2C18.068"
    );

    dispatch({
      type: ActionType.SEARCHED,
      payload: JSON.stringify(searchResult.hits),
    });
  };

  return (
    <>
      <DigiFormInputSearch
        afLabel="Sök efter ditt nya jobb!"
        afVariation={FormInputSearchVariation.MEDIUM}
        afType={FormInputType.SEARCH}
        afButtonText="Sök"
        onAfOnChange={(e) => setInputValue(e.target.value)}
        onAfOnSubmitSearch={() => {
          handleSubmit(inputValue);
        }}
        afValue={inputValue}
      ></DigiFormInputSearch>
      <Filter></Filter>
    </>
  );
};
