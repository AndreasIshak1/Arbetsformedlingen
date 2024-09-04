import { IHits } from "../models/IHits"

export const SavePage = () => {
  const savedList: IHits[] = JSON.parse(localStorage.getItem("saveList") || "[]")


  return (
    <>

      {savedList.map((ad) => {
        return (<h1 key={ad.id}>{ad.headline}</h1>)

      })}
    </>
  )
}

