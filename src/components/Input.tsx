import { FormInputSearchVariation, FormInputType } from "@digi/arbetsformedlingen"
import { DigiFormInputSearch } from "@digi/arbetsformedlingen-react"
import { useContext, useState } from "react";
import { AdContext } from "../context/AdContext";

// interface InputProps {
//   search: (inputText: string) => void
// }

export const Input = () => {
  const [inputValue, setInputValue] = useState("");
  const { search } = useContext(AdContext)

  const handleSubmit = (valueText: string) => {
    search(valueText)
    console.log(valueText);
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

