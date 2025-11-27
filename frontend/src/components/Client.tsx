import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Client = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    // Customization for dots:
    appendDots: (dots:any) => (
      <div
        style={{
          padding: '10px',
        }}
      >
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    ),
    customPaging: (i:any) => (
      <div
        style={{
          width: '12px',
          height: '12px',
          backgroundColor: '#ff6600', // Primary color for active dot
          borderRadius: '50%',
          display: 'inline-block',
        }}
      ></div>
    )
  };

  const testimonials = [
    {
      imgSrc: 'img/testimonial-1.jpg',
      name: 'Client Name 1',
      profession: 'Profession 1',
      quote:
        'Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit sea sed.',
    },
    {
      imgSrc: 'img/testimonial-2.jpg',
      name: 'Client Name 2',
      profession: 'Profession 2',
      quote:
        'Aliquyam consetetur eos sed et diam magna sit et dolor magna. Ipsum et et et erat rebum, et lorem magna.',
    },
    {
      imgSrc: 'img/testimonial-3.jpg',
      name: 'Client Name 3',
      profession: 'Profession 3',
      quote:
        'Diam amet est at amet et eirmod et nonumy, at amet elitr magna et stet, lorem ipsum dolor sit amet.',
    },
    {
      imgSrc: 'img/testimonial-4.jpg',
      name: 'Client Name 4',
      profession: 'Profession 4',
      quote:
        'Voluptua stet nonumy et amet sed, labore et magna no ipsum ut et. Et et magna lorem sit amet justo rebum.',
    },
  ];

  const primaryColor = '#ff6600'; // Define a primary color for consistency

  return (
    <div style={{ padding: '80px 0' }}>
      <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 15px' }}>
        <h1 style={{ fontSize: '7rem', color: primaryColor, textAlign: 'center', margin: '0 0 10px 0' }}>05</h1>
        <h2 style={{ fontSize: '2.5rem', textTransform: 'uppercase', textAlign: 'center', marginBottom: '40px', color: '#333' }}>
          Our Client's Say
        </h2>
        
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} style={{ padding: '0 15px' }}>
              {/* Testimonial Card */}
              <div
                style={{
                  backgroundColor: '#f8f9fa',
                  padding: '30px',
                  borderRadius: '10px',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                  minHeight: '280px', // Ensure consistent height
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  border: `1px solid ${primaryColor}40`,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  {/* Image */}
                  <img
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: `4px solid ${primaryColor}`,
                      marginLeft: '-20px', // Pull left for a dynamic look
                    }}
                    src={testimonial.imgSrc}
                    alt={`Testimonial from ${testimonial.name}`}
                  />
                  {/* Quote Icon */}
                  <div style={{ fontSize: '4rem', color: primaryColor, opacity: 0.5 }}>
                    &ldquo;
                  </div>
                </div>
                
                {/* Name and Profession */}
                <h4 style={{ textTransform: 'uppercase', margin: '0 0 5px 0', color: primaryColor }}>
                  {testimonial.name}
                </h4>
                <i style={{ marginBottom: '15px', color: '#6c757d', fontStyle: 'normal' }}>
                  {testimonial.profession}
                </i>
                
                {/* Quote Text */}
                <p style={{ margin: '0', color: '#555', lineHeight: '1.6' }}>
                  {testimonial.quote}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Client;