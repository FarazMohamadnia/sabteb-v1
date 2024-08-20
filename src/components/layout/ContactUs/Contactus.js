import Col from 'react-bootstrap/esm/Col'
import './Contactus.css'
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { MdOutlineShareLocation } from "react-icons/md";
import { FaMobile } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

export default function ContactUs(){
    return(
        <div className='bg-dark text-light p-3'>
            <h3 className='m-2 text-center'>ارتباط با ما</h3>
            <div className='d-flex flex-column-reverse flex-md-row mt-4'>
                <Col md={6}>
                    <div style={{Width: '100%'}}><iframe className='contactUs-iframe-body-style' width="100%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=35.777687224015736,%2051.41587180445575+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps trackers</a></iframe></div>
                </Col>
                <Col md={6} className='text-center'>
                    <p>راه های ارتباطی</p>
                    <div className='text-start ms-4 d-sm-flex flex-wrap'>
                        <p className='w-50 fs-6'><LiaPhoneVolumeSolid size={'1.3rem'}/>-021-26232806</p>
                        <p className='w-50 fs-6'><LiaPhoneVolumeSolid size={'1.3rem'}/>-021-26231412</p>
                        <p className='w-50 fs-6'><FaMobile size={'1.3rem'}/>-09126711680 </p>
                        <p className='w-50 fs-6'><CgMail size={'1.3rem'}/>-sabtbe@gmail.com</p>
                        <p className='w-100 fs-6'><MdOutlineShareLocation size={'1.2rem'} />-آدرس : خیابان ولیعصر رو به روی پارک ملت خیابان آرامش پلاک 24 ط 2 </p>
                    </div>
                </Col>
            </div>
        </div>
    )
}