import { DigiFormFilter } from "@digi/arbetsformedlingen-react";
import { useContext, useState } from "react";
import { DispatchContext } from "../context/DispatchContext";
import { getAllAds } from "../services/addService";
import { ActionType } from "../reducers/buttonReducer";

export const Filter = () => {
  const [filterValue, setFilterValue] = useState({
    fulltime: false,
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
    const newCityState = filterValue.cities.map((city) => {
      return { ...city, isChecked: filterList.includes(city.id) };
    });

    const newFilterValue = {
      ...filterValue,
      fulltime: filterList.includes("1"),
      partTime: filterList.includes("2"),
      cities: newCityState,
    };

    setFilterValue(newFilterValue);
  };

  const handleSubmit = async () => {
    const employmentType = filterValue.fulltime
      ? filterValue.fullTimeText
      : filterValue.partTimeText;
    const searchValue = JSON.parse(localStorage.getItem("searchValue") || "[]");

    const cityValue = filterValue.cities.filter(
      (city) => city.isChecked === true
    );

    console.log("City value: ", cityValue[0].coordinates);

    const filteredList = await getAllAds(
      searchValue,
      employmentType,
      cityValue[0].coordinates
    );

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
          //afCheckItems={["1"]} // optional, override internal check state of component with filter ids
          onAfChangeFilter={(e) => updateFilter([e.detail.id])}
          onAfResetFilter={() => console.log("reset filter")}
          onAfSubmitFilter={() => handleSubmit()}
          onAfCloseFilter={(e) =>
            console.log("submit filter", e.detail.listItems, e.detail.checked)
          }
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
          //afCheckItems={["1"]} // optional, override internal check state of component with filter ids
          onAfChangeFilter={(e) => updateFilter([e.detail.id])}
          onAfResetFilter={() => console.log("reset filter")}
          onAfSubmitFilter={() => handleSubmit()}
          onAfCloseFilter={(e) =>
            console.log("submit filter", e.detail.listItems, e.detail.checked)
          }
        ></DigiFormFilter>
      </section>
    </>
  );
};

//https://jobsearch.api.jobtechdev.se/search?parttime.min=50&parttime.max=100&q=diskare&qfields=occupation&location=Stockholm&offset=0&limit=10&stats.limit=10
