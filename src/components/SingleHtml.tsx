import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { IHits } from "../models/IHits";
import axios from "axios";

export const SingleHtml = () => {
  const { id } = useParams<{ id: string }>();
  const [singleAd, setSingAd] = useState<IHits>();

  useEffect(() => {
    const getSingelApi = async () => {
      const response = await axios.get<IHits>(`https://jobsearch.api.jobtechdev.se/ad/${id}`);
      if (response) {
        setSingAd(response.data);
      }
    }
    getSingelApi();
  }, [id])


  return (

    <>
      <p>{singleAd?.headline}</p>
    </>
  )
}

