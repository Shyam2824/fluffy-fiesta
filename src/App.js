import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    
<Navbar title ="Shyam 1 " about="About us"/> {/* that has the props function that change the title */}
<div className="container my-3">
<TextForm heading=" Enter the text" my-3/>
<About/>
</div>
    </>
  );
}

export default App;
