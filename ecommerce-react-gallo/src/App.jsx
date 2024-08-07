import HeroSection from "./components/HeroSection/HeroSection"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"
import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { CartContextProvider } from "./context/CartContext"
import PageNotFound from "./components/PageNotFound/PageNotFound"
import Cart from "./components/Cart/Cart"
import Checkout from "./components/Checkout/Checkout"
function App() {

  return (
    <ChakraProvider>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <HeroSection />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categories/:categoryId" element={<ItemListContainer />} />
            <Route path="/product/:productId" element={<ItemDetailContainer /> } />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </ChakraProvider>
  )
}

export default App
