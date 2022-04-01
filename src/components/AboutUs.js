import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="cards">
      <div className="main-heading">
        <h1 className="main-heading-h1">ÜBER UNS</h1>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </div>
      <div className="cards__containers">
        <a>
          <img src="images/monika.jpeg"></img>
        </a>
        <div className="monika">
          <div className="heading">Monika Mayers</div>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua
          </p>
          <div className="cards-rotating">
            <div className="item">
              <img src="images/tick.png"></img>
              <h1>Heading</h1>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
            </div>
            <div className="item">
              <img src="images/tick.png"></img>
              <h1>Heading</h1>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
            </div>
            <div className="item">
              <img src="images/tick.png"></img>
              <h1>Heading</h1>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
            </div>
            <div className="item">
              <img src="images/tick.png"></img>
              <h1>Heading</h1>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
            </div>
            <h1 className="network-links">SOCIAL-NETWORK</h1>
          </div>
          <div className="network-link">
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-youtube"></i>
          <i class="fab fa-vk"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;