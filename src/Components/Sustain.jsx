import React, { useState } from 'react';
import '../Styles/Sustain.css';
import gear from '../Assets/preview (6).webp';
import certification from '../Assets/certification.jpg';
import { useInView } from 'react-intersection-observer';

function Sustain() {
  const [isVisible, setIsVisible] = useState(false);

  const handleInViewChange = (inView) => {
    setIsVisible(inView);
  };

  const { ref } = useInView({
    triggerOnce: true, // Trigger the animation once
    onChange: handleInViewChange,
    threshold: 0.5, // Element is 50% in view to trigger
  });

  return (
    <div className={`sustain-container ${isVisible ? 'fade-in' : ''}`} ref={ref}>
      <div className="sustain-text">
        <h6 className="type">CLIENT FEEDBACK</h6>
        <h4>SUSTAINABILITY</h4>
        <p>
          We are committed to environmental sustainability. Grounded in a wealth of experience, 
          our aim is to ensure your cooling systems remain in perfect working order and running costs are minimised.
        </p>
        <div className="certification slide-left">
          <img src={certification} alt="certification" />
        </div>
      </div>
      <div className="sustain-img slide-right">
        <img src={gear} alt="Sustainability" />
      </div>
    </div>
  );
}

export default Sustain;

