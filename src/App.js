import './App.css';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    

    <div className="wrapper">
        <Header />
        <Navbar />
        <Content />
        <Footer />
    </div>

  );	
}

export default App;
