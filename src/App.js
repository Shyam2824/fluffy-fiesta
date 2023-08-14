import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm.1';

function App() {
  return (
    <>
    
<Navbar title ="Shyam 1 " about="About us"/> {/* that has the props function that change the title */}
<div className="container">
<TextForm heading=" Enter the text" my-3/>
</div>
    </>
  );
}

export default App;
