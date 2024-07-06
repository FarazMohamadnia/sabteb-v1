import Header from '../components/layout/Header/header'
import LinkSectionComponent from '../components/layout/sectionLink/LinkSection'
import Navbar from '../components/layout/navbar/navbar'
import './Home.css'
import Body1 from '../components/layout/Body1Section/body1section'
import FullDescriptionSection from '../components/layout/fulldescription/fullDescription'
import Socialmediabuttn from '../components/common/socialMediaButton/socialmediabutton'
import DescriptionSection2 from '../components/layout/Description2/des2'

export default function HomePage(){
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
                <DescriptionSection2 />
            </div>
        </div>
    )
}