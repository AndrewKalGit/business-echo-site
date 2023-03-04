import './App.css';
import Footer from './Footer';
import Landing from './Landing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Brochure from './Brochure';
import QuickQuote from './QuickQuote';

function App() {
//SEO
  //React Helmet
  //Proper tags 
  //SEO validation and check
//PPolicy
//SSL
//Remove unused npm-prune
//React Production build and "react validation?""
  return (
    <>
    <BrowserRouter>
    <Nav></Nav>
    <Routes>
    <Route path="/" element={<><Landing></Landing><Brochure></Brochure><Footer></Footer></>}></Route>
    <Route path="/consult" element={<><QuickQuote></QuickQuote></>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
