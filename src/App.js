import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import Meme from "./components/Meme";
import Form from "./components/Form";
function App() {

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4 shadow-lg">
        <div className="row mt-2">
            <Navbar className="col-sm" />
          </div>
          <div className="raw">
            <Meme className="col-sm" />
          </div>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
}

export default App;
