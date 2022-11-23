import './App.css';
import {Route, Routes } from "react-router-dom";
import LandingPage from '../LandingPage/LandingPage';
import ProductList from '../../Components/ProductList/ProductList';


function App() {

  return (
    <div className="app-background">
    <Routes>
    //Route initialisation to use it in Navigation
    <Route  path="/" element={<LandingPage />} />
    <Route  path="/products-list" element={<ProductList />}
        />
    </Routes>
    </div>
  );

}

export default App;
