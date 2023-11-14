import React from "react";
import "./style.css";
interface SectionFormProps {}

interface SectionFormState {}

class SectionForm extends React.Component<SectionFormProps, SectionFormState> {
  constructor(props: SectionFormProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <section className="book-form" id="book-form">
          <form action="">
            <div data-aos="zoom-in" data-aos-delay="150" className="inputBox">
              <span>where to?</span>
              <input type="text" placeholder="place name" value="" />
            </div>
            <div data-aos="zoom-in" data-aos-delay="300" className="inputBox">
              <span>when?</span>
              <input type="date" value="" />
            </div>
            <div data-aos="zoom-in" data-aos-delay="450" className="inputBox">
              <span>how many?</span>
              <input type="number" placeholder="number of travelers" value="" />
            </div>
            <input
              data-aos="zoom-in"
              data-aos-delay="600"
              type="submit"
              value="find now"
              className="btn"
            />
          </form>
        </section>
      </>
    );
  }
}

export default SectionForm;
