import './App.css';
import { Navigate, Route, Routes } from "react-router-dom";
import LandingPage from '../LandingPage/LandingPage';
import ProductList from '../../Components/ProductList/ProductList';


function App() {

  return (
    <div className="app-background">
    <Routes>
    <Route  path="/" element={<LandingPage />} />
    
    <Route  path="/products-list" element={<ProductList />}
        />
    </Routes>
    </div>
  );

}

export default App;
