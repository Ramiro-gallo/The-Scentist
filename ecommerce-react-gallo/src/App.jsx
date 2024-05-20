import HeroSection from "./components/HeroSection/HeroSection"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"
import { Box } from '@chakra-ui/react'

function App() {

  return (
    <Box w={'100%'}>
        <NavBar />
        <HeroSection />
        <ItemListContainer title={'Online shop'} />
    </Box>
  )
}

export default App
