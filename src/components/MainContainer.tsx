import React from "react";
import "./style.css";
interface MainContainerProps {}

interface MainContainerState {}

class MainContainer extends React.Component<
  MainContainerProps,
  MainContainerState
> {
  constructor(props: MainContainerProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <section className="home" id="home">
          <div className="content">
            <span data-aos="fade-up" data-aos-delay="150">
              follow us
            </span>
            <h3 data-aos="fade-up" data-aos-delay="300">
              to the unknown
            </h3>
            <p data-aos="fade-up" data-aos-delay="450">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus quia illum quod perspiciatis harum in possimus?
              Totam consequuntur officia quia?
            </p>
            <a data-aos="fade-up" data-aos-delay="600" href="#" className="btn">
              book now
            </a>
          </div>
        </section>
      </>
    );
  }
}

export default MainContainer;
