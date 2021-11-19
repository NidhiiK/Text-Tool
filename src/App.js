import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";
function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" />
      <div className="container my-3">
        <About />9{/* <TextForm heading="Enter the text to analyse below" /> */}
      </div>
    </>
  );
}

export default App;
