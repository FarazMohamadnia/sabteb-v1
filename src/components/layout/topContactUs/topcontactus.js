import { useState } from 'react';
import './topcontactus.css'
import TopContactUsCard from '../../common/topcontactusCard/TopContactUsCard';
import img1 from '../../../assets/img/icons/logoIcon/logo.jpg'
const data =[
    {
        link : '',
        img : img1 
    },
    {
        link : '',
        img : img1 
    },
    {
        link : '',
        img : img1 
    },
    {
        link : '',
        img : img1 
    },
]

export default function TopContactUs(){

    return(
        <div className='bg-dark TopContactUs-body-style'>
            {
                data.map(data =>(
                    <TopContactUsCard {...data}/>
                ))
            }

        </div>
    )
}