import Description1Cart from '../../common/description1Cart/description1cart';
import './body1section.css';
const data =[
    {
        title : 'l;kl;dklsd',
        text : 'lkjdllfhlfhs'
    }
    ,
    {
        title : 'l;kl;dklsd',
        text : 'lkjdllfhlfhs'
    }
    ,
    {
        title : 'l;kl;dklsd',
        text : 'lkjdllfhlfhs'
    }
    ,
    {
        title : 'l;kl;dklsd',
        text : 'lkjdllfhlfhs'
    }
    ,
]

export default function Body1(){
    return(
        <div className='body1-set-background-Color pb-4'>
            <h3 className='text-light text-center p-3'>چرا خدمات ما</h3>
            <div className='d-flex justify-content-center flex-wrap'>
                {
                    data.map(Data => <Description1Cart {...Data} />)
                }
            </div>
        </div>
    )
}