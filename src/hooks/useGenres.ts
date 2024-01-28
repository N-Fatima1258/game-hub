import genres from "../data/genres";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => ({data: genres, isLoading: false, error: null})
export default useGenres;

// set the data property to the genres we have stored in the genres modules