import './App.css';
import Navbar from './components/Navbar'
// import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  // const h1="TextUtiles";
  // const e2="AboutUs";
  // const f3="Home";
  return (
    <>
      <Navbar 
         title="TextUtils" textabout="About Us" texthome="Home"
      />
      <div className="container my-3">
        {/* <TextForm heading="Enter Text Here"/> */}
        <About/>
      </div>
      
    </>
  );
}
export default App;
