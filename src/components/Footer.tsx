import React from "react";
import "./footerStyles.css";
interface FooterProps {}

interface FooterState {}

class Footer extends React.Component<FooterProps, FooterState> {
  constructor(props: FooterProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="banner">
          <div className="content" data-aos="zoom-in-up" data-aos-delay="300">
            <span>start your adventures</span>
            <h3>Let's Explore This World</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              voluptatum praesentium amet quibusdam quam officia suscipit odio.
            </p>
            <a href="#book-form" className="btn">
              book now
            </a>
          </div>
        </div>

        <section className="footer">
          <div className="box-container">
            <div className="box" data-aos="fade-up" data-aos-delay="150">
              <a href="#" className="logo">
                <i className="fas fa-paper-plane"></i>travel
              </a>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, ad?
              </p>
              <div className="share">
                <a href="#" className="fab fa-facebook-f"></a>
                <a href="#" className="fab fa-twitter"></a>
                <a href="#" className="fab fa-instagram"></a>
                <a href="#" className="fab fa-linkedin"></a>
              </div>
            </div>

            <div className="box" data-aos="fade-up" data-aos-delay="300">
              <h3>quick links</h3>
              <a href="#home" className="links">
                <i className="fas fa-arrow-right"></i> home
              </a>
              <a href="#about" className="links">
                <i className="fas fa-arrow-right"></i> about
              </a>
              <a href="#destination" className="links">
                <i className="fas fa-arrow-right"></i> destination
              </a>
              <a href="#services" className="links">
                <i className="fas fa-arrow-right"></i> services
              </a>
              <a href="#gallery" className="links">
                <i className="fas fa-arrow-right"></i> gallery
              </a>
              <a href="#blogs" className="links">
                <i className="fas fa-arrow-right"></i> blogs
              </a>
            </div>

            <div className="box" data-aos="fade-up" data-aos-delay="450">
              <h3>contact info</h3>
              <p>
                <i className="fas fa-map"></i> mumbai, india
              </p>
              <p>
                <i className="fas fa-phone"></i> +91 7721063783
              </p>
              <p>
                <i className="fas fa-envelope"></i> shubhamsarode435@gmail.com
              </p>
              <p>
                <i className="fas fa-clock"></i> 7:00am - 10:00pm
              </p>
            </div>

            <div className="box" data-aos="fade-up" data-aos-delay="600">
              <h3>newsletter</h3>
              <p>subscribe for latest updates</p>
              <form action="">
                <input
                  type="email"
                  name=""
                  placeholder="enter your email"
                  className="email"
                  id=""
                />
                <input type="submit" value="subscribe" className="btn" />
              </form>
            </div>
          </div>
        </section>

        <div className="credit">
          created by <span>shubham sarode</span> | all rights reserved!
        </div>
      </>
    );
  }
}

export default Footer;
