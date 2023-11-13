import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Banner from './Pages/Home/Banner/Banner';
import Services from './Pages/Home/Services/Services';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="">
      <Header></Header>
      {/* <Banner></Banner> */}
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
      </Routes>
    </div>
  );
}

export default App;
