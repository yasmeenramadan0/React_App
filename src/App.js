import logo from './logo.svg';
import './App.css';
import Header from './header';
import Main from './main';
import Products from './products';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route  path="/" Component={Main} ></Route>
          <Route path="/products" Component={Products} > </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

