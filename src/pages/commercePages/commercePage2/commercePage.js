import PagesCard from '../../../components/layout/pagesCard/PagesCard'
import { Data } from '../../../data/Data'
import '../../companyPages.css'
export default function CommercePage2(){
    const data = Data[3][1]
    return(
        <>
            <PagesCard Data={data}/>
        </>
    )
}