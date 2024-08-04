import PagesCard from '../../../components/layout/pagesCard/PagesCard'
import { Data } from '../../../data/Data'
import '../../companyPages.css'
export default function BrandPage2(){
    const data = Data[1][1]
    return(
        <>
            <PagesCard Data={data}/>
        </>
    )
}