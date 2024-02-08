import React, { useRef, useState } from 'react';
import TrendingBlog from './TreandingBlog';
import trendingBlogsData from './TrendingBlogsData'; // Your data source
import './Blog.css';

const Trending = () => {
    const blogs = trendingBlogsData.getAllBlogs();
    const numberOfSlides = blogs.length;
    const [activeIndex, setActiveIndex] = useState(0);
    const sliderRef = useRef(null);

    const handleScroll = (event) => {
        const slider = event.target;
        const slideWidth = slider.scrollWidth / numberOfSlides; // Assume equal width for all slides
        const newActiveIndex = Math.round(slider.scrollLeft / slideWidth);
        setActiveIndex(newActiveIndex);
    };

    const scrollToSlide = (index) => {
        const slider = sliderRef.current;
        const slideWidth = slider.scrollWidth / numberOfSlides;
        const newScrollLeft = slideWidth * index;
      
        slider.scrollTo({
          left: newScrollLeft,
          behavior: 'smooth',
        });
      };
      

    return (
        <section>
            <h1 style={{color:'white'}}>Trending</h1>
            <div ref={sliderRef} className="trending-slider" onScroll={handleScroll}>
                {blogs.map(blog => (
                <TrendingBlog key={blog.id} {...blog} />
                ))}
            </div>
            <div className="slider-indicators">
                {Array.from({ length: numberOfSlides }, (_, index) => (
                    <div
                        key={index}
                        className={`slider-indicator ${index === activeIndex ? 'active' : ''}`}
                        onClick={() => scrollToSlide(index)}
                    />
                ))}
            </div>
        </section>
    );
};

export default Trending;
