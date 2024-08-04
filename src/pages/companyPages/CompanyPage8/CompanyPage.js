import PagesCard from '../../../components/layout/pagesCard/PagesCard'
import { Data } from '../../../data/Data'
import '../../companyPages.css'
export default function CompanyPage8(){
    const data = Data[0][7]
    return(
        <>
            <PagesCard Data={data}/>
        </>
    )
}