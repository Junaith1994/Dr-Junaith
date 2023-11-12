import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Banner from './Pages/Banner/Banner';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Banner></Banner>
      <Routes>
        <Route path='/' ></Route>
      </Routes>
    </div>
  );
}

export default App;
