import { IAds } from "../models/IAds";
import { getData } from "./serviceBase";

export const getAllAds = async (
  searchQuery: string,
  employementType: string,
  location: string
): Promise<IAds> => {
  const url = `https://jobsearch.api.jobtechdev.se/search?q=${searchQuery}&${employementType}&qfields=occupation&position=${location}&position.radius=30&offset=0&limit=50&stats.limit=20`;
  const data = await getData<IAds>(url);
  return data;
};

//https://jobsearch.api.jobtechdev.se/search?q=${searchQuery}parttime.min=50&q=front%20end&offset=0&limit=10&stats.limit=20

//Gammal länk:
//`https://jobsearch.api.jobtechdev.se/search?q=${searchQuery}&${employementType}&offset=0&limit=10&stats.limit=20`

//Heltid
//https://jobsearch.api.jobtechdev.se/search?parttime.max=100&offset=0&limit=20&stats.limit=20

//qfields=occupation&location=Stockholm
