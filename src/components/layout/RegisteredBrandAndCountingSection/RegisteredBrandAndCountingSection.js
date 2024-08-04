import RegisteredBrand from "../../common/RegisteredBrand/RegisteredBrand";
import { Col } from 'react-bootstrap'
import CountSection from "../../common/countSection/countingSection";
import './RegisteredBrandAndCountingSection.css'
import AnimatedArrow from "../../common/RegisteredBrandIcon/RegisteredBrandIcon";

import brandImage1 from '../../../assets/img/icons/BrandImg/burgerPlanet.jpg'
import brandImage2 from '../../../assets/img/icons/BrandImg/32.png'
import brandImage3 from '../../../assets/img/icons/BrandImg/666.png'
import brandImage4 from '../../../assets/img/icons/BrandImg/icepack.png'
import brandImage5 from '../../../assets/img/icons/BrandImg/Irisl-logo.png'
import brandImage6 from '../../../assets/img/icons/BrandImg/sepehrelectric-300x300.png'
import brandImage7 from '../../../assets/img/icons/BrandImg/لوگو_شهرداری_تهران.svg.png'


const image = [
    brandImage1,
    brandImage2,
    brandImage3,
    brandImage4,
    brandImage5,
    brandImage6,
    brandImage7
]


export default function RegisteredBrandAndCountingSection(){
    return(
        <div className="d-md-flex RegisteredBrandAndCountingSection-container-style">
            <Col className="RegisteredBrandAndCountingSection-brandsection-style" md={6}>
                <div className="m-1">
                    <p className="fs-4 ps-4 my-3 border-start text-dark">برخی از مشتریان : </p>
                </div>
                <div className=" d-flex flex-wrap justify-content-center">
                    {
                        image.map(data => <RegisteredBrand img={data} />)
                    }
                </div>
                <div className="RegisteredBrandAndCountingSection-brandsection-icon-style">
                    <p><AnimatedArrow /></p>
                </div>
            </Col>
            <Col md={6}>
                <CountSection />
            </Col>
        </div>
    )
}