import Col from 'react-bootstrap/esm/Col'
import './Contactus.css'
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { MdOutlineShareLocation } from "react-icons/md";
import { CgMail } from "react-icons/cg";

export default function ContactUs(){
    return(
        <div className='bg-dark text-light p-3'>
            <h3 className='m-2 text-center'>ارتباط با ما</h3>
            <div className='d-flex flex-column-reverse flex-md-row mt-4'>
                <Col md={6}>
                    <div style={{Width: '100%'}}><iframe className='contactUs-iframe-body-style' width="100%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=35.7775420%20,%2051.4162427+(My%20Business%20Name)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps trackers</a></iframe></div>
                </Col>
                <Col md={6} className='text-center'>
                    <p>راه های ارتباطی</p>
                    <div className='text-start ms-4 d-sm-flex flex-wrap'>
                        <p className='w-50'><LiaPhoneVolumeSolid />-021-26232806</p>
                        <p className='w-50'><LiaPhoneVolumeSolid />-021-26231412</p>
                        <p className='w-50'><LiaPhoneVolumeSolid />-09126711680 </p>
                        {/* <p className='w-50'><LiaPhoneVolumeSolid />-0912333</p> */}
                        <p className='w-50'><CgMail />-sabtbe@gmail.com</p>
                        {/* <p className='w-50'><CgMail />-kskks@gmail.com</p> */}
                        <p className='w-100'><MdOutlineShareLocation size={'1.2rem'} />-آدرس : خیابان ولیعصر رو به روی پارک ملت خیابان آرامش پلاک 24 ط 2 </p>
                    </div>
                </Col>
            </div>
        </div>
    )
}