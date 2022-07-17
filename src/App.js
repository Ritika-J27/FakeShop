import Navigation from "./component/Navigation/Navigation";
import ProductList from "./component/ProductList/ProductList";
import Product from "./component/ProductList/Product";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navigation />
   
     <Routes>
        <Route exact path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
     </Routes>
    </>
  );
}

export default App;
