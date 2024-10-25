import "./App.css";
import NavBar from "./components/navBar/navBar";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="Container">
      <NavBar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
