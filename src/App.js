import './App.css';
import Footer from './Footer';
import Landing from './Landing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';

function App() {
  return (
    <>
    <BrowserRouter>
    <Nav></Nav>
    <Routes>
    <Route path="/" element={<><Landing></Landing></>}></Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
    </>
  );
}

export default App;
