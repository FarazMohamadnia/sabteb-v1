import Header from '../components/layout/Header/header'
import LinkSectionComponent from '../components/layout/sectionLink/LinkSection'
import Navbar from '../components/layout/navbar/navbar'
import './Home.css'
import Body1 from '../components/layout/Body1Section/body1section'
import FullDescriptionSection from '../components/layout/fulldescription/fullDescription'
import Socialmediabuttn from '../components/common/socialMediaButton/socialmediabutton'
import DescriptionSection2 from '../components/layout/Description2/des2'
import ContactUs from '../components/layout/ContactUs/Contactus'
import FooterSection from '../components/layout/footer/footer'
import TopContactUs from '../components/layout/topContactUs/topcontactus'
import ContactButton from '../components/common/contactBtn/contactButton'
import RegisteredBrandAndCountingSection from '../components/layout/RegisteredBrandAndCountingSection/RegisteredBrandAndCountingSection'
import GradientLable from '../components/common/linearGradientLable/LinearGradientLable'
import { useEffect } from 'react'
import { scrolltopHandller } from '../data/Data'

export default function HomePage(){
    useEffect(()=>{
        scrolltopHandller()
    },[])
    return(
        <div className='font-lalehar'>
            <div>
                <Navbar />
            </div>
            <div>
                <Header />
            </div>
            <div>
                <LinkSectionComponent />
            </div>
            <div>
                <Body1 />
            </div>
            <div>
                <FullDescriptionSection />
            </div>
            <div>
                <Socialmediabuttn />
            </div>
            <div>
                <GradientLable />
            </div>
            <div>
                <DescriptionSection2 />
            </div>
            <div>
                <GradientLable />
            </div>
            <div>
                <RegisteredBrandAndCountingSection />
            </div>
            <div>
                <TopContactUs />
            </div>
            <div>
                <ContactUs />
            </div>
            <div>
                <FooterSection />
            </div>
            <div>
                <ContactButton />
            </div>
        </div>
    )
}