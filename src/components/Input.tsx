import { FormInputSearchVariation, FormInputType } from "@digi/arbetsformedlingen"
import { DigiFormInputSearch } from "@digi/arbetsformedlingen-react"
import { useState } from "react";

// interface InputProps {
//   search: (inputText: string) => void
// }

export const Input = () => {
  const [inputValue, setInputValue] = useState("stockholm");


  return (
    <>
      <DigiFormInputSearch
        afLabel="Etikett"
        afVariation={FormInputSearchVariation.MEDIUM}
        afType={FormInputType.SEARCH}
        afButtonText="Knapptext"
        value={inputValue}
        onChange={(e) => setInputValue((e.target as HTMLInputElement).value)}
      >
      </DigiFormInputSearch>
    </>
  )
}

