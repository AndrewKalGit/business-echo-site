import './App.css';
import Footer from './Footer';
import Landing from './Landing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Brochure from './Brochure';
import QuickQuote from './QuickQuote';
import Error from './Error';

function App() {
//SEO
  //React Helmet
  //Proper tags 
  //SEO validation and check
//PPolicy
//SSL
//Remove unused npm-prune
//React Production build and "react validation?""
//ERROR PAGES
  return (
    <>
    <BrowserRouter>
    <Nav></Nav>
    <Routes>
    <Route path="/" element={<><Landing></Landing><Brochure></Brochure></>}></Route>
    <Route path="/quickquote" element={<><QuickQuote></QuickQuote></>}></Route>
    <Route path="/404" element={<><Error></Error></>}></Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
    </>
  );
}

export default App;
