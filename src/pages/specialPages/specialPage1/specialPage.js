import PagesCard from '../../../components/layout/pagesCard/PagesCard'
import { Data } from '../../../data/Data'
import '../../companyPages.css'
export default function SpecialPage1(){
    const data = Data[4][0]
    return(
        <>
            <PagesCard Data={data}/>
        </>
    )
}