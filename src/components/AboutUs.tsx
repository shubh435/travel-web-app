import React from "react";
import "./style.css";
interface AboutUsProps {}

interface AboutUsState {}

class AboutUs extends React.Component<AboutUsProps, AboutUsState> {
  constructor(props: AboutUsProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <section className="about" id="about">
          <div
            className="video-container"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <video
              src="../../images/about-vid-1.mp4"
              muted
              autoPlay
              loop
              className="video"
            ></video>
            <div className="controls">
              <span
                className="control-btn"
                data-src="../images/about-vid-1.mp4"
              ></span>
              <span
                className="control-btn"
                data-src="../images/about-vid-2.mp4"
              ></span>
              <span
                className="control-btn"
                data-src="../images/about-vid-3.mp4"
              ></span>
            </div>
          </div>

          <div className="content" data-aos="fade-left" data-aos-delay="600">
            <span>why choose us?</span>
            <h3>Nature's Majesty Awaits You</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
              fugit repellat error deserunt nam aperiam odit libero quos
              provident. Nostrum?
            </p>
            <a href="#" className="btn">
              read more
            </a>
          </div>
        </section>

        <section className="destination" id="destination">
          <div className="heading">
            <span>our destination</span>
            <h1>make yours destination</h1>
          </div>

          <div className="box-container">
            <div className="box" data-aos="fade-up" data-aos-delay="150">
              <div className="image">
                <img src="../images/des-1.jpg" alt="" />
              </div>
              <div className="content">
                <h3>tours & travel</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                <a href="#">
                  read more <i className="fas fa-angle-right"></i>
                </a>
              </div>
            </div>

            <div className="box" data-aos="fade-up" data-aos-delay="300">
              <div className="image">
                <img src="../images/des-2.jpg" alt="" />
              </div>
              <div className="content">
                <h3>tours & travel</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                <a href="#">
                  read more <i className="fas fa-angle-right"></i>
                </a>
              </div>
            </div>

            <div className="box" data-aos="fade-up" data-aos-delay="450">
              <div className="image">
                <img src="../images/des-3.jpg" alt="" />
              </div>
              <div className="content">
                <h3>tours & travel</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                <a href="#">
                  read more <i className="fas fa-angle-right"></i>
                </a>
              </div>
            </div>

            <div className="box" data-aos="fade-up" data-aos-delay="600">
              <div className="image">
                <img src="../images/des-4.jpg" alt="" />
              </div>
              <div className="content">
                <h3>tours & travel</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                <a href="#">
                  read more <i className="fas fa-angle-right"></i>
                </a>
              </div>
            </div>

            <div className="box" data-aos="fade-up" data-aos-delay="750">
              <div className="image">
                <img src="../images/des-5.jpg" alt="" />
              </div>
              <div className="content">
                <h3>tours & travel</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                <a href="#">
                  read more <i className="fas fa-angle-right"></i>
                </a>
              </div>
            </div>

            <div className="box" data-aos="fade-up" data-aos-delay="900">
              <div className="image">
                <img src="../images/des-6.jpg" alt="" />
              </div>
              <div className="content">
                <h3>tours & travel</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                <a href="#">
                  read more <i className="fas fa-angle-right"></i>
                </a>
              </div>
            </div>

            <div className="box" data-aos="fade-up" data-aos-delay="1150">
              <div className="image">
                <img src="../images/des-7.jpg" alt="" />
              </div>
              <div className="content">
                <h3>tours & travel</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                <a href="#">
                  read more <i className="fas fa-angle-right"></i>
                </a>
              </div>
            </div>

            <div className="box" data-aos="fade-up" data-aos-delay="1300">
              <div className="image">
                <img src="../images/des-8.jpg" alt="" />
              </div>
              <div className="content">
                <h3>tours & travel</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                <a href="#">
                  read more <i className="fas fa-angle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default AboutUs;
