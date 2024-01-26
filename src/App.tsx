import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // templateAreas to define the layout of the grid ,,, in first row we have two columns (nav and nav) ,,,, in the second row we have two columns (aside and main)
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, // mobile -> single column
        lg: `"nav nav " "aside main"`, // screen wider than 1024 px
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr", // 2 columns
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      {/* will be rendered on larde screens and above */}
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList  selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)}/>
        </GridItem>
      </Show>

      <GridItem area="main">
        <PlatformSelector/>
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
// remove all code present in index.css
// templateColumns === > to define the width for our columns
// 1 fr => our column stretches and takes up all the available space
