import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';

function App() {
  // const h1="TextUtiles";
  // const e2="AboutUs";
  // const f3="Home";
  return (
    <>
      <Navbar 
         title="Satish Yadav" textabout="About Us" texthome="Home"
      />
      <div className="container my-3">
        <TextForm heading="Enter Text Here"/>
      </div>
    </>
  );
}
export default App;
