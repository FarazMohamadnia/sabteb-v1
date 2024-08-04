import { Col } from 'react-bootstrap'
import FooterSection from '../footer/footer'
import Navbar from '../navbar/navbar'
import './PagesCard.css'
import Table from 'react-bootstrap/Table';
import img from '../../../assets/img/icons/logoIcon/logo.jpg';
import Accordion from 'react-bootstrap/Accordion';
import { PiSealQuestionFill } from "react-icons/pi";
import { FaCheckCircle } from "react-icons/fa";

import { Link } from 'react-router-dom';

export default function PagesCard(Data){
    const data = Data.Data
    let maxPrice = 0
    data.tableform.forEach(data => {
        maxPrice += data.price
    })
    console.log(data)
    return(
        <div className='font-lalehar'>
            <Navbar />
            <div className='PagesCard-container text-center'>
                <h1 className='my-1'>{data.title}</h1>
                <div className='d-md-flex flex-row-reverse my-2 d-block text-center'>
                    <Col md={6}>
                        <img className='w-100 rounded-4 mb-3 shadow' src={img} />
                    </Col>
                    <Col className='p-3' md={6}>
                        <p>{data.des}</p>
                    </Col>
                </div>
                <div className='text-start'>
                    <p className='fs-3'>توضیحات</p>
                    <div>
                    {
                        data.allDescription.map(data => (
                            <>
                                <p>{data.title}</p>
                                <p>{data.des}</p>
                            </>  
                        ))
                    }
                    </div>
                </div>
                <div className={data.table ? 'd-block d-md-flex mt-4' : 'd-none'}>
                    <Col className='text-start border-start border-top ps-1' md={5} lg={4}>
                        <p>مدارک مورد نیاز :</p>
                        {data.documents.map(data => (
                            <p className=''><FaCheckCircle color='red'/> - {data}</p>
                        ))}
                    </Col>
                    <Col md={7} lg={8}>
                    <h2 className='pagesCard-table-style m-0 p-0'>هزینه ثبت شرکت ۱۴۰۳</h2>
                    <div>
                        <Table striped bordered hover>
                          <thead>
                            <tr>
                                <th>خدمات</th>
                                <th>قیمت</th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                                data.tableform.map(data => (
                                    <tr>
                                        <td>{data.name}</td>
                                        <td>{data.price} ریال</td>
                                    </tr>
                                ))
                            }
                            <tr>
                              <td>قیمت کل</td>
                              <td>{maxPrice} ریال</td>
                            </tr>
                          </tbody>
                        </Table>
                    </div>
                    </Col>
                </div>
                <div className='text-start'>
                    {/* <p className='fs-3'>توضیحات</p> */}
                        <div>
                        {
                            data.endDescription.map(data => (
                                <>
                                    <p>{data.title}</p>
                                    <p>{data.text}</p>
                                </>  
                            ))
                        }
                        </div>
                    </div>
                <div className='my-2'>
                    <p className='fs-3'>سوالات متداول</p>
                    <div>
                    <Accordion defaultActiveKey="0">
                    {
                        data.answer.map(data => (
                        <>
                            <Accordion.Item eventKey={data.n}>
                              <Accordion.Header><PiSealQuestionFill color='silver' size={'1.2rem'}/>_{data.q}</Accordion.Header>
                              <Accordion.Body className='text-start'>
                                {data.a}
                              </Accordion.Body>
                            </Accordion.Item>
                        </>
                    ))}
                    </Accordion>

                    </div>
                </div>
            </div>
            <div className='my-3 text-center'>
                   <p className='fs-4'> لینک های مرتبط </p>
                   <div className='pages-card-link-section'>
                    {
                        data.links.map(data => (
                            <div className='pages-card-link-section-box'>
                                <Link className='w-100 h-100' to={data.link}>{data.name}</Link>
                            </div>
                        ))
                    }
                   </div>
                </div>
            <FooterSection />
        </div>
    )
}