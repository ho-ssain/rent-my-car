import { Link } from "react-router-dom";
import { Col, Container, Row, ListGroupItem, ListGroup } from "reactstrap";
import "../../styles/footer.scss";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },

  {
    path: "#",
    display: "Privacy Policy",
  },

  {
    path: "/cars",
    display: "Car Listing",
  },

  {
    path: "/blogs",
    display: "Blog",
  },

  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer-logo">
              <h1>
                <Link to="/home" className="d-flex align-items-center gap-1">
                  <i className="ri-car-line"></i>
                  <span>
                    Rent <br /> MyCar
                  </span>
                </Link>
              </h1>
            </div>

            <p className="footer-logo-content">
              A Car rental System provides a convenient, on-demand solution for
              short-term vehicle access
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer-link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="quick-links p-0 mt-3">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <dir className="mb-4">
              <h5 className="footer-link-title mb-4">Head Office</h5>
              <p className="office-info">1204, Banani, bangladesh</p>
              <p className="office-info">Phone-: +3498673462573</p>
              <p className="office-info">Email-: support@rentacar.com</p>
              <p className="office-info">Office Time-: 10zm - 6pm</p>
            </dir>
          </Col>

          <Col lg="3" md="4">
            <div className="mb-4">
              <h5 className="footer-link-title">Newsletter</h5>
              <p className="section-description">Subscribe our newsletter</p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <i className="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer-bottom">
              <p className="section-description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i className="ri-copyright-line"></i>Copyright {year}, Developed
                By Hossain Kabir. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
