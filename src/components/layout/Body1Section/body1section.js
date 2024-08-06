import Description1Cart from '../../common/description1Cart/description1cart';
import './body1section.css';
const data =[
    {
        title : 'ثبت شرکت',
        text : 'اگر به فکر ثبت شرکت هستید، ثبت ب بهترین انتخاب برای شماست. با ما، فرایند ثبت شرکت سریع، آسان و بدون دردسر خواهد بود. با ثبت شرکت، به کسب و کار خود اعتبار و قانونی بودن می‌بخشید، که این امر به جذب سرمایه‌گذاران و مشتریان بیشتر کمک می‌کند. تیم متخصص ثبت ب تمام مراحل حقوقی و اداری را برای شما انجام می‌دهد تا با خیالی آسوده کسب و کار خود را شروع کنید. برای کسب اطلاعات بیشتر و شروع فرایند ثبت شرکت، همین حالا با ما تماس بگیرید.'
    }
    ,
    {
        title : 'ثبت برند',
        text : 'اگر به فکر ثبت برند هستید، ثبت ب بهترین انتخاب برای شماست. با ثبت برند، هویت و اعتبار کسب و کارتان را تضمین کرده و از مزایای قانونی آن بهره‌مند شوید. تیم حرفه‌ای ما با تجربه‌ای گسترده در این زمینه، تمامی مراحل حقوقی و اداری را برای شما انجام می‌دهد. ثبت برند شما را در بازار متمایز کرده و به جذب مشتریان وفادار کمک می‌کند. برای شروع فرایند ثبت برند و بهره‌مندی از خدمات ما، همین حالا با ما تماس بگیرید'
    }
    ,
    {
        title : 'ثبت تغییرات',
        text : 'اگر قصد دارید تغییراتی در اساسنامه یا جزئیات ثبتی شرکت خود اعمال کنید، ثبت ب آماده است تا به شما کمک کند. ما به‌طور تخصصی صورتجلسات لازم را برای تغییرات شما تنظیم می‌کنیم و اطمینان می‌دهیم که همه موارد به درستی و مطابق با قوانین ثبت شود. با خدمات سریع و دقیق ما، تغییرات شما بدون دردسر و با اطمینان کامل انجام می‌شود. برای تنظیم صورتجلسه و اعمال تغییرات در شرکت، همین حالا با ما تماس بگیرید.'
    }
    ,
    {
        title : 'اخذ کارت بازرگانی',
        text : 'اگر به فکر دریافت کارت بازرگانی هستید، ثبت ب بهترین انتخاب برای شماست. با داشتن کارت بازرگانی، می‌توانید به صورت قانونی به واردات و صادرات بپردازید و کسب و کار خود را گسترش دهید. کارت بازرگانی، امکان دسترسی به بازارهای بین‌المللی و انعقاد قراردادهای تجاری با شرکت‌های خارجی را برای شما فراهم میکند. تیم حرفه‌ای ما تمامی مراحل حقوقی و اداری را برای شما انجام می‌دهد تا این فرایند برای شما ساده و سریع باشد. برای شروع فرایند دریافت کارت بازرگانی و بهره‌مندی از خدمات ما، همین حالا با ما تماس بگیرید'
    }
    ,
    {
        title : 'خدمات مالی و مالیاتی',
        text : 'اگر شما هم از جمله مدیرانی هستید که امور مالی و مالیاتی یکی از دغدغه های اصلی شماست ، ثبت ب با راهکارهای جامع و دقیق خود در این زمینه‌ها به کمک شما می‌آید. ما تمامی امور مالی و مالیاتی شما را با دقت و سرعت انجام می‌دهیم تا از مشکلات مالیاتی دور بمانید. با تیم متخصص ما، به راحتی می‌توانید به امور مالی و مالیاتی خود رسیدگی کنید و بر روی موفقیت کسب‌وکار خود تمرکز کنید. برای دریافت خدمات مالی و حسابداری با ما تماس بگیرید'
    }
    ,
    {
        title : 'طراحی سایت',
        text : 'با ثبت ب، می‌توانید با هر بودجه‌ای که دارید، سایت حرفه‌ای و متناسب با نیازهای کسب‌وکارتان طراحی کنید. داشتن سایت برای هر کسب‌وکاری ضروری است، زیرا این ابزار به شما کمک می‌کند تا در فضای آنلاین دیده شوید و مشتریان جدیدی جذب کنید. تیم ما با ارائه طراحی‌های متنوع و منطبق با بودجه شما، راه‌حل‌هایی کاربردی برای حضور موثر آنلاین فراهم می‌کند. برای شروع طراحی سایت و رشد کسب‌وکار خود، همین حالا با ما تماس بگیرید.'
    }
    ,
]

export default function Body1(){
    return(
        <div className='body1-set-background-Color pb-4'>
            <h3 className='text-dark text-center p-3'>خدمات متمایز ب :</h3>
            <div className='d-flex justify-content-center flex-wrap'>
                {
                    data.map(Data => <Description1Cart {...Data} />)
                }
            </div>
        </div>
    )
}