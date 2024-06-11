import HeroSection from "./components/HeroSection/HeroSection"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"
import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <ChakraProvider>
      <BrowserRouter>
        <NavBar />
        <HeroSection />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categories/:categoryId" element={<ItemListContainer />} />
          <Route path="/product/:productId" element={<ItemDetailContainer /> } />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
