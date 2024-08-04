import PagesCard from '../../../components/layout/pagesCard/PagesCard'
import { Data } from '../../../data/Data'
import '../../companyPages.css'
export default function CommercePage1(){
    const data = Data[3][0]
    return(
        <>
            <PagesCard Data={data}/>
        </>
    )
}