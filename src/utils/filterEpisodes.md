import IEpisode from "../components/Episodes";

export default function filterEpisode(mapArray:IEpisode[], searchTerm: string){
return mapArray.filter((ep) => ep.name.toLowerCase().includes(searchTerm.toLowerCase()) || ep.summary.toLowerCase().includes(searchTerm.toLowerCase()));}
