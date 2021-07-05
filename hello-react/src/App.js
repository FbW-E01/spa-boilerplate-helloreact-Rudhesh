import './App.css';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './sidebar';

function App() {
  return (
    <div className="App">
        <Header />
        <Sidebar />
        <Body />
        <Footer />
    </div>
);
}

export default App;
