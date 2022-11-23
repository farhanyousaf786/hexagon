import './App.css';
import {Route, Routes } from "react-router-dom";
import LandingPage from '../LandingPage/LandingPage';
import ProductList from '../../Components/ProductList/ProductList';


function App() {

  return (
    <div className="app-background">
    //Route initialisation to use it in Navigation
    <Routes>
    // Index route or home page
    <Route  path="/" element={<LandingPage />} />
    // Route for product page
    <Route  path="/products-list" element={<ProductList />}
        />
    </Routes>
    </div>
  );

}

export default App;
