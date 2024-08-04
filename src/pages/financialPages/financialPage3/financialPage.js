import PagesCard from '../../../components/layout/pagesCard/PagesCard'
import { Data } from '../../../data/Data'
import '../../companyPages.css'
export default function FinancialPage3(){
    const data = Data[2][2]
    return(
        <>
            <PagesCard Data={data}/>
        </>
    )
}