import { useEffect, useRef } from "react";
import Testimonial from "./Testimonial";
import { TweenMax, Power3 } from 'gsap';

const TestimonialList = ({ testimonials }) => {
    const testimonialListRef = useRef(null);
  
    useEffect(() => {
      const testimonialList = testimonialListRef.current.children;
      TweenMax.staggerFrom(testimonialList, 1, { opacity: 0, y: 50, ease: Power3.easeOut }, 0.3);
    }, []);
  
    return (
      <div className="testimonial-list" ref={testimonialListRef}>
        {testimonials.map((testimonial) => (
          <Testimonial key={testimonial.id} {...testimonial} />
        ))}
      </div>
    );
  };

export default TestimonialList