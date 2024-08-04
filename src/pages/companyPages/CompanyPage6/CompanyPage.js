import PagesCard from '../../../components/layout/pagesCard/PagesCard'
import { Data } from '../../../data/Data'
import '../../companyPages.css'
export default function CompanyPage6(){
    const data = Data[0][5]
    return(
        <>
            <PagesCard Data={data}/>
        </>
    )
}