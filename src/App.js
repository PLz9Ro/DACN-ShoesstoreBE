import { Cart, Checkout, Home, ProductPage,Order } from './Pages';
import './App.css';
import HeaderNav from './components/Hearder/HeaderNav';
import Footer from './components/Footer/Footer.';
import CustomRouters from './Routers/CustomRouters';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/*' element={<CustomRouters/>}></Route>
      </Routes>
       
    </div>
  );
}

export default App;
