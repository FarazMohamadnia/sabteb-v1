import PagesCard from '../../../components/layout/pagesCard/PagesCard'
import { Data } from '../../../data/Data'
import '../../companyPages.css'
export default function FinancialPage1(){
    const data = Data[2][0]
    return(
        <>
            <PagesCard Data={data}/>
        </>
    )
}