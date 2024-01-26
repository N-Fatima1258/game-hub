import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

// query object 
export interface GameQuery{
  genre: Genre | null;
  platform: Platform | null;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)
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
      {/* will be rendered on large screens and above */}
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})}
          />
        </GridItem>
      </Show>

      <GridItem area="main">
      <HStack spacing={5} paddingLeft={2} marginBottom={5}>
      <PlatformSelector selectedPlatform= {gameQuery.platform}
          onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}
        />
        <SortSelector/>
      </HStack>
        <GameGrid gameQuery={gameQuery}/>
      </GridItem>
    </Grid>
  );
}

export default App;
// remove all code present in index.css
// templateColumns === > to define the width for our columns
// 1 fr => our column stretches and takes up all the available space

