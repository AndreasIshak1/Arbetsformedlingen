import { IAds } from "../models/IAds";
import { getData } from "./serviceBase";



export const getAllAds = async (searchQuery: string): Promise<IAds> => {
  const url = `https://jobsearch.api.jobtechdev.se/search?q=${searchQuery}&offset=0&limit=20`;
  const data = await getData<IAds>(url);
  return data;
}

