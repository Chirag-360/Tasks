import "./App.css";
import { Footer } from "./layout/Footer";
import { Navbar } from "./layout/Header/Nabbar";
import { Main } from "./pages/Main";

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default App;
