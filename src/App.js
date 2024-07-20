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
          <Route path='/company/ثبت-شرکت-مسئولیت-محدود' element={<HomePage />}/>
          <Route path='/company/ثبت-شرکت-سهامی-خاص' element={<HomePage />}/>
          <Route path='/company/ثبت-موسسه-غیر-تجاری' element={<HomePage />}/>
          <Route path='/company/ثبت-شرکت-تضامنی' element={<HomePage />}/>
          <Route path='/company/ثبت-شرکت-تعاونی' element={<HomePage />}/>
          <Route path='/company/ثبت-شرکت-سهامی-عام' element={<HomePage />}/>
          <Route path='/company/ثبت-شرکت-مناطق-آزاد' element={<HomePage />}/>
          <Route path='/company/تنظیم-صورتجلسات-شرکتها' element={<HomePage />}/>
          <Route path='/brand/ثبت-برند' element={<HomePage />}/>
          <Route path='/brand/ثبت-طرح-صنعتی' element={<HomePage />}/>
          <Route path='/brand/ثبت-اختراع' element={<HomePage />}/>
          <Route path='/financial-services/اخذ-کد-اقتصادی' element={<HomePage />}/>
          <Route path='/financial-services/اخذ-گواهی-ارزش-افزوده' element={<HomePage />}/>
          <Route path='/financial-services/اخذ-دفاتر-پلمپ-مالی' element={<HomePage />}/>
          <Route path='/commerce/اخذ-کارت-بازرگانی-حقیقی' element={<HomePage />}/>
          <Route path='/commerce/اخذ-کارت-بازرگانی-حقوقی' element={<HomePage />}/>
          <Route path='/special-services/طراحی-سایت' element={<HomePage />}/>
          <Route path='/special-services/طراحی-لوگو' element={<HomePage />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
