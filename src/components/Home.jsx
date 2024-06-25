import React from 'react';
import './Home.css'; // Import the CSS file for home component
import headingImage from '../images/heading.jpg';
import manImg from '../images/man-img.jpg';
import womanImg from '../images/Women-img.jpg';
import manImgg from '../images/man-img1.jpg';

const Home = () => {
  const courses = [
    {
      title: "JEE Board - Advanced",
      duration: "Lifetime",
      lessons: "24 Lessons",
      image: headingImage,
    },
    {
      title: "WBJEE Board - Advanced",
      duration: "Lifetime",
      lessons: "24 Lessons",
      image: headingImage,
    },
    {
      title: "NEET Board - Advanced",
      duration: "Lifetime",
      lessons: "30 Lessons",
      image: headingImage,
    },
    {
      title: "CBSE Board - Advanced",
      duration: "Lifetime",
      lessons: "20 Lessons",
      image: headingImage,
    },
    {
      title: "ICSE Board - Advanced",
      duration: "Lifetime",
      lessons: "22 Lessons",
      image: headingImage,
    },
    {
      title: "State Board - Advanced",
      duration: "Lifetime",
      lessons: "28 Lessons",
      image: headingImage,
    },
    {
      title: "CBSE Board - Advanced",
      duration: "Lifetime",
      lessons: "20 Lessons",
      image: headingImage,
    },
    {
      title: "PHYSICS - Advanced",
      duration: "Lifetime",
      lessons: "30 Lessons",
      image: headingImage,
    },
  ];

  return (
    <div className="home">
      <section
        className="inner-header divider overlay-theme-colored-7"
        style={{ backgroundImage: 'url(https://livingtolead.com/wp-content/uploads/2018/12/group-coaching-background.jpg)' }}
      >
        <div className="container pt-120 pb-60">
          <div className="section-content">
            <div className="row">
              <h2 className="text-theme-colored2 font-36">&nbsp;Home</h2>
              <ol className="breadcrumb text-left mt-10 white">
                <div className="breadcrumb">
                  <span><a href="/">Home&nbsp;&nbsp;</a></span> &nbsp;&nbsp; 
                </div>
              </ol>
            </div>
          </div>
        </div>
      </section>
      
      <section id="about-us" className="section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <h1 className="section-title text-center mb-4">About Us</h1>
              <p className="text-center">
                <i>Welcome to KSVS Coaching Center, where excellence meets education. Established with a vision to empower students through quality tutoring and guidance, we are committed to nurturing academic potential and fostering lifelong learning skills.</i>
              </p>
              <p className="text-center">
                <i>At KSVS Coaching Center, we believe in personalized education that goes beyond textbooks. Our team of experienced educators is dedicated to providing comprehensive support tailored to each student’s unique learning needs. Whether preparing for competitive exams, enhancing subject proficiency, or seeking academic enrichment, our programs are designed to inspire intellectual curiosity and achieve academic success.</i>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="content-section">
        <div className="container">
          <h2 className="section-heading text-center">Quality of Our Coaching Centre</h2>
          <div className="row g-3 text-center">
            <div className="col-6 col-md-4">
              <div className="p-3 statistics-block" style={{ backgroundColor: 'lightgrey' }}>
                <strong>Years Of Experience: <br /><b>30+</b></strong>
              </div>
            </div>
            <div className="col-6 col-md-4">
              <div className="p-3 statistics-block" style={{ backgroundColor: 'lightgrey' }}>
                <strong>Total Students: <br /><b>350,000+</b></strong>
              </div>
            </div>
            <div className="col-6 col-md-4">
              <div className="p-3 statistics-block" style={{ backgroundColor: 'lightgrey' }}>
                <strong>Expert Teachers: <br /><b>180+</b></strong>
              </div>
            </div>
            <div className="col-6 col-md-4">
              <div className="p-3 statistics-block" style={{ backgroundColor: 'lightgrey' }}>
                <strong>Students Got Above 95%: <br /><b>17,521+</b></strong>
              </div>
            </div>
            <div className="col-6 col-md-4">
              <div className="p-3 statistics-block" style={{ backgroundColor: 'lightgrey' }}>
                <strong>Students Got Above 90%: <br /><b>107,545+</b></strong>
              </div>
            </div>
            <div className="col-6 col-md-4">
              <div className="p-3 statistics-block" style={{ backgroundColor: 'lightgrey' }}>
                <strong>Students Got Above 80%: <br /><b>130,281+</b></strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <section className="additional-section">
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <div>
                <h2 style={{ textAlign: 'center', fontSize: '200%' }}>
                  <b><i>Beat the Competition with Our Institute's Exam Strategies</i></b>
                </h2>
                <h5 style={{ color: 'orange' }}>Improved Preparation</h5>
                <p>Reduced Stress</p>
                <p>Time-saving</p>
                <p>Better Grades</p>
                <p>Confidence Building</p>
              </div>
            </div>
            <div className="col animated-div">
              <div className="content founder-message" style={{ borderRadius: '15px' }}>
                <h2>Founder's Message</h2>
                <b><i>"Students should aim for high marks during their academic years, knowing that the deeper lessons and wisdom will unfold over a lifetime."</i>
                <p>- Sundar Patil</p>
                <p>Founder</p></b>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonial-container">
          <div className="testimonial-item">
            <img src={manImg} alt="Student A" className="student-img" />
            <p>"I am grateful to KSVS Coaching Center for guiding me through my academic journey. Their expert faculty and personalized approach helped me grasp complex concepts easily. I can confidently say that my grades have significantly improved since joining."</p>
            <p>- John Doe</p>
          </div>
          <div className="testimonial-item">
            <img src={womanImg} alt="Student B" className="student-img" />
            <p>"My experience with KSVS Coaching Center has been phenomenal. The teachers are not only knowledgeable but also caring and supportive. They provided me with the resources and encouragement I needed to excel in my exams. I highly recommend KSVS to anyone looking for quality education."</p>
            <p>- Jane Smith</p>
          </div>
          <div className="testimonial-item">
            <img src={manImgg} alt="Student C" className="student-img" />
            <p>"I'm thankful to KSVS Coaching Center for helping me build a strong academic foundation. The comprehensive study material and interactive classes made learning enjoyable and effective. Thanks to their guidance, I feel more confident in tackling any academic challenge."</p>
            <p>- Michael Johnson</p>
          </div>
        </div>
      </section>
      
      
      {/* Virtual Store Section */}
      <section className="virtual-store-section">
        <div className="container">
          <form> 
            <div style={{ border: '1px solid black', padding: '20px' }}>
              <h2><b>Gear Up for Learning with Our Virtual Learning Hub</b></h2>
              <input type="text" placeholder="Enter Student Name" />
              <input type="email" placeholder="Your Email" />
              <input type="tel" placeholder="Your Mobile Number" />
              <input type="text" placeholder="Your District" />
              <input type="text" placeholder="Your Post office" />
              <input type="text" placeholder="Your Class" />
              <textarea placeholder="Your Message"></textarea>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
