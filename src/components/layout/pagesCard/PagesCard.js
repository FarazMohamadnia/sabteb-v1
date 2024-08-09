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
import Socialmediabuttn from '../../common/socialMediaButton/socialmediabutton';
import ContactButton from '../../common/contactBtn/contactButton';

export default function PagesCard(Data){
    const data = Data.Data
    return(
        <div className='font-lalehar'>
            <Navbar />
            <div className='PagesCard-container text-center'>
                <h1 className='my-1'>{data.title}</h1>
                <div className='d-md-flex flex-row-reverse my-2 d-block text-center'>
                    <Col md={6} lg={7} style={{backgroundImage: `url(${data.img})` }} className='pageCard-image-style'>
            
                    </Col>
                    <Col className='p-3 PagesCard-justify-description' md={6} lg={5}>
                        <p className=''>{data.des}</p>
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
                    <h2 className='pagesCard-table-style m-0 p-0'>{data.tableName}</h2>
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
                                        <td>{data.price}{data.price === 'رایگان' ||'تماس بگیرید' ? '' : 'ریال'}</td>
                                    </tr>
                                ))
                            }
                            <tr>
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
                <div>
                    <Socialmediabuttn />
                </div>
                <div>
                    <ContactButton />
                </div>
            <FooterSection />
        </div>
    )
}