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
            <Navbar.Brand className='company-name-nav-style'>شرکت ثبت ب</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-${'lg'}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-'lg'-${'lg'}`}
              aria-labelledby={`offcanvasNavbarLabel-${'lg'}`}
              placement="end"
              className='font-lalehar nav-section-dropdown'
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-${'lg'}`}>
                  شرکت ثبت ب
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-start flex-grow-1 pe-3">
                <NavDropdown
                    title="خدمات تخصصی ثبت شرکت"
                  >
                    <NavDropdown.Item ><Link to='/ddd'>۱- ثبت شرکت مسئولیت محدود</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to=''>۲- ثبت شرکت سهامی خاص</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to=''>۳-ثبت موسسه غیر تجاری</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to=''>۴- ثبت شرکت تضامنی</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to=''>۵- ثبت شرکت تعاونی</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to=''>۶- ثبت شرکت سهامی عام</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to=''>۷- ثبت شرکت در مناطق آزاد</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to=''>۸- ثبت و تنظیم صورتجلسات شرکتها</Link></NavDropdown.Item>

                </NavDropdown>
                <NavDropdown
                    title="خدمات تخصصی مالکیت صنعتی و معنوی"
                  >
                    <NavDropdown.Item ><Link to=''>۱- ثبت برند</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to=''>۲- ثبت طرح صنعتی</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to=''>۳- ثبت اختراع</Link></NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                    title="خدمات تخصصی مالی"
                  >
                    <NavDropdown.Item ><Link to=''>۱- اخذ کد اقتصادی</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to=''>۲- اخذ گواهی ارزش افزوده</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to=''>۳- اخذ دفاتر پلمب مالی</Link></NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                    title="خدمات تخصصی بازرگانی"
                  >
                    <NavDropdown.Item ><Link to=''>۱- اخذ کارت بازرگانی حقیقی</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to=''>۲- اخذ کارت بازرگانی حقوقی</Link></NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                    title="خدمات ویژه"
                  >
                    <NavDropdown.Item ><Link to=''>طراحی سایت </Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to=''>طراحی لوگو </Link></NavDropdown.Item>
                </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
    )
}