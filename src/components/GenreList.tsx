import useGenres from "../hooks/useGenres"



const GenreList = () => {
    const {data} = useGenres();
  return ( 
    <ul>
        {data.map(genre => <li key={genre.id}>{genre.name}</li>)}
    </ul>
  )
}

export default GenreList
// to fetch genre, create a hook 
// our components should know nothing about making http request