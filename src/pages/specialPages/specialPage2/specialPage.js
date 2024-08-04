import PagesCard from '../../../components/layout/pagesCard/PagesCard'
import { Data } from '../../../data/Data'
import '../../companyPages.css'
export default function SpecialPage2(){
    const data = Data[4][1]
    return(
        <>
            <PagesCard Data={data}/>
        </>
    )
}