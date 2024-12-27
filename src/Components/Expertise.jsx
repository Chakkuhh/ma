import React from 'react';
import '../Styles/Expertise.css';
import industry from '../Assets/worker.jpg';
import hvac1 from '../Assets/hvac1.jpg';
import hvac2 from '../Assets/hvac2.jpg';
import hvac3 from '../Assets/hvac3.jpg';
import hvac4 from '../Assets/hvac4.jpg';
import hvac5 from '../Assets/preview (1).webp';
import hvac6 from '../Assets/preview (4).webp';
import { Link } from 'react-router-dom';



function Expertise() {
  return (
    <div >
      <div className='exp-heading'>
        <h1>EXPERTISE ACROSS MULTIPLE INDUSTRIES</h1>
        <p>Ensure that customer needs and expectations are determined and fulfilled with the aim of achieving customer satisfaction through over best practices.</p>
      </div>
      <div className='exp-mod' >
        <Link to='/home/hvacPre'>
        <div className="exp-image-content">
          <img src={hvac1} alt="HVAC Preventive Maintenance" />
          <h3>HVAC Preventive Maintenance/AMC Services</h3>
          <p>Keep your HVAC systems efficient and reliable with our expert maintenance services, ensuring minimal downtime, optimal performance, and year-round comfort.</p>
        </div>
        </Link>
        <Link to='/home/hvacReno'>
        <div className="exp-image-content">
          <img src={hvac5} alt="HVAC Renovation Work" />
          <h3>HVAC Renovation Work and Project</h3>
          <p>Upgrade and optimize your HVAC systems with our expert renovation services, tailored for enhanced efficiency and performance in any project.</p>
        </div>
        </Link>
        <Link to='/home/compressor'>
        <div className="exp-image-content">
          <img src={hvac3} alt="Compressor Overhauling" />
          <h3>Compressor Overhauling Work</h3>
          <p>Restore your compressor's efficiency and reliability with our specialized overhauling services, ensuring optimal performance and longevity.</p>
        </div>
        </Link>
        <Link to='/home/aircooler'>
        <div className="exp-image-content">
          <img src={hvac4} alt="Aircooled Chiller Specialists" />
          <h3>Aircooled Chiller Specialists</h3>
          <p>Expert solutions for air-cooled chillers, ensuring efficient cooling, reliable performance, and extended equipment lifespan.</p>
        </div>
        </Link>
        <Link to='/home/aircondition'>
        <div className="exp-image-content">
          <img src={hvac2} alt="AC Installation & Maintenance" />
          <h3>AC Installation & Maintenance</h3>
          <p>Professional AC installation and maintenance services to ensure optimal cooling, energy efficiency, and long-term reliability.</p>
        </div>
        </Link>
        <Link to='/home/motor'>
        <div className="exp-image-content">
          <img src={hvac6} alt="Electrical Motor Repairs" />
          <h3>Electrical Motor Repairs & Services</h3>
          <p>Expert repair and maintenance for electrical motors, ensuring efficiency, reliability, and extended operational life.</p>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Expertise;
