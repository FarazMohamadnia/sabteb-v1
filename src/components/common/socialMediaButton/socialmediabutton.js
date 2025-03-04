import { useState } from 'react';
import './socialmediabutton.css'
import { FaWhatsapp, FaInstagram ,FaTelegramPlane } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import {Link} from 'react-router-dom'

export default function Socialmediabuttn(){
    const [openModal , setopenModal] =useState(false);
    const openModalHandller = (e)=>{
        if(openModal == false){
            setopenModal(true)
        }else if(openModal == true){
            setopenModal(false)
        }
        console.log(openModal);
    }
    return(
    <div className='position-relative'>
        <div className="socialMediaBtn-body-style">
            <div className={`${openModal ? 'socialMediaBtn-body-dropdown-style' : 'd-none w-0'} `}>
                <Link to={'https://wa.me/989127611680'}><FaWhatsapp color='green' size={'1.95rem'}/></Link> <Link to={'https://www.instagram.com/sabte_b'}><FaInstagram color='pink' size={'1.95rem'}/></Link> <Link to={'https://t.me/sabtbe'}><FaTelegramPlane color='blue' size={'1.95rem'}/></Link> 
            </div>
            <div onClick={openModalHandller} className='w-100 h-100 d-flex justify-content-center align-items-center'>
                <MdSupportAgent size={'2.3rem'}/>
            </div>
        </div>
    </div>
    )
}