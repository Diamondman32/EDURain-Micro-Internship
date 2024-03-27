import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";

export default class NextJsCarousel extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <div>
            <p>Cal Poly</p>
            <img
              src="./_images_Colleges_CalPoly-horizontal.png"
              alt="Cal Poly"
            />
          </div>
          <div>
            <p>McKendree</p>
            <img src="./_images_Colleges_McKendree.png" alt="McKendree" />
          </div>
          <div>
            <p>Webster</p>
            <img src="./_images_Colleges_Webster.png" alt="Webster" />
          </div>
          <div>
            <p>Washington University in St. Louis</p>
            <img src="./_logos_partners_washu-olin.png" alt="WashU" />
          </div>
        </Carousel>
      </div>
    );
  }
}
