import { Link } from 'react-router-dom';
import './TopContactUsCard.css';

export default function TopContactUsCard({link , img}){
    return(
        <Link to={link}>
            <div className='TopContactUsCard-body-style' style={{backgroundImage : `url(${img})`}}>

            </div>
        </Link>
    )
}