import { useEffect, useRef } from 'react';
import './topcontactus.css'
import TopContactUsCard from '../../common/topcontactusCard/TopContactUsCard';
import img1 from '../../../assets/img/icons/logoIcon/logo.jpg'
import img2 from '../../../assets/img/icons/linkIcon/adliran_logo.png'
import img3 from '../../../assets/img/icons/linkIcon/DargahMeli.png'
import img4 from '../../../assets/img/icons/linkIcon/GHazaeie2.png'
import img5 from '../../../assets/img/icons/linkIcon/Intamedia_Logo.png'
import img6 from '../../../assets/img/icons/linkIcon/Otaghbazargani.png'
import img7 from '../../../assets/img/icons/linkIcon/Samt.png'
import img8 from '../../../assets/img/icons/linkIcon/roznamerasmi.png'
import img9 from '../../../assets/img/icons/linkIcon/asnadOamlak.png'

const data =[
    {
        link : '',
        img : img2 
    },
    {
        link : 'https://mojavez.ir/',
        img : img3 
    },
    {
        link : '',
        img : img4 
    },
    {
        link : '',
        img : img5 
    },
    {
        link : 'https://iccima.ir/',
        img : img6 
    },
    {
        link : '',
        img : img7 
    },
    {
        link : '',
        img : img8 
    },
    {
        link : '',
        img : img9 
    },
]

export default function TopContactUs(){
    const marqueeRef = useRef(null);

    useEffect(() => {
        const marquee = marqueeRef.current;
        const clone = marquee.innerHTML;

        marquee.innerHTML += clone;

        const onAnimationEnd = () => {
            marquee.scrollTo(0, 0);
        };

        marquee.addEventListener('animationiteration', onAnimationEnd);

        return () => {
            marquee.removeEventListener('animationiteration', onAnimationEnd);
        };
    }, []);

    return(
        <div className='bg-dark TopContactUs-body-style'>
            <div className='marquee' ref={marqueeRef}>
            {
                data.map(data =>(
                    <TopContactUsCard {...data}/>
                ))
            }
            </div>
        </div>
    )
}