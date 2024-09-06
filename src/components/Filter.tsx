
import { DigiFormFilter } from "@digi/arbetsformedlingen-react"
import { useContext, useState } from "react"
import { DispatchContext } from "../context/DispatchContext"
import { getAllAds } from "../services/addService"
import { ActionType } from "../reducers/buttonReducer"


export const Filter = () => {
  const [filterValue, setFilterValue] = useState({
    fulltime: false,
    partTime: false,
    fullTimeText: "parttime.min=100",
    partTimeText: "parttime.max=75",
  })
  const dispatch = useContext(DispatchContext)


  const updateFilter = (filterList: string[]) => {
    const newFilterValue = {
      ...filterValue,
      fulltime: filterList.includes("1"),
      partTime: filterList.includes("2"),
    };
    setFilterValue(newFilterValue);
  }


  const handleSubmit = async () => {
    // const newFilterValue = {
    //   ...filterValue,
    //   fulltime: filterList.includes("1"),
    //   partTime: filterList.includes("2"),
    // };
    // setFilterValue(newFilterValue);


    const employmentType = filterValue.fulltime ? filterValue.fullTimeText : filterValue.partTimeText
    const searchValue = JSON.parse(localStorage.getItem("searchValue") || "[]")

    const filteredList = await getAllAds(searchValue, employmentType)

    const action = {
      type: ActionType.FILTERED,
      payload: JSON.stringify(filteredList.hits)
    }

    dispatch(action)
  }





  return (
    <>
      <DigiFormFilter
        afFilterButtonText="Omfattning"
        afSubmitButtonText="Filtrera"
        afListItems={[{ "id": "1", "label": "Heltid" }, { "id": "2", "label": "Deltid" }]}
        //afCheckItems={["1"]} // optional, override internal check state of component with filter ids
        onAfChangeFilter={(e) => updateFilter([e.detail.id])}
        onAfResetFilter={() => console.log("reset filter")}
        onAfSubmitFilter={() => handleSubmit()}
        onAfCloseFilter={(e) => console.log("submit filter", e.detail.listItems, e.detail.checked)}>

      </DigiFormFilter >
    </>
  )
}

