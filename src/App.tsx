import { Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"


function App() {
  // templateAreas to define the layout of the grid ,,, in first row we have two columns (nav and nav) ,,,, in the second row we have two columns (aside and main)
  return <Grid templateAreas={{
    base: `"nav" "main"`,  // mobile -> single column
    lg: `"nav nav " "aside main"` // screen wider than 1024 px
  }}>
 
  <GridItem area='nav'>
    <NavBar/>
  </GridItem>
   {/* will be rendered on larde screens and above */}
   <Show above="lg">
   <GridItem area='aside' bg='gold'>Aside</GridItem>
   </Show>
 
  <GridItem area='main' bg='dodgerblue'>Main</GridItem>


  </Grid>
}

export default App
// remove all code present in index.css