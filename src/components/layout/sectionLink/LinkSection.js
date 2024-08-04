import './LinkSection.css'
import {Link} from 'react-router-dom'
import { FaBusinessTime } from "react-icons/fa";
import { GrDocumentUser } from "react-icons/gr";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { BsBoxSeamFill } from "react-icons/bs";
import { MdStars } from "react-icons/md";
import { useState } from 'react';
import { IoMdCloseCircle } from "react-icons/io";



export default function LinkSectionComponent(){
    const [SaveId , setSaveId] = useState(null)
    const [openModal , setopenModal]=useState(false)
    const getId = (e)=>{
        const id= e.target.id
        setSaveId(id);
        setopenModal(true)
    }
    const closeModal = ()=>{
        setopenModal(false)
        setSaveId('0');
    }
    return(
        <>
            <div className='linksection-body-style'>
                <h3 className='text-light'>خدمات ما</h3>
                <div className='d-flex flex-wrap justify-content-center'>
                    <div onClick={getId} id={1} className='linkSection-box'>
                        <p id={1}>ثبت شرکت <FaBusinessTime id={1} /></p>
                    </div>
                    <div onClick={getId} id={2} className='linkSection-box'>
                        <p id={2}>خدمات مالکیتی <GrDocumentUser id={2}/></p>
                    </div>
                    <div onClick={getId} id={3} className='linkSection-box'>
                        <p id={3}>خدمات مالی <FaMoneyBillTrendUp id={3}/></p>
                    </div>
                    <div onClick={getId} id={4} className='linkSection-box'>
                        <p id={4}>خدمات بازرگانی <BsBoxSeamFill id={4}/></p>
                    </div>
                    <div onClick={getId} id={5} className='linkSection-box'>
                        <p id={5}>خدمات ویژه <MdStars id={5}/></p>
                    </div>
                </div>
                <div className={`dropdown-linksection-body-style ${openModal ? 'd-block' : 'd-none' }`}>
                    <div className='d-flex justify-content-between bg-dark p-3 border-bottom text-light align-items-center'>
                        <p className='m-0'>خدمات مورد نظر خود را انتخاب کنید</p>
                        <IoMdCloseCircle className='linkSection-description-icon' onClick={closeModal}/>
                    </div>
                    <div className={`linkSection-container-style ${SaveId == '1' ? 'd-flex' : 'd-none'}`}>
                        <Link to='/ddd'>۱- ثبت شرکت مسئولیت محدود</Link>
                        <Link to=''>۲- ثبت شرکت سهامی خاص</Link>
                        <Link to=''>۳-ثبت موسسه غیر تجاری</Link>
                        <Link to=''>۴- ثبت شرکت تضامنی</Link>
                        <Link to=''>۵- ثبت شرکت تعاونی</Link>
                        <Link to=''>۶- ثبت شرکت سهامی عام</Link>
                        <Link to=''>۷- ثبت شرکت در مناطق آزاد</Link>
                        <Link to=''>۸- ثبت و تنظیم صورتجلسات شرکتها</Link>
                    </div>
                    <div className={`linkSection-container-style ${SaveId == '2' ? 'd-flex' : 'd-none'}`}>
                        <Link to=''>۱- ثبت برند</Link>
                        <Link to=''>۲- ثبت طرح صنعتی</Link>
                        <Link to=''>۳- ثبت اختراع</Link>
                    </div>
                    <div className={`linkSection-container-style ${SaveId == '3' ? 'd-flex' : 'd-none'}`}>
                        <Link to=''>۱- اخذ کد اقتصادی</Link>
                        <Link to=''>۲- اخذ گواهی ارزش افزوده</Link>
                        <Link to=''>۳- اخذ دفاتر پلمب مالی</Link>
                        <Link to=''>۴- مشاور مالی و مالیاتی</Link>
                    </div>
                    <div className={`linkSection-container-style ${SaveId == '4' ? 'd-flex' : 'd-none'}`}> 
                        <Link to=''>۱- اخذ کارت بازرگانی حقیقی</Link>
                        <Link to=''>۲- اخذ کارت بازرگانی حقوقی</Link>
                    </div>
                    <div className={`linkSection-container-style ${SaveId == '5' ? 'd-flex' : 'd-none'}`}>
                        <Link to=''>۱-طراحی سایت</Link>
                        <Link to=''>۲-طراحی لوگو </Link>
                    </div>
                </div>
            </div>
        </>
    )
}