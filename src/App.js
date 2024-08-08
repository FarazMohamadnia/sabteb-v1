import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import './index.css'
import { BrowserRouter , Routes , Route} from "react-router-dom";
import HomePage from './home/Home';
import CompanyPage1 from './pages/companyPages/companypage1/CompanyPage'
import CompanyPage2 from './pages/companyPages/CompanyPage2/CompanyPage';
import CompanyPage3 from './pages/companyPages/CompanyPage3/CompanyPage';
import CompanyPage4 from './pages/companyPages/CompanyPage4/CompanyPage';
import CompanyPage5 from './pages/companyPages/CompanyPage5/CompanyPage';
import CompanyPage6 from './pages/companyPages/CompanyPage6/CompanyPage';
import CompanyPage7 from './pages/companyPages/CompanyPage7/CompanyPage';
import CompanyPage8 from './pages/companyPages/CompanyPage8/CompanyPage';
import BrandPage1 from './pages/brandPages/BrandPage1/brandPage';
import BrandPage2 from './pages/brandPages/BrandPage2/brandPage';
import BrandPage3 from './pages/brandPages/BrandPage3/brandPage';
import FinancialPage1 from './pages/financialPages/financialPage1/financialPage';
import FinancialPage2 from './pages/financialPages/financialPage2/financialPage';
import FinancialPage3 from './pages/financialPages/financialPage3/financialPage';
import FinancialPage4 from './pages/financialPages/financialPage4/financialPage';
import SpecialPage1 from './pages/specialPages/specialPage1/specialPage';
import SpecialPage2 from './pages/specialPages/specialPage2/specialPage';
import CommercePage1 from './pages/commercePages/commercePage1/commercePage';
import CommercePage2 from './pages/commercePages/commercePage2/commercePage';
import {Helmet} from "react-helmet";
import icon from './assets/img/icons/logoIcon/logo.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  delay: "1s"
});
function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="icon" href={icon} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="ارائه دهنده کلیه خدمات مورد نیاز شرکتها در حوزه ثبت شرکت ، ثبت برند ، اخذ کارت بازرگانی ، مشاوره حقوقی و مشاوره مالی و مالیاتی با به کار گیری کادری مجرب و متخصص در کوتاه ترین زمان وبا کمترین هزینه"
        />
        <link rel="apple-touch-icon" href={icon} />
        <title>ثبت ب</title>
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/company/ثبت-شرکت-مسئولیت-محدود' element={<CompanyPage1 />}/>
          <Route path='/company/ثبت-شرکت-سهامی-خاص' element={<CompanyPage2 />}/>
          <Route path='/company/ثبت-موسسه-غیر-تجاری' element={<CompanyPage3 />}/>
          <Route path='/company/ثبت-شرکت-تضامنی' element={<CompanyPage4 />}/>
          <Route path='/company/ثبت-شرکت-تعاونی' element={<CompanyPage5 />}/>
          <Route path='/company/ثبت-شرکت-سهامی-عام' element={<CompanyPage6 />}/>
          <Route path='/company/ثبت-شرکت-مناطق-آزاد' element={<CompanyPage7 />}/>
          <Route path='/company/تنظیم-صورتجلسات-شرکتها' element={<CompanyPage8 />}/>
          <Route path='/brand/ثبت-برند' element={<BrandPage1 />}/>
          <Route path='/brand/ثبت-طرح-صنعتی' element={<BrandPage2 />}/>
          <Route path='/brand/ثبت-اختراع' element={<BrandPage3 />}/>
          <Route path='/financial-services/اخذ-کد-اقتصادی' element={<FinancialPage1 />}/>
          <Route path='/financial-services/اخذ-گواهی-ارزش-افزوده' element={<FinancialPage2 />}/>
          <Route path='/financial-services/اخذ-دفاتر-پلمپ-مالی' element={<FinancialPage3 />}/>
          <Route path='/financial-services/مشاوره-مالی-و-مالیاتی' element={<FinancialPage4 />}/>
          <Route path='/commerce/اخذ-کارت-بازرگانی-حقیقی' element={<CommercePage1 />}/>
          <Route path='/commerce/اخذ-کارت-بازرگانی-حقوقی' element={<CommercePage2 />}/>
          <Route path='/special-services/طراحی-سایت' element={<SpecialPage1 />}/>
          <Route path='/special-services/طراحی-لوگو' element={<SpecialPage2 />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
