import './App.css';
import Footer from './Footer';
import Landing from './Landing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Brochure from './Brochure';

function App() {
  return (
    <>
    <BrowserRouter>
    <Nav></Nav>
    <Routes>
    <Route path="/" element={<><Landing></Landing><Brochure></Brochure></>}></Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
    </>
  );
}

export default App;
