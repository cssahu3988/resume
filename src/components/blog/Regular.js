import React from "react";
import './Blog.css';

function Regular() {
    const testimonials = [
        { name: "Deepak Panda", profession: "UI/UX Designer", testimony: "“I was fascinated by art and painting since ​my childhood. I always had a dream to ​showcase my work and make it reach to a ​massive audience online. Sarthak and ​Chandra have been the artists who have ​made my dreams come true ”",imageUrl:"/images/testimonial_1.png" },
        { name: "Siddharth Das", profession: "Gamer", testimony: "“Sarthak and Chandra have been really ​instrumental in their approach so far, I ​wish them all the best for their future ​endeavors. ”" ,imageUrl:"/images/testimonial_2.png"},
        { name: "Rajesh Birumann", profession: "Lead Java Developer", testimony: "“Sarthak and Chandra have been superb ​and awesome in their approach so far. ​Cant wait anymore to get my own ​personalized branding to take place.”" ,imageUrl:"/images/testimonial_3.png"},
        // ... more testimonials
      ];

    return (
        <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
                <img src="/developer.jpg" alt={testimonial.name} className="testimonial-grid-blog-image" />
                <div className="testimonial-top">
                    <img src={testimonial.imageUrl} alt={testimonial.name} className="testimonial-image" />
                    <div className="testimonial-info">
                        <p>{testimonial.name}</p>
                        <p>{testimonial.profession}</p>
                    </div>
                </div>
                <p className="testimonial-description">{testimonial.testimony}</p>
            </div>
            ))}
        </div>
    );
}

export default Regular;
