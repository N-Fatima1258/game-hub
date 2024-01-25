import { useEffect, useState } from "react";

import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchResponse<T>{
    count: number;
    results: T[];
}

const useData =<T> (endpoint: string) => {
// for storing the game object
const [data, setData] = useState<T[]>([]);
const [error, setError] = useState("");
 const[isLoading, setLoading] = useState(false);

// to send the fetch request to the backend
// send the request to the games endpoint
useEffect(() => {
    // create a acontroller object and set it to the instance of abort constroller
    const controller = new AbortController();
    setLoading(true)
  apiClient
    .get<FetchResponse<T>>(endpoint, {signal : controller.signal})
    .then((res) => {
      setData(res.data.results);
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

return { data, error, isLoading}


}
export default useData;

//<T> => generic type parameter