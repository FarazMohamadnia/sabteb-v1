import PagesCard from '../../../components/layout/pagesCard/PagesCard'
import { Data } from '../../../data/Data'
import '../../companyPages.css'
export default function FinancialPage4(){
    const data = Data[2][3]
    return(
        <>
            <PagesCard Data={data}/>
        </>
    )
}