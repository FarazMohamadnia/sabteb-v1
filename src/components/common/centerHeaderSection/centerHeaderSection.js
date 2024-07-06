import './centerHeaderSection.css'
import Col from 'react-bootstrap/Col';
import img from '../../../assets/img/test/pixlr-image-generator-66b1a575-c32a-4ab7-8257-06a0fa1899fd.png'
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
                       شرکت ثبت ب
                    </MovingComponent>
                </h2>
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
                <p className='mt-2'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
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
                  <Button className='d-block'>همین حالا با ما تماس بگیرید <FaPhoneVolume /></Button>
                </MovingComponent>
            </Col>

        </div>
    )
}