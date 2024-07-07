import './footer.css'
import Col from "react-bootstrap/esm/Col";
import {Link} from 'react-router-dom'
import { FaBusinessTime } from "react-icons/fa";
import { GrDocumentUser } from "react-icons/gr";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { BsBoxSeamFill } from "react-icons/bs";
import { MdStars } from "react-icons/md";
import { IoShareSocialSharp } from "react-icons/io5";


export default function FooterSection(){
    return(
        <div className='footer-background-body text-light'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="1" d="M0,96L18.5,90.7C36.9,85,74,75,111,90.7C147.7,107,185,149,222,176C258.5,203,295,213,332,186.7C369.2,160,406,96,443,90.7C480,85,517,139,554,160C590.8,181,628,171,665,149.3C701.5,128,738,96,775,112C812.3,128,849,192,886,197.3C923.1,203,960,149,997,138.7C1033.8,128,1071,160,1108,192C1144.6,224,1182,256,1218,250.7C1255.4,245,1292,203,1329,192C1366.2,181,1403,203,1422,213.3L1440,224L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z"></path></svg>
            <div className='footerSection-body-style justify-content-between d-flex flex-column flex-wrap flex-sm-row p-3'>
                <Col sm={6} md={4} lg={2} className='p-3'>
                    <p><FaBusinessTime /> - ثبت شرکت</p>
                    <p><Link to='/ddd'>۱- ثبت شرکت مسئولیت محدود</Link></p>
                    <p><Link to=''>۲- ثبت شرکت سهامی خاص</Link></p>
                    <p><Link to=''>۳-ثبت موسسه غیر تجاری</Link></p>
                    <p><Link to=''>۴- ثبت شرکت تضامنی</Link></p>
                    <p><Link to=''>۵- ثبت شرکت تعاونی</Link></p>
                    <p><Link to=''>۶- ثبت شرکت سهامی عام</Link></p>
                    <p><Link to=''>۷- ثبت شرکت در مناطق آزاد</Link></p>
                    <p><Link to=''>۸- ثبت و تنظیم صورتجلسات شرکتها</Link></p>
                </Col>
                <Col sm={6} md={4} lg={2} className='p-3'>
                    <p> <GrDocumentUser />- مالکیت صنعتی و معنوی</p>
                    <p><Link to=''>۱- ثبت برند</Link></p>
                    <p><Link to=''>۲- ثبت طرح صنعتی</Link></p>
                    <p><Link to=''>۳- ثبت اختراع</Link></p>
                </Col>
                <Col sm={6} md={4} lg={2} className='p-3'>
                    <p><FaMoneyBillTrendUp />- خدمات مالی</p>
                    <p><Link to=''>۱- اخذ کد اقتصادی</Link></p>
                    <p><Link to=''>۲- اخذ گواهی ارزش افزوده</Link></p>
                    <p><Link to=''>۳- اخذ دفاتر پلمب مالی</Link></p>
                </Col>
                <Col sm={6} md={4} lg={2} className='p-3'>
                    <p><BsBoxSeamFill />- خدمات بازرگانی</p>
                    <p><Link to=''>۱- اخذ کارت بازرگانی حقیقی</Link></p>
                    <p><Link to=''>۲- اخذ کارت بازرگانی حقوقی</Link></p>
                </Col>
                <Col sm={6} md={4} lg={2} className='p-3'>
                    <p><MdStars />- خدمات ویژه</p>
                    <p><Link to=''>۱-طراحی سایت </Link></p>
                    <p><Link to=''>۲-طراحی لوگو </Link></p>
                </Col>
                <Col sm={6} md={4} lg={2} className='p-3'>
                    <p><IoShareSocialSharp />- شبکه ها اجتماعی </p>
                    <p><Link to=''>۱-واتساپ</Link></p>
                    <p><Link to=''>۲-تلگرام</Link></p>
                    <p><Link to=''>۳-اینستاگرام</Link></p>
                    <p><Link to=''>۴-روبیکا</Link></p>
                </Col>
            </div>
            <div>
                e namad
            </div>
        </div>
    )
}