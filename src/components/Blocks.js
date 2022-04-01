import React from "react";
import "./Blocks.css";

function Blocks() {
  return (
    <>
      <div className="counters">
        <div className="counter1"></div>
        <div className="counter2"></div>
        <div className="counter3"></div>
        <div className="counter4"></div>
      </div>
      <div className="service">
        <h1>OUR SERVICES</h1>
        <p className="outer-p">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
        <div className="service-cards">
          <div className="service-card">
            <img src="images/mic.png"></img>
            <h2>Manicure</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod.
            </p>
          </div>
          <div className="service-card">
            <img src="images/diamond.png"></img>
            <h2>Pedicure</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod.
            </p>
          </div>
          <div className="service-card">
            <img src="images/volleyball.png"></img>
            <h2>Art</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod.
            </p>
          </div>
          <div className="service-card">
            <img src="images/money.png"></img>
            <h2>Conditioning</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod.
            </p>
          </div>
          <div className="service-card">
            <img src="images/sheild.png"></img>
            <h2>Treatments</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod.
            </p>
          </div>
          <div className="service-card">
            <img src="images/ticket.png"></img>
            <h2>Bookings</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod.
            </p>
          </div>
        </div>
      </div>
      <div className="price-plan">
        <h1 className="price-heading">OUR PRICE PLAN</h1>
        <p className="price-plan-p">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
        <div className="price-cards">
          <div className="price-card">
            <h1>$199</h1>
            <div className="discount">
              <div className="discount-item discount-item1">10%</div>
              <div className="discount-item">|</div>
              <div className="discount-item discount-item2">Manicure</div>
            </div>
            <div className="duration-head"> For 3 Months</div>
            <li className="discount-content">Lorem ipsum dolor sit amet</li>
            <li className="discount-content">Lorem ipsum dolor sit amet</li>
            <li className="discount-content">Lorem ipsum dolor sit amet</li>
            <li className="discount-content">Lorem ipsum dolor sit amet</li>
            <li className="discount-content">Lorem ipsum dolor sit amet</li>
            <li className="discount-content">Lorem ipsum dolor sit amet</li>
            <button className="booking-btn">BOOK NOW</button>
          </div>
          <div className="price-card">
            <h1>$189</h1>
            <div className="discount">
              <div className="discount-item discount-item1">20%</div>
              <div className="discount-item">|</div>
              <div className="discount-item discount-item2">NailClippers</div>
            </div>
            <div className="duration-head"> For 6 Months</div>
            <li className="discount-content">Lorem ipsum dolor sit amet</li>
            <li className="discount-content">Lorem ipsum dolor sit amet</li>
            <li className="discount-content">Lorem ipsum dolor sit amet</li>
            <li className="discount-content">Lorem ipsum dolor sit amet</li>
            <li className="discount-content">Lorem ipsum dolor sit amet</li>
            <li className="discount-content">Lorem ipsum dolor sit amet</li>
            <button className="booking-btn">BOOK NOW</button>
          </div>
          <div className="price-card">
            <h1>$299</h1>
            <div className="discount">
              <div className="discount-item discount-item1">15%</div>
              <div className="discount-item">|</div>
              <div className="discount-item discount-item2">Pedicure</div>
            </div>
            <div className="duration-head"> For 12 Months</div>
            <li className="discount-content">Lorem ipsum dolor sit amet</li>
            <li className="discount-content">Lorem ipsum dolor sit amet</li>
            <li className="discount-content">Lorem ipsum dolor sit amet</li>
            <li className="discount-content">Lorem ipsum dolor sit amet</li>
            <li className="discount-content">Lorem ipsum dolor sit amet</li>
            <li className="discount-content">Lorem ipsum dolor sit amet</li>
            <button className="booking-btn">BOOK NOW</button>
          </div>
        </div>
      </div>
      <div className="gallery">
        <h1 className="gallery-h1">LATEST GALLARIES</h1>
        <p className="gallery-p">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
        <div className="gallery-pics">
          <div className="gallery-pic">
            <img src="images/gallery-1.jpeg"></img>
          </div>
          <div className="gallery-pic">
            <img src="images/gallery-2.jpeg"></img>
          </div>
          <div className="gallery-pic">
            <img src="images/gallery-3.jpeg"></img>
          </div>
          <div className="gallery-pic">
            <img src="images/gallery-1.jpeg"></img>
          </div>
          <div className="gallery-pic">
            <img src="images/gallery-2.jpeg"></img>
          </div>
          <div className="gallery-pic">
            <img src="images/gallery-3.jpeg"></img>
          </div>
        </div>
      </div>
      <div className="offers">
        <h1 className="offer-h1">TOP OFFERS</h1>
        <div className="offer-cards">
          <div className="offer-card">
            <img src="images/offers-1.jpeg"></img>
            <div>
              <h2> STYLE1 - 99.5 $</h2>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p>
            </div>
          </div>
          <div className="offer-card">
            <img src="images/offers-1.jpeg"></img>
            <div>
              <h2> STYLE2 - 59.5 $</h2>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p>
            </div>
          </div>
          <div className="offer-card">
            <img src="images/offers-1.jpeg"></img>
            <div>
              <h2> STYLE3 - 69.5 $</h2>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p>
            </div>
          </div>
          <div className="offer-card">
            <img src="images/offers-1.jpeg"></img>
            <div>
              <h2> STYLE4 - 79.5 $</h2>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p>
            </div>
          </div>
          <div className="offer-card">
            <img src="images/offers-1.jpeg"></img>
            <div>
              <h2> STYLE5 - 89.5 $</h2>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p>
            </div>
          </div>
          <div className="offer-card">
            <img src="images/offers-1.jpeg"></img>
            <div>
              <h2> STYLE6 - 99.5 $</h2>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial">
        <h1>TESTIMONIALS</h1>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p className="testimonial-content">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna
            </p>
            <div className="testimonial-member">
              <img src="images/testimonial-name.jpeg"></img>
              <h3> Carl Kent</h3>
            </div>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-content">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna
            </p>
            <div className="testimonial-member">
              <img src="images/testimonial-name.jpeg"></img>
              <h3> Carl Kent</h3>
            </div>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-content">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna
            </p>
            <div className="testimonial-member">
              <img src="images/testimonial-name.jpeg"></img>
              <h3> Carl Kent</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="team">
        <h1>OUR TEAM</h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
        <div className="team-cards">
          <div className="team-card">
            <img src="images/team-4.jpeg"></img>
            <div className="team-links">
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-youtube"></i>
            </div>
            <div className="info">
              <div className="info1">MONICA MAYERS</div>
              <div className="info2">EXTERNAL SALES</div>
            </div>
          </div>
          <div className="team-card">
            <img src="images/team-3.jpeg"></img>
            <div className="team-links">
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-youtube"></i>
            </div>
            <div className="info">
              <div className="info1">MONICA MAYERS</div>
              <div className="info2">EXTERNAL SALES</div>
            </div>
          </div>
          <div className="team-card">
            <img src="images/team-2.jpeg"></img>
            <div className="team-links">
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-youtube"></i>
            </div>
            <div className="info">
              <div className="info1">MONICA MAYERS</div>
              <div className="info2">EXTERNAL SALES</div>
            </div>
          </div>
          <div className="team-card">
            <img src="images/team-1.jpeg"></img>
            <div className="team-links">
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-youtube"></i>
            </div>
            <div className="info">
              <div className="info1">MONICA MAYERS</div>
              <div className="info2">EXTERNAL SALES </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Blocks;
