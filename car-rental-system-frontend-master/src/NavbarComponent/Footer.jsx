import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const Footer = () => {
  const footerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) observer.observe(footerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-dark text-light pt-5"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(60px)",
        transition: "all 1s ease",
      }}
    >
      <div className="container">
        <div className="row gy-4">

          {/* Brand / About */}
          <div className="col-lg-4 col-md-6" style={fadeUp(visible, 0)}>
            <h4 className="text-uppercase text-warning">
              <i>Car Rental System</i>
            </h4>
            <p className="mt-3 text-secondary">
              Welcome to our world of boundless exploration. Embrace the
              freedom to wander, discover, and make unforgettable memories.
            </p>

            {/* Social Icons */}
            <div className="d-flex gap-3 mt-3">
              <Link to="#" className="text-light fs-5 icon-hover">
                <i className="ri-facebook-fill"></i>
              </Link>
              <Link to="#" className="text-light fs-5 icon-hover">
                <i className="ri-instagram-line"></i>
              </Link>
              <Link to="#" className="text-light fs-5 icon-hover">
                <i className="ri-twitter-x-line"></i>
              </Link>
              <Link to="#" className="text-light fs-5 icon-hover">
                <i className="ri-linkedin-box-fill"></i>
              </Link>
            </div>
          </div>

          {/* About Us */}
          <div className="col-lg-2 col-md-6" style={fadeUp(visible, 0.2)}>
            <h6 className="text-uppercase text-warning">About Us</h6>
            <ul className="list-unstyled mt-3">
              <li><Link to="#" className="footer-link">Company Info</Link></li>
              <li><Link to="#" className="footer-link">Our Mission</Link></li>
              <li><Link to="#" className="footer-link">Testimonials</Link></li>
              <li><Link to="#" className="footer-link">Blog</Link></li>
            </ul>
          </div>

          {/* Customer Support */}
          <div className="col-lg-2 col-md-6" style={fadeUp(visible, 0.4)}>
            <h6 className="text-uppercase text-warning">Customer Support</h6>
            <ul className="list-unstyled mt-3">
              <li><Link to="#" className="footer-link">Help Center</Link></li>
              <li><Link to="#" className="footer-link">FAQs</Link></li>
              <li><Link to="#" className="footer-link">Live Chat</Link></li>
              <li><Link to="#" className="footer-link">Email Support</Link></li>
            </ul>
          </div>

          {/* Rental Services */}
          <div className="col-lg-2 col-md-6" style={fadeUp(visible, 0.6)}>
            <h6 className="text-uppercase text-warning">Rental Services</h6>
            <ul className="list-unstyled mt-3">
              <li><Link to="#" className="footer-link">Self Drive Cars</Link></li>
              <li><Link to="#" className="footer-link">Airport Pickup</Link></li>
              <li><Link to="#" className="footer-link">Long Term Rentals</Link></li>
              <li><Link to="#" className="footer-link">Corporate Rentals</Link></li>
            </ul>
          </div>

          {/* Popular Cars */}
          <div className="col-lg-2 col-md-6" style={fadeUp(visible, 0.8)}>
            <h6 className="text-uppercase text-warning">Popular Cars</h6>
            <ul className="list-unstyled mt-3">
              <li><Link to="#" className="footer-link">Mahindra Thar</Link></li>
              <li><Link to="#" className="footer-link">Hyundai Creta</Link></li>
              <li><Link to="#" className="footer-link">Tata Harrier</Link></li>
              <li><Link to="#" className="footer-link">BMW Series</Link></li>
            </ul>
          </div>

        </div>

        <hr className="border-secondary my-4" />

        {/* Login CTA */}
        <div className="text-center mb-4" style={fadeUp(visible, 1)}>
          <span className="me-3 fw-bold">Login from here</span>
          <Link to="/user/login">
            <button className="btn btn-outline-warning rounded-pill px-4">
              Log in
            </button>
          </Link>
        </div>

        <hr className="border-secondary" />

        <div className="text-center pb-3 text-secondary">
          © 2023 <span className="text-warning">@yashlone.com</span>
        </div>
      </div>

      {/* Inline styles */}
      <style>
        {`
          .footer-link {
            color: #adb5bd;
            text-decoration: none;
            transition: all 0.3s ease;
          }
          .footer-link:hover {
            color: #ffc107;
            padding-left: 6px;
          }
          .icon-hover {
            transition: transform 0.3s ease, color 0.3s ease;
          }
          .icon-hover:hover {
            color: #ffc107;
            transform: translateY(-4px);
          }
        `}
      </style>
    </footer>
  );
};

const fadeUp = (visible, delay) => ({
  opacity: visible ? 1 : 0,
  transform: visible ? "translateY(0)" : "translateY(30px)",
  transition: `all 0.6s ease ${delay}s`,
});

export default Footer;
