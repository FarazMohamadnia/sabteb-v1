import PagesCard from '../../../components/layout/pagesCard/PagesCard'
import { Data } from '../../../data/Data'
import '../../companyPages.css'
export default function CompanyPage7(){
    const data = Data[0][6]
    return(
        <>
            <PagesCard Data={data}/>
        </>
    )
}