import React from 'react'
import '../Styles/About.css'
import abouts from '../Assets/About.jpg'
import hvac from '../../src/Assets/preview (6).webp';
import about from '../Assets/about-us.jpg'
import vission from '../Assets/vision.jpg'
import mission from '../Assets/mission.jpg'
import philosophy from '../Assets/philosophy.jpg'
import Footer from '../Components/Footer';
import { FaHeadphones } from "react-icons/fa";
import { RxLightningBolt } from "react-icons/rx";
import { Link } from 'react-router-dom';
function About() {
  return (
    <div>
        <div className='about-container'>
        <div className='about-background'>
          <img src={abouts} alt='HVAC Maintenance' />
        </div>
        <div className='about-text'>
          <h1>About Us</h1>
        </div>
      </div>
      <div className='about-company'>
        <div className='about-images'>
            <img src={hvac} />
            <p>25 Years of Experience!</p>
        </div>
        <div className='about-content-text'>
            <h3>About Company</h3>
            <p>MAHDIYA TECH has gained wide recognition and outstanding reputation through its quality work man ship, innovative engineering and project management skills, enabling it to expand from being a mechanical works and electrical works into a full-service engineering and construction contractor catering to domestic and international clients. The continuing improvement of services and performance has made us well regarded as one of the best contractor company in UAE.</p>
            <p>We have excellent records of on time completion of various types of reputable and prominent construction and MEP projects in UAE, in the recent years. With sophisticated strategies supported by sufficient funds couple with our strong management teams and competent staffs, our successfully continuing growth will be ensured respectively. We have clear policies to enhance the capability of staffs both management and technical skills together with implementing new technology for construction and MEP engineering as well as retaining our effective corporate governance with business operational transparency, social responsibility and environmental care in order that all stakeholders obtain more sustainable value as well as we reach to our ultimate accomplishment.</p>
        </div>
      </div>
      <div className='about-simple-content'>
        <p>We are committed to responding to the sustainability challenge along with the changing of demand from customers. By developing and implementing sustainability strategy covering our future operations, we are confident that our services will go beyond our customer's.</p>
      </div>
      <div className='second-div'>
        <div className="left">
                <div className='techni'>
                <h1>Mahdiya Technical Services LLC 25+ Years Of Experience With Providing Wide Auto Services.</h1>
                <p>At Mahdiya Technical Services LLC we have over 25 years of cleaning experience, providing a range of professional services to many profiles of clients worldwide.</p>

                </div>
                <div className='thdivs'>
                    <div className='mission'>
                        <h3>OUR MISSION</h3>
                        <img src={mission}/>
                        <p>Our mission is to serve customers with quality construction services, which adds value to their projects.From planning through post construction, we are committed to the project and the team</p>
                    </div>
                    <div className='vission'>
                        <h3>OUR VISSION</h3>
                        <img src={vission}/>
                        <p>The company was originally a sole trader business founded in 1990, who is now the Director at Mr. Handy. Aim has always been to provide a professional and best service.Mahdiya Technical Services LLC has a growing Task force years, covering the Exterior Electrician Maintenance in varying in sectors.</p>
                    </div>
                    <div className='philosophy'>
                        <h3>Philosopy</h3>
                        <img src={philosophy}/>
                        <p>The company was originally a sole trader business founded in 1990, who is now the Director at Mr. Handy. Aim has always been to provide a professional and best service.Mahdiya Technical Services LLC has a growing Task force years, covering the Exterior Electrician Maintenance in varying in sectors.</p>
                    </div>

                </div>
                <div className='buttoons'>
                <a href="04-2365765">
  <button className='call'>
    <FaHeadphones />
    Give Us a Call
  </button>
   </a>
                    <Link to='/contact'> <button className='estimate'><RxLightningBolt />Free Estimate</button></Link>
                </div>
        </div>
        <div className="right">
            <img src={about} />
            <h3>We Build for Your Comfort</h3>
            <a href="04-2365765"> <p>Any Questions? Call:<span>04-2365765</span></p> </a>

        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About