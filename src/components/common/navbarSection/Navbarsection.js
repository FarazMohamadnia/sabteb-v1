import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import './NavbarSection.css'
import { Link } from 'react-router-dom';


export default function NavSection(){
    return(
    <>
        <Navbar sticky="top" expand={'lg'} className="nav-section-body">
          <Container fluid>
            <Navbar.Brand className='company-name-nav-style'><Link to={'/'}>ثبت ب</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-${'lg'}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-'lg'-${'lg'}`}
              aria-labelledby={`offcanvasNavbarLabel-${'lg'}`}
              placement="end"
              className='font-lalehar nav-section-dropdown'
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-${'lg'}`}>
                  <Link to={'/'} className='fs-2'>ثبت ب</Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-start flex-grow-1 pe-3">
                <NavDropdown
                    title="خدمات تخصصی ثبت شرکت"
                  >
                    <NavDropdown.Item ><Link className='w-100 h-100 d-block' to='/company/ثبت-شرکت-مسئولیت-محدود'>۱- ثبت شرکت مسئولیت محدود</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link className='w-100 h-100 d-block' to='/company/ثبت-شرکت-سهامی-خاص'>۲- ثبت شرکت سهامی خاص</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link className='w-100 h-100 d-block' to='/company/ثبت-موسسه-غیر-تجاری'>۳-ثبت موسسه غیر تجاری</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link className='w-100 h-100 d-block' to='/company/ثبت-شرکت-تضامنی'>۴- ثبت شرکت تضامنی</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link className='w-100 h-100 d-block' to='/company/ثبت-شرکت-تعاونی'>۵- ثبت شرکت تعاونی</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link className='w-100 h-100 d-block' to='/company/ثبت-شرکت-سهامی-عام'>۶- ثبت شرکت سهامی عام</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link className='w-100 h-100 d-block' to='/company/ثبت-شرکت-مناطق-آزاد'>۷- ثبت شرکت در مناطق آزاد</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link className='w-100 h-100 d-block' to='/company/تنظیم-صورتجلسات-شرکتها'>۸- ثبت و تنظیم صورتجلسات شرکتها</Link></NavDropdown.Item>

                </NavDropdown>
                <NavDropdown
                    title="خدمات تخصصی مالکیت صنعتی و معنوی"
                  >
                    <NavDropdown.Item ><Link className='w-100 h-100 d-block' to='/brand/ثبت-برند'>۱- ثبت برند</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link className='w-100 h-100 d-block' to='/brand/ثبت-طرح-صنعتی'>۲- ثبت طرح صنعتی</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link className='w-100 h-100 d-block' to='/brand/ثبت-اختراع'>۳- ثبت اختراع</Link></NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                    title="خدمات تخصصی مالی و مالیاتی"
                  >
                    <NavDropdown.Item ><Link className='w-100 h-100 d-block' to='/financial-services/اخذ-کد-اقتصادی'>۱- اخذ کد اقتصادی</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link className='w-100 h-100 d-block' to='/financial-services/اخذ-گواهی-ارزش-افزوده'>۲- اخذ گواهی ارزش افزوده</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link className='w-100 h-100 d-block' to='/financial-services/اخذ-دفاتر-پلمپ-مالی'>۳- اخذ دفاتر پلمب مالی</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link className='w-100 h-100 d-block' to='/financial-services/مشاوره-مالی-و-مالیاتی'>۴- مشاور مالی و مالیاتی</Link></NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                    title="خدمات تخصصی بازرگانی"
                  >
                    <NavDropdown.Item ><Link className='w-100 h-100 d-block' to='/commerce/اخذ-کارت-بازرگانی-حقیقی'>۱- اخذ کارت بازرگانی حقیقی</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link className='w-100 h-100 d-block' to='/commerce/اخذ-کارت-بازرگانی-حقوقی'>۲- اخذ کارت بازرگانی حقوقی</Link></NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                    title="خدمات ویژه"
                  >
                    <NavDropdown.Item ><Link className='w-100 h-100 d-block' to='/special-services/طراحی-سایت'>طراحی سایت </Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link className='w-100 h-100 d-block' to='/special-services/طراحی-لوگو'>طراحی لوگو </Link></NavDropdown.Item>
                </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
    )
}