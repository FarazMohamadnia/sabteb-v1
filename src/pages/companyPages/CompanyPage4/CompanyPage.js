import PagesCard from '../../../components/layout/pagesCard/PagesCard'
import { Data } from '../../../data/Data'
import '../../companyPages.css'
export default function CompanyPage4(){
    const data = Data[0][3]
    return(
        <>
            <PagesCard Data={data}/>
        </>
    )
}