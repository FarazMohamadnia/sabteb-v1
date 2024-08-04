import PagesCard from '../../../components/layout/pagesCard/PagesCard'
import { Data } from '../../../data/Data'
import '../../companyPages.css'
export default function CompanyPage1(){
    const data = Data[0][0]
    return(
        <>
            <PagesCard Data={data}/>
        </>
    )
}