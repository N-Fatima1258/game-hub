import { useEffect, useState } from "react";

import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
    id: number;
    name: string;
}

interface FetchGenreResponse{
    count: number;
    results: Genre[];
}

const useGenres = () => {
// for storing the game object
const [genres, setGenres] = useState<Genre[]>([]);
const [error, setError] = useState("");
 const[isLoading, setLoading] = useState(false);

// to send the fetch request to the backend
// send the request to the games endpoint
useEffect(() => {
    // create a acontroller object and set it to the instance of abort constroller
    const controller = new AbortController();
    setLoading(true)
  apiClient
    .get<FetchGenreResponse>("/genres", {signal : controller.signal})
    .then((res) => {
      setGenres(res.data.results);
    setLoading(false)
  })
    .catch((err) => {
        if(err instanceof CanceledError) return;        
        setError(err.message);
        setLoading(false)
      
      });
        

    // cleanup function
    return () => controller.abort();
}, []);// best way to setLoading is in the finally method

return { genres, error, isLoading}


}
export default useGenres;