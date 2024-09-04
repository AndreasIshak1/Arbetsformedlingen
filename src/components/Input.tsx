import { FormInputSearchVariation, FormInputType } from "@digi/arbetsformedlingen"
import { DigiFormInputSearch } from "@digi/arbetsformedlingen-react"
import { useContext, useState } from "react";
import { DispatchContext } from "../context/DispatchContext";
import { ActionType } from "../reducers/buttonReducer";
import { getAllAds } from "../services/addService";


// interface InputProps {
//   search: (inputText: string) => void
// }

export const Input = () => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useContext(DispatchContext)
  //const { search } = useContext(AdContext)

  const handleSubmit = async (valueText: string) => {

    const searchResult = await getAllAds(valueText);

    dispatch({
      type: ActionType.SEARCHED,
      payload: JSON.stringify(searchResult.hits)
    })

  }

  return (
    <>
      <DigiFormInputSearch
        afLabel="Sök efter ditt nya jobb!"
        afVariation={FormInputSearchVariation.MEDIUM}
        afType={FormInputType.SEARCH}
        afButtonText="Sök"
        onAfOnChange={(e) => setInputValue(e.target.value)}
        onAfOnSubmitSearch={() => { handleSubmit(inputValue) }}
        afValue={inputValue}
      >
      </DigiFormInputSearch>
    </>
  )
}


