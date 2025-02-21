import "./style/App.css";
import NavBar from "./components/NavBar/navBar";
import Body from "./components/body/Body";
import Footer from "./components/Footer/Footer";

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
