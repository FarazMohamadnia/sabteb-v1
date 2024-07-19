import './countingSection.css'
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { MdCalendarMonth } from "react-icons/md";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { MdFactCheck } from "react-icons/md";
import { BsBookmarkCheckFill } from "react-icons/bs";


export default function CountSection(){
    const [startCount, setStartCount] = useState(false);
    const { ref, inView } = useInView({
      triggerOnce: true,
      onChange: (inView) => {
        if (inView) {
          setStartCount(true);
        }
      },
    });
    return(
        <div ref={ref} className='countingSection-container'>
            <p className='fs-4 ps-4 my-3 border-start text-light'>
                چرا تیم ما ؟
            </p>
            <div className='countingSection-container-style'>
                <div className='countingSection-body-style'>
                    <p><MdCalendarMonth />-سال سابقه :  </p><p className='countingSection-body-style-counting'>
                        {startCount && <CountUp delay={1} end={1500} duration={7} />}
                    </p>
                </div>
                <div className='countingSection-body-style'>
                    <p><IoPeopleCircleOutline />-تعداد مشتری ها :</p><p className='countingSection-body-style-counting'>
                        {startCount && <CountUp delay={1.3} end={1000} duration={7} />}
                    </p>
                </div>
                <div className='countingSection-body-style'>
                    <p><MdFactCheck />
                        -شرکت های ثبت شده : 
                        </p>
                        <p className='countingSection-body-style-counting'>
                        {startCount && <CountUp delay={1.6} end={500} duration={7} />}
                    </p>
                </div>
                <div className='countingSection-body-style'>
                    <p><BsBookmarkCheckFill />
-برند های ثبت شده : </p><p className='countingSection-body-style-counting'>
                        {startCount && <CountUp delay={1.9} end={1340} duration={7} />}
                    </p>
                </div>
            </div>
        </div>
    )
}