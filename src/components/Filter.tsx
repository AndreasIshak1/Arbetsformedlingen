import { DigiFormFilter } from "@digi/arbetsformedlingen-react";
import { useContext, useState } from "react";
import { DispatchContext } from "../context/DispatchContext";
import { getAllAds } from "../services/addService";
import { ActionType } from "../reducers/buttonReducer";

export const Filter = () => {
  const [filterValue, setFilterValue] = useState({
    fulltime: true,
    partTime: false,
    fullTimeText: "parttime.min=100",
    partTimeText: "parttime.max=75",
    cities: [
      { id: "3", isChecked: false, coordinates: "59.329%2C18.068" },
      { id: "4", isChecked: false, coordinates: "57.70750%2C11.96750" },
      { id: "5", isChecked: false, coordinates: "55.59306%2C13.02139" },
      { id: "6", isChecked: false, coordinates: "59.79278%2C17.66028" },
    ],
  });
  const dispatch = useContext(DispatchContext);

  const updateFilter = (filterList: string[]) => {
    let newCityState;

    if (!filterList.includes("1") && !filterList.includes("2")) {
      newCityState = filterValue.cities.map((city) => {
        return { ...city, isChecked: filterList.includes(city.id) };
      });
      setFilterValue({
        ...filterValue,
        cities: newCityState,
      });
    } else {
      setFilterValue({
        ...filterValue,
        fulltime: filterList.includes("1"),
        partTime: filterList.includes("2"),
      });
    }
  };
  localStorage.setItem("filterValues", JSON.stringify(filterValue));

  const handleSubmit = async () => {
    const localValues = JSON.parse(
      localStorage.getItem("filterValues") || "{}"
    );

    const employmentType = localValues.fulltime
      ? filterValue.fullTimeText
      : filterValue.partTimeText;

    const searchValue = JSON.parse(localStorage.getItem("searchValue") || "[]");

    let cityValue = localValues.cities.filter(
      (city: any) => city.isChecked === true
    );

    if (cityValue.length === 0) {
      cityValue = [
        { id: "3", isChecked: true, coordinates: "59.329%2C18.068" },
      ];
    }

    const filteredList = await getAllAds(
      searchValue,
      employmentType,
      cityValue[0].coordinates
    );
    console.log(filteredList);

    const action = {
      type: ActionType.FILTERED,
      payload: JSON.stringify(filteredList.hits),
    };

    dispatch(action);
  };

  return (
    <>
      <section className="filterContainer">
        <DigiFormFilter
          afFilterButtonText="Omfattning"
          afSubmitButtonText="Filtrera"
          afListItems={[
            { id: "1", label: "Heltid" },
            { id: "2", label: "Deltid" },
          ]}
          onAfChangeFilter={(e) => updateFilter([e.detail.id])}
          onAfResetFilter={() => console.log("reset filter")}
          onAfSubmitFilter={() => handleSubmit()}
        ></DigiFormFilter>

        <DigiFormFilter
          afFilterButtonText="Stad"
          afSubmitButtonText="Filtrera"
          afListItems={[
            { id: "3", label: "Stockholm" },
            { id: "4", label: "Göteborg" },
            { id: "5", label: "Malmö" },
            { id: "6", label: "Uppsala" },
          ]}
          onAfChangeFilter={(e) => updateFilter([e.detail.id])}
          onAfResetFilter={() => console.log("reset filter")}
          onAfSubmitFilter={() => handleSubmit()}
        ></DigiFormFilter>
      </section>
    </>
  );
};
