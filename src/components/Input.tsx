import { FormInputSearchVariation, FormInputType } from "@digi/arbetsformedlingen"
import { DigiFormInputSearch } from "@digi/arbetsformedlingen-react"


export const Input = () => {
  return (
    <>
    <DigiFormInputSearch
	afLabel="Etikett"
	afVariation={FormInputSearchVariation.MEDIUM}
	afType={FormInputType.SEARCH}	
	afButtonText="Knapptext"
>
</DigiFormInputSearch>
    </>
  )
}

