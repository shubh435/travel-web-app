import React from "react";
import "./seerviceStyle.css";

interface GellerySectionProps {}

interface GellerySectionState {}

class GellerySection extends React.Component<
  GellerySectionProps,
  GellerySectionState
> {
  constructor(props: GellerySectionProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <section className="gallery" id="gallery">
          <div className="heading">
            <span>our gallery</span>
            <h1>we record memories</h1>
          </div>

          <div className="box-container">
            <div className="box" data-aos="zoom-in-up" data-aos-delay="150">
              <img src="images/gallery-img-1.jpg" alt="" />
              <span>travel spot</span>
              <h3>iceland</h3>
            </div>

            <div className="box" data-aos="zoom-in-up" data-aos-delay="300">
              <img src="images/gallery-img-2.jpg" alt="" />
              <span>travel spot</span>
              <h3>greenland</h3>
            </div>

            <div className="box" data-aos="zoom-in-up" data-aos-delay="450">
              <img src="images/gallery-img-3.jpg" alt="" />
              <span>travel spot</span>
              <h3>alaska</h3>
            </div>

            <div className="box" data-aos="zoom-in-up" data-aos-delay="150">
              <img src="images/gallery-img-4.jpg" alt="" />
              <span>travel spot</span>
              <h3>thailand</h3>
            </div>

            <div className="box" data-aos="zoom-in-up" data-aos-delay="300">
              <img src="images/gallery-img-5.jpg" alt="" />
              <span>travel spot</span>
              <h3>brazil</h3>
            </div>

            <div className="box" data-aos="zoom-in-up" data-aos-delay="450">
              <img src="images/gallery-img-6.jpg" alt="" />
              <span>travel spot</span>
              <h3>maldive</h3>
            </div>

            <div className="box" data-aos="zoom-in-up" data-aos-delay="150">
              <img src="images/gallery-img-7.jpg" alt="" />
              <span>travel spot</span>
              <h3>iceland</h3>
            </div>

            <div className="box" data-aos="zoom-in-up" data-aos-delay="300">
              <img src="images/gallery-img-8.jpg" alt="" />
              <span>travel spot</span>
              <h3>alaska</h3>
            </div>

            <div className="box" data-aos="zoom-in-up" data-aos-delay="450">
              <img src="images/gallery-img-9.jpg" alt="" />
              <span>travel spot</span>
              <h3>maldive</h3>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default GellerySection;
