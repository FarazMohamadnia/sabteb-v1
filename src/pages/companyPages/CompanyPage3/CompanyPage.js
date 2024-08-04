import PagesCard from '../../../components/layout/pagesCard/PagesCard'
import { Data } from '../../../data/Data'
import '../../companyPages.css'
export default function CompanyPage3(){
    const data = Data[0][2]
    return(
        <>
            <PagesCard Data={data}/>
        </>
    )
}