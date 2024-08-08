import Col from 'react-bootstrap/esm/Col'
import imgIcon from '../../../assets/img/icons/descriptionIcon/undraw_Certificate_re_yadi.png'
import './des2.css'
import { BsStopwatchFill } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaMoneyCheck } from "react-icons/fa6";
import { BiMoneyWithdraw } from "react-icons/bi";


import { TypeAnimation } from 'react-type-animation';

export default function DescriptionSection2(){
    return(
        <div className='DescriptionSection2-body-style'>
        <div className='mb-3 text-center DescriptionSection2-responsiv-font-style'>
            <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed once, initially
                  'ثبت ب ارائه دهنده خدمات متمایز ثبتی با قیمت های رقابتی',
                  1500,
                  'ثبت ب ارائه دهنده خدمات متمایز ثبتی با بازگشت وجه در صورت عدم موفقیت',
                  1500,
                  'ثبت ب ارائه دهنده خدمات متمایز ثبتی با زمان بندی دقیق و تضمین زمانی',
                  1500,
                  'ثبت ب ارائه دهنده خدمات متمایز ثبتی با پشتیبانی حقوقی و مشاوره رایگان',
                  1500,
                  'ثبت ب ارائه دهنده خدمات متمایز ثبتی با شفافیت هزینه ها',
                  1500,
                  'ثبت ب ارائه دهنده خدمات متمایز ثبتی با پشتیبانی کامل فرایند ثبت',
                  1500
                ]}
                speed={50}
                repeat={Infinity}
                className=''
            />
        </div>
        <div className='d-lg-flex align-items-center'>
            <Col data-aos="fade-left" className='DescriptionSection2-section1-style' lg={3}>
                <h3>تضمین کار ما </h3>
                <img src={imgIcon} />
            </Col>
            <Col lg={9}>
                <div className='d-sm-flex flex-wrap justify-content-center'>
                    <Col data-aos="zoom-in" className='m-2 p-1' sm={6} md={4} lg={4}>
                        <div className='DescriptionSection2-box-style'>
                            <p><BiMoneyWithdraw size={'2rem'}/></p>
                            <p>بازگشت وجه در صورت عدم موفقیت</p>
                            <p>ما ضمانت میکنیم که در صورت نبود منع قانونی به کلیه مفاد قرارداد مون عمل کنیم و در غیر این صورت عین وجه دریافتی رو به شما عودت بدیم </p>
                        </div>
                    </Col>
                    <Col data-aos="zoom-in" className='m-2 p-1' sm={6} md={4} lg={4}>
                        <div className='DescriptionSection2-box-style'>
                            <p><BsStopwatchFill size={'2rem'}/></p>
                            <p>زمان‌بندی دقیق و تضمین زمان</p>
                            <p>ما ضمانت میکنیم در زمان مقرر کلیه تعهدات خودمون در قرارداد را انجام بدیم و کارو به شما تحویل بدیم </p>
                        </div>
                    </Col>
                    <Col data-aos="zoom-in" className='m-2 p-1' sm={6} md={4} lg={4}>
                        <div className='DescriptionSection2-box-style'>
                            <p><BiSupport size={'2rem'}/></p>
                            <p>پشتیبانی حقوقی و مشاوره رایگان</p>
                            <p>ما ضمانت میکنیم پس از اتمام قرارداد به صورت یک یار و مشاور در کنار شما باشیم و به سوالات حقوقی شما درخصوص شرکت تون پاسخ بدیم </p>
                        </div>
                    </Col>
                    <Col data-aos="zoom-in" className='m-2 p-1' sm={6} md={4} lg={4}>
                        <div className='DescriptionSection2-box-style'>
                            <p><FaMoneyBillWave size={'2rem'}/></p>
                            <p> شفافیت هزینه‌ها</p>
                            <p>ما ضمانت میکنیم که کمترین هزینه ممکن رو به صورت شفاف از شما دریافت کنیم و هیچ مبلغی اضافه بر مبلغ توافق شده در قرارداد از شما دریافت نکنیم</p>
                        </div>
                    </Col>
                    <Col data-aos="zoom-in" className='m-2 p-1' sm={6} md={4} lg={4}>
                        <div className='DescriptionSection2-box-style'>
                            <p><FaMoneyCheck size={'2rem'}/></p>
                            <p>پشتیبانی کامل فرآیند ثبت</p>
                            <p>ما ضمانت میکنیم لحظه به لحظه از فرایند ثبتی مورد قرارداد مون گزارش بدیم و شما رو در جریان پروسه کامل قرار بدیم</p>
                        </div>
                    </Col>
                </div>
            </Col>
        </div>
        </div>
    )
}