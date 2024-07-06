import Col from 'react-bootstrap/esm/Col'
import imgIcon from '../../../assets/img/icons/descriptionIcon/undraw_Certificate_re_yadi.png'
import './des2.css'
import { TypeAnimation } from 'react-type-animation';

export default function DescriptionSection2(){
    return(
        <div className='DescriptionSection2-body-style'>
        <div className='mb-3 text-center DescriptionSection2-responsiv-font-style'>
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
        </div>
        <div className='d-lg-flex align-items-center'>
            <Col className='DescriptionSection2-section1-style' lg={3}>
                <h3>تضمین کار ما </h3>
                <img src={imgIcon} />
            </Col>
            <Col lg={9}>
                <div className='d-sm-flex flex-wrap justify-content-center'>
                    <Col className='m-2 p-1' sm={6} md={4} lg={4}>
                        <div className='DescriptionSection2-box-style'>
                            <p>icon</p>
                            <p>ضمانت ها</p>
                            <p>ضمانت ها</p>
                        </div>
                    </Col>
                    <Col className='m-2 p-1' sm={6} md={4} lg={4}>
                        <div className='DescriptionSection2-box-style'>
                            <p>icon</p>
                            <p>mozoo</p>
                            <p>tozihat</p>
                        </div>
                    </Col>
                    <Col className='m-2 p-1' sm={6} md={4} lg={4}>
                        <div className='DescriptionSection2-box-style'>
                            <p>icon</p>
                            <p>mozoo</p>
                            <p>tozihat</p>
                        </div>
                    </Col>
                    <Col className='m-2 p-1' sm={6} md={4} lg={4}>
                        <div className='DescriptionSection2-box-style'>
                            <p>icon</p>
                            <p>mozoo</p>
                            <p>tozihat</p>
                        </div>
                    </Col>
                </div>
            </Col>
        </div>
        </div>
    )
}