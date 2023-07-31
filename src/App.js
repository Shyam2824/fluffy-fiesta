import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    
<Navbar title ="Shyam  " about="About us"/> {/* that has the props function that change the title */}
<div className="container">
<TextForm heading=" Enter the text" my-3/>
</div>
    </>
  );
}

export default App;
