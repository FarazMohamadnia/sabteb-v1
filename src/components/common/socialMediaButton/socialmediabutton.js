import { useState } from 'react';
import './socialmediabutton.css'
import { SiPluscodes } from "react-icons/si";
import { FaWhatsapp, FaInstagram ,FaTelegramPlane } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";

import robikaIcon from '../../../assets/img/icons/robikaIcon/logo-Rubika-app-download-png-vector-Toranjlogo (2).png'
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
                <Link><FaWhatsapp color='green' size={'1.95rem'}/></Link> <Link><FaInstagram color='pink' size={'1.95rem'}/></Link> <Link><FaTelegramPlane color='blue' size={'1.95rem'}/></Link> 
            </div>
            <div onClick={openModalHandller} className='w-100 h-100 d-flex justify-content-center align-items-center'>
                <MdSupportAgent size={'2.3rem'}/>
            </div>
        </div>
    </div>
    )
}