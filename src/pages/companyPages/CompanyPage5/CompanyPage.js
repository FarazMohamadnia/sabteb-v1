import PagesCard from '../../../components/layout/pagesCard/PagesCard'
import { Data } from '../../../data/Data'
import '../../companyPages.css'
export default function CompanyPage5(){
    const data = Data[0][4]
    return(
        <>
            <PagesCard Data={data}/>
        </>
    )
}