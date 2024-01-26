import { useEffect, useState } from "react";

import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T>{
    count: number;
    results: T[];
}

const useData =<T> (endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
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
    .get<FetchResponse<T>>(endpoint, {signal : controller.signal, ...requestConfig})
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
}, deps ? [...deps] : []);// best way to setLoading is in the finally method

return { data, error, isLoading}


}
export default useData;

//<T> => generic type parameter

// {signal : controller.signal}   ==> axios request config object  ,,,  in this object we can pass data in the request body ,,, we can also set query string parameters and so on

// to filter games by genre, we have to pass genre as a query string parameter
// ...requestConfig    => spread requestConfig to add any additional properties here 

// once we declare a parameter as optional , all the following parameters have to be optional as well