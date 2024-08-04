import PagesCard from '../../../components/layout/pagesCard/PagesCard'
import { Data } from '../../../data/Data'
import '../../companyPages.css'
export default function BrandPage1(){
    const data = Data[1][0]
    return(
        <>
            <PagesCard Data={data}/>
        </>
    )
}