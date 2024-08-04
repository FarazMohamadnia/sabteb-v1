import PagesCard from '../../../components/layout/pagesCard/PagesCard'
import { Data } from '../../../data/Data'
import '../../companyPages.css'
export default function FinancialPage2(){
    const data = Data[2][1]
    return(
        <>
            <PagesCard Data={data}/>
        </>
    )
}