import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import About1 from '/assets/aboutus.jpg'
import About2 from '/assets/panel.jpg'
import About3 from '/assets/panel2.jpg'
import About5 from '/assets/panel3.jpg'
import LogoMetal from '/assets/icons/metalcraft-logo.jpg'
import Logobluebird from '/assets/icons/Bondor-Logo2.jpg'
// import About4 from '/assets/about/office2.png'

import Footer from './Footer'

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 850,
    })
  }, [])
  return (
    <div className="about-us-container">
      <div className="section1-about">
        <div className="text-animation-container">
          <h2 data-aos="fade-down-right" className="h2about">
            About Us
          </h2>
          <p data-aos="fade-down-right" className="pabout">
            Smart Panel Homes came about after I built a commercial building
            using insulated panel and was instantly impressed with the ease of
            build, halving the current build times.
            <br /> From there my research took me to Australia to look at the
            innovation currently being marketed and built across the Australian
            continent.
            <br />
            <br /> This experience led me to make the following important
            discoveries It is critical to use local manufacturers, so the
            technical experience is close at hand.
            <br /> This local manufacturer is also well placed to supply
            products that:
            <br />
            <br />
            a. Survive the test of time.
            <br />
            <br />
            b. Provide a solid warranty product, that protects all parties
            <br />
            <br />
            c. Able implement Research and Development, continually improving
            the product to suit NZ conditions. <br />
            <br />
            In addition to the above we have also developed relationships with a
            key architect and Building company, more details on these companies
            will be included on other pages
          </p>
        </div>

        <div
          data-aos="fade-down-left"
          className="picabout1-animation-container"
        >
          <div data-aos="fade-down-right" className="pic-2-section1">
            <img
              data-aos="fade-down-right"
              className="about1"
              src={About1}
              alt="About1"
            />
            <img
              data-aos="fade-down-left"
              className="about1"
              src={About2}
              alt="About2"
            />
          </div>
          <img
            data-aos="fade-down-left"
            className="about1-1"
            src={About3}
            alt="About3"
          />
        </div>
      </div>
      <br />
      <br />

      {/* Section 3 */}
      <div className="section3-about">
        <div data-aos="fade-down-right" className="textabout-section3">
          <h2 data-aos="fade-down-right" className="h2about3">
            We Work closely with local manufacturers such as Metalcraft and
            Bondor{' '}
          </h2>{' '}
        </div>
        <img
          data-aos="fade-down-left"
          className="about3"
          src={About5}
          alt="About5"
        />
      </div>
      <div className="logo-about3">
        <img
          data-aos="fade-up"
          className="LogoMetal"
          src={LogoMetal}
          alt="About5"
        />
        <img
          data-aos="fade-up"
          className="Logobluebird"
          src={Logobluebird}
          alt="About5"
        />
      </div>
      <Footer />
    </div>
  )
}

export default AboutUs
