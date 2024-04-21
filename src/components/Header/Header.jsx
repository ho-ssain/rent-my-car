import { Link, NavLink } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
("reactstrap");
import "../../styles/header.scss";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/cars",
    display: "Cars",
  },
  {
    path: "/blogs",
    display: "BLogs",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  return (
    <header className="header">
      {/* =========== Header top ===========  */}
      <div className="header-top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header-top-left">
                <span>Need Help?</span>
                <span className="header-top-help">
                  <i className="ri-phone-fill"></i>
                  <span className="text-info">+880434544334</span>
                </span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6">
              <div className="header-top-right d-flex align-align-items-center justify-content-end gap-3">
                <Link
                  to="#"
                  className="d-flex align-align-items-center gap-1 btn btn-dark"
                >
                  <i className="ri-login-circle-line"></i>Sign-In
                </Link>

                <Link
                  to="#"
                  className="d-flex align-items-center gap-1 btn btn-light"
                >
                  <i className="ri-user-line"></i>Sign-Up
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* =========== Header top ===========  */}
      <div className="header-middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className="d-flex align-items-center gap-1">
                    <i className="ri-car-line"></i>
                    <span>
                      Rent <br /> MyCar
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header-location d-flex align-items-center gap-2">
                <span>
                  <i className="ri-earth-line"></i>
                </span>
                <div className="header-location-content">
                  <h4>Bangladesh</h4>
                  <h6>Dhaka City</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header-location d-flex align-items-center gap-2">
                <span>
                  <i className="ri-time-line"></i>
                </span>
                <div className="header-location-content">
                  <h4>Sunday - Friday</h4>
                  <h6>10am - 7pm</h6>
                </div>
              </div>
            </Col>

            <Col
              lg="2"
              md="3"
              sm="0"
              className="d-flex align-items-center justify-content-end"
            >
              <button className="header_btn">
                <Link to="/contact">
                  <i className="ri-phone-line"></i>Request a call
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ============ main navigation ============== */}

      <div className="main-navbar">
        <Container>
          <div className="navigation-wrapper d-flex align-items-center justify-content-between">
            <span className="mobile-menu">
              <i className="ri-menu-line"></i>
            </span>

            <div className="navigation">
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    key={index}
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav-item nav-active" : "nav-item"
                    }
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="nav-right">
              <div className="search-box">
                <input type="text" placeholder="Search" />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
