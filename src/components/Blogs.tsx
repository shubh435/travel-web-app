import React from "react";
import "./blogStyle.css";

interface BlogsProps {}

interface BlogsState {}

class Blogs extends React.Component<BlogsProps, BlogsState> {
  constructor(props: BlogsProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <section className="review">
          <div className="content" data-aos="fade-right" data-aos-delay="300">
            <span>testimonials</span>
            <h3>good news from our clients</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              laudantium corporis fugiat quae unde perspiciatis similique ab
              modi enim consequatur aperiam cumque distinctio facilis sit,
              debitis possimus asperiores non harum.
            </p>
          </div>

          <div
            className="box-container"
            data-aos="fade-left"
            data-aos-delay="600"
          >
            <div className="box">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia,
                ratione.
              </p>
              <div className="user">
                <img src="../images/pic-1.png" alt="" />
                <div className="info">
                  <h3>john deo</h3>
                  <span>designer</span>
                </div>
              </div>
            </div>
            <div className="box">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia,
                ratione.
              </p>
              <div className="user">
                <img src="../images/pic-2.png" alt="" />
                <div className="info">
                  <h3>john deo</h3>
                  <span>designer</span>
                </div>
              </div>
            </div>
            <div className="box">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia,
                ratione.
              </p>
              <div className="user">
                <img src="../images/pic-3.png" alt="" />
                <div className="info">
                  <h3>john deo</h3>
                  <span>designer</span>
                </div>
              </div>
            </div>
            <div className="box">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia,
                ratione.
              </p>
              <div className="user">
                <img src="../images/pic-4.png" alt="" />
                <div className="info">
                  <h3>john deo</h3>
                  <span>designer</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="blogs" id="blogs">
          <div className="heading">
            <span>blogs & posts</span>
            <h1>we untold stories</h1>
          </div>

          <div className="box-container">
            <div className="box" data-aos="fade-up" data-aos-delay="150">
              <div className="image">
                <img src="../images/blog-1.jpg" alt="" />
              </div>
              <div className="content">
                <a href="#" className="link">
                  Life is a journey, not a destination
                </a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur, natus!
                </p>
                <div className="icon">
                  <a href="#">
                    <i className="fas fa-clock"></i> 21st may, 2021
                  </a>
                  <a href="#">
                    <i className="fas fa-user"></i> by admin
                  </a>
                </div>
              </div>
            </div>

            <div className="box" data-aos="fade-up" data-aos-delay="300">
              <div className="image">
                <img src="../images/blog-2.jpg" alt="" />
              </div>
              <div className="content">
                <a href="#" className="link">
                  Life is a journey, not a destination
                </a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur, natus!
                </p>
                <div className="icon">
                  <a href="#">
                    <i className="fas fa-clock"></i> 21st may, 2021
                  </a>
                  <a href="#">
                    <i className="fas fa-user"></i> by admin
                  </a>
                </div>
              </div>
            </div>

            <div className="box" data-aos="fade-up" data-aos-delay="450">
              <div className="image">
                <img src="../images/blog-3.jpg" alt="" />
              </div>
              <div className="content">
                <a href="#" className="link">
                  Life is a journey, not a destination
                </a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur, natus!
                </p>
                <div className="icon">
                  <a href="#">
                    <i className="fas fa-clock"></i> 21st may, 2021
                  </a>
                  <a href="#">
                    <i className="fas fa-user"></i> by admin
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Blogs;
