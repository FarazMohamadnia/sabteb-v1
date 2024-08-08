import './centerHeaderSection.css'
import Col from 'react-bootstrap/Col';
import img from '../../../assets/img/icons/logoIcon/logo.jpg'
import Button from 'react-bootstrap/esm/Button';
import { TypeAnimation } from 'react-type-animation';
import {MovingComponent} from 'react-moving-text';
import { FaPhoneVolume } from "react-icons/fa6";
export default function CenterHeaderSection(){
    return(
        <div className="header-body-section-for-centerHeader-section flex-md-row d-flex flex-column-reverse align-items-center">
            <Col md={6}>
                <h2 className='font-Casablanca'>
                    <MovingComponent 
                      type="flipFromBottom"
                      duration="1100ms"
                      delay="0.5s"
                      direction="normal"
                      timing="linear"
                      iteration="1"
                      fillMode="none">
                        ثبت ب
                    </MovingComponent>
                </h2>
                <MovingComponent
                  type="shadow"
                  duration="1500ms"
                  delay="0s"
                  direction="normal"
                  timing="linear"
                  iteration="5"
                  fillMode="forwards">
                  <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed once, initially
                      'ارائه دهنده انواع خدمات شرکتی با بهترین قیمت',
                      1500,
                      'ارائه دهنده انواع خدمات شرکتی در کمترین زمان',
                      1500,
                      'ارائه دهنده انواع خدمات شرکتی با تیمی مجرب ',
                      1500,
                      'ارائه دهنده انواع خدمات شرکتی با ضمانت اجرایی کامل',
                      1500,
                    ]}
                    speed={50}
                    repeat={Infinity}
                    className=''
                />
                </MovingComponent>
                <p data-aos="fade-left" className='mt-2'>
                ثبت ب ، برای شروع کسب و کار 
                <br/>
                امروزه ثبت شرکت و برند ، یکی از اصلی‌ترین عوامل در راستای ارتقاء کسب و کار  و حفظ حقوق مادی و معنوی در بین مدیران موفق است.
                <br/>            
                ثبت ب، با بیش از ۱۴ سال تجربه در زمینه‌های ثبتی و حقوقی و با بهره‌گیری از کارشناسان متخصص و مجرب در زمینه ثبت شرکت، ثبت برند، ثبت تغییرات و تصمیمات شرکت، ثبت نام و برند تجاری و کلیه امور مربوط به شرکت‌ها، آمادگی کامل خود را برای خدمت‌رسانی به صاحبین کسب و کار در تمامی رسته های شغلی با افتخار اعلام می‌نماید.
                <br/>     
                علاوه بر خدمات ثبت و امور مالیاتی و حقوقی شرکت ها، ما با خدماتی همچون طراحی و راه اندازی سایت، طراحی لوگو و سربرگ آماده خدمت رسانی به شما عزیزان هستیم.
                </p>
            </Col>
            <Col md={6}>
                <MovingComponent
                  type="fadeIn"
                  duration="900ms"
                  delay="0.5s"
                  direction="normal"
                  timing="linear"
                  iteration="1"
                  fillMode="none">
                    <img src={img}/>
                </MovingComponent>
                <MovingComponent
                  type="swing"
                  duration="1100ms"
                  delay="5s"
                  direction="normal"
                  timing="ease"
                  iteration="2"
                  fillMode="none">
                  <a href='tel:02126231412'><Button className='d-block'>همین حالا با ما تماس بگیرید <FaPhoneVolume /></Button></a>
                </MovingComponent>
            </Col>

        </div>
    )
}