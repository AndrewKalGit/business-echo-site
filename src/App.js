import './App.css';
import Footer from './Footer';
import Landing from './Landing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Brochure from './Brochure';
import QuickQuote from './QuickQuote';

function App() {
//SEO
//PPolicy
//SSL
//Remove unused npm-prune
  return (
    <>
    <BrowserRouter>
    <Nav></Nav>
    <Routes>
    <Route path="/" element={<><Landing></Landing><Brochure></Brochure></>}></Route>
    <Route path="/consult" element={<><QuickQuote></QuickQuote></>}></Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
    </>
  );
}

export default App;
