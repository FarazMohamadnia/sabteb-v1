import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import './index.css'
import { BrowserRouter , Routes , Route} from "react-router-dom";
import HomePage from './home/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
