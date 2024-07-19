import RegisteredBrand from "../../common/RegisteredBrand/RegisteredBrand";
import { Col } from 'react-bootstrap'
import CountSection from "../../common/countSection/countingSection";
import './RegisteredBrandAndCountingSection.css'
import AnimatedArrow from "../../common/RegisteredBrandIcon/RegisteredBrandIcon";

const image = [
    {
        img:''
    },
    {
        img:''
    },
    {
        img:''
    },
    {
        img:''
    },
]


export default function RegisteredBrandAndCountingSection(){
    return(
        <div className="d-md-flex RegisteredBrandAndCountingSection-container-style">
            <Col className="RegisteredBrandAndCountingSection-brandsection-style" md={6}>
                <div className="m-1">
                    <p className="fs-4 ps-4 my-3 border-start text-light">شرکت ها و برند های ثبت شده </p>
                </div>
                <div className=" d-flex flex-wrap justify-content-center">
                    <RegisteredBrand />
                    <RegisteredBrand />
                    <RegisteredBrand />
                    <RegisteredBrand />
                    <RegisteredBrand />
                    <RegisteredBrand />
                    <RegisteredBrand />
                    <RegisteredBrand />
                    <RegisteredBrand />
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