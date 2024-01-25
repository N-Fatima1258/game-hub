
import useData from "./useData";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => useData<Genre>('/genres')
export default useGenres;

// useData<Genre>('/genres') =======> pass Genre as our generic type argument