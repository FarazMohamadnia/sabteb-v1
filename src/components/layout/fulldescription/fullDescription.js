import './fullDescription.css'
import companyImg from '../../../assets/img/homeImages/companyImgs.jpg'
import brandImg from '../../../assets/img/homeImages/brandImg.jpg'
import commerceImg from '../../../assets/img/homeImages/commerceImg.jpg'
import financeImg from '../../../assets/img/homeImages/financeImg.jpg'
import specialImage from '../../../assets/img/homeImages/specialImage.jpg'
import Accordion from 'react-bootstrap/Accordion';
export default function FullDescriptionSection(){
    return(
        <div className='fullDescription-body-style'>
            <ul data-aos="fade-left" className='fullDescription-link-style'>
                <li><a href='#section1'>خدمات تخصصی ثبتی شرکت ها</a></li>
                <li><a href='#section2'> خدمات تخصصی مالی و مالیاتی</a></li>
                <li><a href='#section3'> خدمات تخصصی بازرگانی</a></li>
                <li><a href='#section4'> خدمات ویژه</a></li>
                <li><a href='#section5'> خدماتت تخصصی مالکیت صنعتی و معنوی</a></li>
            </ul>
            <div className='fullDescription-Des-body-styles'>
                <div className='fullDescription-Des-body-styles-div'>
                    <img data-aos="zoom-in" src={companyImg}/>
                    <h2 data-aos="fade-left" id='section1'>خدمات تخصصی ثبتی شرکت ها</h2>
                    <p data-aos="fade-left">
                      ثبت شرکت یکی از گام‌های اساسی برای شروع یک کسب‌وکار موفق در ایران است. این فرآیند نه تنها به رسمیت شناخته شدن کسب‌وکار شما کمک می‌کند، بلکه اعتبار قانونی و اقتصادی به آن می‌بخشد. در این مقاله، به بررسی خدمات تخصصی ثبتی و انواع مختلف شرکت‌هایی که می‌توان در ایران ثبت کرد، می‌پردازیم.
                    </p>
                    <Accordion data-aos="zoom-in" defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>۱- ثبت شرکت مسئولیت محدود </Accordion.Header>
                        <Accordion.Body>
                          شرکت مسئولیت محدود یکی از پرطرفدارترین انواع شرکت‌ها در ایران است. این نوع شرکت بین دو یا چند نفر با مسئولیت محدود به میزان سرمایه‌شان تشکیل می‌شود. در این نوع شرکت، هر شریک فقط به میزان سرمایه‌گذاری خود مسئول تعهدات و دیون شرکت است. این ساختار برای کسب‌وکارهای کوچک و متوسط بسیار مناسب است و فرایند ثبت آن نیز نسبتاً ساده و سریع است. مدارک مورد نیاز شامل اساسنامه، اظهارنامه، و مدارک شناسایی شرکا می‌باشد.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>۲- ثبت شرکت سهامی خاص</Accordion.Header>
                        <Accordion.Body>
                          شرکت سهامی خاص شرکتی است که سرمایه آن به سهام تقسیم شده و مسئولیت هر سهامدار محدود به مبلغ اسمی سهام آن‌ها است. این نوع شرکت برای کسب‌وکارهای بزرگ‌تر مناسب است و قابلیت جذب سرمایه از طریق فروش سهام را داراست. مراحل ثبت شامل تهیه و تنظیم اساسنامه، اظهارنامه و ارائه مدارک شناسایی مدیران و سهامداران است. حداقل تعداد سهامداران در این نوع شرکت سه نفر می‌باشد.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>۳-ثبت موسسه غیر تجاری</Accordion.Header>
                        <Accordion.Body>
                          موسسات غیر تجاری به موسساتی اطلاق می‌شود که فعالیت‌های غیر تجاری مانند فرهنگی، علمی، آموزشی و خیریه انجام می‌دهند. این موسسات می‌توانند درآمد داشته باشند اما هدف اصلی آن‌ها کسب سود نیست. برای ثبت موسسه غیر تجاری، نیاز به تهیه و تنظیم اساسنامه، اظهارنامه و ارائه مدارک شناسایی اعضا می‌باشد. این موسسات در برخی از موارد از پرداخت مالیات معاف هستند و امکان دریافت کمک‌های دولتی و غیر دولتی را دارند.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>۴- ثبت شرکت تضامنی</Accordion.Header>
                        <Accordion.Body>
                          شرکت تضامنی شرکتی است که در آن هر یک از شرکا به میزان تمامی بدهی‌های شرکت مسئولیت دارند. این نوع شرکت برای فعالیت‌های اقتصادی خانوادگی و دوستانه مناسب است. مدارک لازم برای ثبت شرکت تضامنی شامل اساسنامه، اظهارنامه و مدارک شناسایی شرکا می‌باشد. این شرکت‌ها اعتبار بالایی دارند زیرا شرکا به صورت تضامنی مسئولیت دارند.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="4">
                        <Accordion.Header>۵- ثبت شرکت تعاونی</Accordion.Header>
                        <Accordion.Body>
                          شرکت تعاونی به منظور بهبود وضعیت اقتصادی و اجتماعی اعضا تشکیل می‌شود و بر اساس همکاری و مشارکت اعضا فعالیت می‌کند. اعضای تعاونی می‌توانند از خدمات و تسهیلات ویژه‌ای بهره‌مند شوند. برای ثبت شرکت تعاونی، نیاز به تهیه و تنظیم اساسنامه، اظهارنامه و مدارک شناسایی اعضا و مجوز از وزارت تعاون، کار و رفاه اجتماعی می‌باشد. این نوع شرکت‌ها می‌توانند از حمایت‌های دولتی نیز بهره‌مند شوند.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="5">
                        <Accordion.Header>۶- ثبت شرکت سهامی عام</Accordion.Header>
                        <Accordion.Body>
                          شرکت سهامی عام شرکتی با ماهیت دولتی است که سهام آن به عموم مردم عرضه می‌شود و قابلیت معامله در بورس را دارد. این نوع شرکت برای کسب‌وکارهای بزرگ و پروژه‌های عظیم مناسب است. مراحل ثبت شامل تهیه و تنظیم اساسنامه، اظهارنامه و ارائه مدارک شناسایی مدیران و سهامداران است. شرکت سهامی عام نیاز به جذب سرمایه بیشتری دارد و معمولاً توسط هیئت مدیره اداره می‌شود.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="6">
                        <Accordion.Header>۷- ثبت شرکت در مناطق آزاد</Accordion.Header>
                        <Accordion.Body>
                          مناطق آزاد تجاری-صنعتی ایران دارای تسهیلات ویژه‌ای برای کسب‌وکارها هستند که شامل معافیت‌های مالیاتی، سهولت در فرآیند ثبت و مزایای دیگر می‌شود. برای ثبت شرکت در این مناطق، نیاز به تهیه و تنظیم اساسنامه، اظهارنامه و مدارک شناسایی مدیران می‌باشد. شرکت‌ها در این مناطق می‌توانند از امکانات صادرات و واردات با شرایط آسان‌تر بهره‌مند شوند.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="7">
                        <Accordion.Header>۸- ثبت و تنظیم صورتجلسات شرکتها</Accordion.Header>
                        <Accordion.Body>
                         صورتجلسات شرکت‌ها اسنادی هستند که تصمیمات و اقدامات مهم شرکت‌ها را ثبت می‌کنند. این مستندات شامل تصمیمات هیئت مدیره، تغییرات اساسنامه و دیگر موضوعات مهم می‌باشد. تنظیم و ثبت صورتجلسات شرکت‌ها نیازمند دقت و رعایت قوانین و مقررات مربوطه است. مدارک مورد نیاز شامل متن صورتجلسه، امضای اعضا و مهر شرکت می‌باشد .
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                </div>
                <div className='fullDescription-Des-body-styles-div'>
                    <img data-aos="zoom-in" src={financeImg}/>
                    <h2 data-aos="fade-left" id='section2'>خدمات تخصصی مالی و مالیاتی</h2>
                    <p data-aos="fade-left">
                      امور مالی و مالیاتی نقش حیاتی در مدیریت و بهبود وضعیت مالی و پرداخت مالیات در کسب‌وکارها دارند که شامل اقداماتی نظیر اخذ کد اقتصادی، اخذ گواهی ارزش افزوده، اخذ دفاتر پلمب مالی و به روز بودن اطلاعات مالی و مالیاتی می‌شوند. 
                    </p>
                    <Accordion data-aos="zoom-in" defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>۱- اخذ کد اقتصادی</Accordion.Header>
                        <Accordion.Body>
                          کد اقتصادی یک شناسه منحصر به فرد است که توسط سازمان امور مالیاتی به افراد حقوقی و حقیقی که فعالیت تجاری دارند، اختصاص داده می‌شود. این کد به منظور شناسایی مالیاتی و نظارت بر فعالیت‌های اقتصادی استفاده می‌شود.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>۲- اخذ گواهی ارزش افزوده</Accordion.Header>
                        <Accordion.Body>
                          گواهی ارزش افزوده مجوزی است که به شرکت‌ها و کسب‌وکارها اجازه می‌دهد تا مالیات بر ارزش افزوده را از مشتریان خود دریافت کنند و به سازمان امور مالیاتی پرداخت کنند. این گواهی به منظور شفافیت مالیاتی و جلوگیری از فرار مالیاتی الزامی است.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>۳- اخذ دفاتر پلمب مالی</Accordion.Header>
                        <Accordion.Body>
                          دفاتر پلمب مالی، دفاتری رسمی هستند که اطلاعات مالی و حسابداری شرکت‌ها در آن‌ها ثبت می‌شود. این دفاتر باید به تایید و مهر سازمان امور مالیاتی و اداره ثبت شرکتها برسند تا اعتبار قانونی داشته باشند.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>۳- مشاوره مالی و مالیاتی</Accordion.Header>
                        <Accordion.Body>
                          مشاوره مالی و مالیاتی خدمتی است که به کسب‌وکارها و افراد کمک می‌کند تا به بهترین شکل ممکن از منابع مالی خود استفاده کنند و از تعهدات مالیاتی خود آگاه باشند. مشاوران مالی و مالیاتی ما با ارائه راهکارها و استراتژی‌های مناسب، به بهبود عملکرد مالی و کاهش ریسک‌های مالیاتی کمک می‌کنند.
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                </div>
                <div className='fullDescription-Des-body-styles-div'>
                    <img data-aos="zoom-in" src={commerceImg}/>
                    <h2 data-aos="fade-left" id='section3'> خدمات تخصصی بازرگانی</h2>
                    <p data-aos="fade-left">
                      در دنیای تجارت بین‌المللی، داشتن مجوزهای لازم برای انجام فعالیت‌های بازرگانی اهمیت ویژه‌ای دارد. کارت بازرگانی یکی از این مجوزهای ضروری است که به افراد و شرکت‌ها اجازه می‌دهد تا در زمینه واردات و صادرات فعالیت کنند. کارت بازرگانی می‌تواند به دو نوع حقیقی و حقوقی تقسیم شود.
                    </p>
                    <Accordion data-aos="zoom-in" defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>۱- اخذ کارت بازرگانی حقیقی</Accordion.Header>
                        <Accordion.Body>
                          کارت بازرگانی حقیقی به افراد حقیقی که قصد انجام فعالیت‌های تجاری و بازرگانی را دارند، اعطا می‌شود. این کارت به فرد امکان می‌دهد تا در زمینه واردات و صادرات کالاها به صورت قانونی فعالیت کند. 
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>۲- اخذ کارت بازرگانی حقوقی</Accordion.Header>
                        <Accordion.Body>
                          کارت بازرگانی حقوقی به شرکت‌ها و موسسات حقوقی اعطا می‌شود که قصد انجام فعالیت‌های تجاری و بازرگانی را دارند. این کارت به شرکت‌ها اجازه می‌دهد تا به صورت قانونی در زمینه واردات و صادرات کالاها فعالیت کنند.
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                </div>
                <div className='fullDescription-Des-body-styles-div'>
                    <img data-aos="zoom-in" src={specialImage}/>
                    <h2 data-aos="fade-left" id='section4'>خدمات ویژه</h2>
                    <p data-aos="fade-left">
                    در دنیای امروز، ایجاد هویت بصری و آنلاین برای هر کسب‌وکار نوپا امری ضروری و غیرقابل انکار است. برای صاحبین کسب و کار های نوپا طراحی سایت و طراحی لوگو می‌تواند به عنوان یک عامل تعیین‌کننده در موفقیت و جذب مشتریان جدید در فضای مجازی و تبلیغاتی باشد. 
                    </p>
                    <Accordion data-aos="zoom-in" defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>۱- طراحی سایت </Accordion.Header>
                        <Accordion.Body>
                          طراحی سایت یکی از اساسی‌ترین نیازهای هر کسب‌وکار در دنیای دیجیتال است. یک وبسایت حرفه‌ای و جذاب می‌تواند به عنوان ویترین آنلاین شما عمل کرده و مشتریان جدیدی را جذب کند.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>۲- طراحی لوگو</Accordion.Header>
                        <Accordion.Body>
                          لوگو یکی از اصلی‌ترین عناصر هویت بصری یک کسب‌وکار است. طراحی یک لوگوی منحصر به فرد و حرفه‌ای می‌تواند تاثیر بسزایی در شناخت و به خاطر سپاری برند شما توسط مشتریان داشته باشد.
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                </div>
                <div className='fullDescription-Des-body-styles-div'>
                    <img data-aos="zoom-in" src={brandImg}/>
                    <h2 data-aos="fade-left" id='section5'> خدمات  تخصصی مالکیت صنعتی و معنوی</h2>
                    <p data-aos="fade-left">
                      مالکیت صنعتی و معنوی از جمله مهم‌ترین ابزارهای حمایت از نوآوری‌ها، خلاقیت‌ها و تلاش‌های فکری افراد و شرکت‌ها هستند. این نوع مالکیت‌ها امکان حفاظت از حقوق خالقان و مبتکران را فراهم می‌آورند و به آن‌ها اجازه می‌دهند تا از دستاوردهای خود بهره‌برداری مالی کنند. خدمات تخصصی مالکیت صنعتی و معنوی شامل ثبت برند، ثبت طرح صنعتی و ثبت اختراع است.
                    </p>
                    <Accordion data-aos="zoom-in" defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>۱- ثبت برند</Accordion.Header>
                        <Accordion.Body>
                          برند به عنوان نماد یا نام تجاری یک محصول یا خدمات، نقش بسیار مهمی در شناسایی و تمایز آن در بازار دارد. ثبت برند به صاحبان کسب‌وکار این امکان را می‌دهد تا از نام تجاری خود در مقابل استفاده‌های غیرمجاز محافظت کنند.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>۲- ثبت طرح صنعتی</Accordion.Header>
                        <Accordion.Body>
                          طرح صنعتی شامل ظاهر و ویژگی‌های تزئینی یک محصول است که می‌تواند شامل شکل، رنگ، خطوط یا ترکیب آن‌ها باشد. ثبت طرح صنعتی به صاحبان آن اجازه می‌دهد تا از طرح‌های خود در برابر کپی‌برداری و تقلید محافظت کنند.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>۳- ثبت اختراع</Accordion.Header>
                        <Accordion.Body>
                          اختراع به عنوان یک راه‌حل جدید برای یک مشکل فنی، نیاز به ثبت دارد تا حقوق مادی و معنوی مخترع محفوظ بماند. ثبت اختراع می‌تواند منجر به انحصار استفاده از آن اختراع برای یک دوره زمانی مشخص شود.
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>

                </div>
            </div>
        </div>
    )
}