import PagesCard from '../../../components/layout/pagesCard/PagesCard'
import { Data } from '../../../data/Data'
import '../../companyPages.css'
export default function BrandPage3(){
    const data = Data[1][2]
    return(
        <>
            <PagesCard Data={data}/>
        </>
    )
}