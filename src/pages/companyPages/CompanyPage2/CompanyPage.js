import PagesCard from '../../../components/layout/pagesCard/PagesCard'
import { Data } from '../../../data/Data'
import '../../companyPages.css'
export default function CompanyPage2(){
    const data = Data[0][1]
    return(
        <>
            <PagesCard Data={data}/>
        </>
    )
}