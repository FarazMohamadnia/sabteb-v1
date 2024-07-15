import { Link } from 'react-router-dom'
import { FaPhoneVolume } from "react-icons/fa6";

import './contactButton.css'
export default function ContactButton(){
    return(
        <div className='contact-BTN-style-body d-sm-none d-flex align-items-center justify-content-center'>
            <Link><p className='fs-6 p-0 m-0'>برای مشاوره تخصصی تماس بگیرید  <FaPhoneVolume color='green'/>
</p></Link>
        </div>
    )
}