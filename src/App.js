import './App.css';
import {BrowserRouter} from "react-router-dom"
import Nav from './components/Nav';
import Heading from "./components/Heading";
import Searchbar from './components/Searchbar';
import Main from './pages/Main';
import Footer from './components/Footer';
import {AnimatePresence} from "framer-motion"

function App() {

  return (
    <div className="App">
     <BrowserRouter>
      <Nav />
      <Heading />
      <Searchbar />
      <AnimatePresence>
        <Main />
      </AnimatePresence>
      <Footer />
     </BrowserRouter>
    </div>
  );
}

export default App;
