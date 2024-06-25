import React from 'react';
import './About.css'; // Import the CSS file for About
import founderImage from '../images/founder-image.png'; // Corrected variable name
import VisionImage from '../images/vision1.png';
import MissionImage from '../images/mission11.png';
import primeImage from '../images/prime-focus.png';
const About = () => {
  return (
    <div className="about-container">
      <section
        className="inner-header divider overlay-theme-colored-7"
        style={{ backgroundImage: 'url(https://livingtolead.com/wp-content/uploads/2018/12/group-coaching-background.jpg)' }}
      >
        <div className="container pt-120 pb-60">
          <div className="section-content">
            <div className="row">
              
                <h2 className="text-theme-colored2 font-36">&nbsp;About Us</h2>
                <ol className="breadcrumb text-left mt-10 white">
                 
                  <div className="breadcrumb">
                        <span><a href="/">Home&nbsp;&nbsp;</a></span> /&nbsp;&nbsp; <span>About Us</span>
                    </div>

                </ol>
              </div>
            </div>
          </div>
      </section>
      <section>
        <div className="container">
          <div className="row row_m" id="page_content">
            <div className="col-md-4 col-sm-6 img-bg">
              <img src={founderImage} alt="Founder" /> {/* Corrected variable name */}
            </div>
            <div className="col-md-6 col-sm-6">
              <h3 className="mspace course_main_title">
                <strong style={{ color: '#fc9928' }}>Founder's Message</strong>
              </h3> 
              <p align="justify">Education empowers individuals to make informed life decisions based on logical reasoning, fostering success, happiness, and fulfillment. As educators at <b>KSVS Coaching Center</b>, we inspire students to shape their futures, strengthening societal foundations through timely and comprehensive education. We are dedicated to nurturing talent and realizing aspirants' dreams through adaptive courses that meet evolving educational standards. Our innovative teaching methodologies prepare students for competitive exams, ensuring their readiness to excel in engineering and medical fields across India.</p>
              <p align="justify">As an educator, I believe in encouraging learners to choose and create the lives they desire, thereby strengthening the core of the society for all. The right education at the right time can enable a student to accomplish anything they desire.</p>
            </div>
          </div>
          <div className="row">   
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row row_m" id="page_content">
            
            <div className="col-md-6 col-sm-6">
              
            </div>
          </div>
          <div className="row1">
            <div className="col-md-18 pt-10">
            <h3 className="mspace course_main_title">
                <strong style={{ color: '#fc9928' }}>Our Vision </strong>
              </h3>
            <h5>Determination </h5>
              <p align="justify">As an educator, I believe in encouraging learners to choose and create the lives they desire, thereby strengthening the core of the society for all. The right education at the right time can enable a student to accomplish anything they desire..</p>
             <h5>Progress </h5>
              <p align="justify">At Narayana, we refuse to limit ourselves and strive to grow constantly. We believe in continuous innovation and progress to make our institutes ready for the future.</p>
              <h5>Service </h5>
              <p align="justify">The field of education is inherently a service-oriented endeavor. At Narayana, we are committed to empowering students with the essential skills and resources they need to succeed in life.</p>
             
            </div>
          </div>
          <div className="col-md-4 col-sm-6 img-bg">
              <img src={VisionImage} alt="Vision" /> {/* Corrected variable name */}
            </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row row_m" id="page_content">
            <div className="col-md-5 col-sm-6 img-bg">
              <img src={MissionImage} alt="Mission" /> {/* Corrected variable name */}
            </div>
            <div className="col-md-6 col-sm-2">
              <h3 className="mspace course_main_title">
                <strong style={{ color: '#fc9928' }}>Our Mission</strong>
              </h3> 
              <h5>Academic rigour </h5>
              <p align="justify">To aid in the development of a natural capacity to comprehend concepts, master its content, experiment with methods, and carefully implement difficult methodologies..</p>
             <h5>Zeal of competition </h5>
              <p align="justify">The Narayana group values and encourages healthy competition among students as a way to get them ready for challenges in and out of the classroom.</p>
              <h5>Zenith of Success </h5>
              <p align="justify">The Narayana Group leaves no stone unturned when it comes to the academics of its students. We strive to employ every method that helps students make the most of their potential and reach the top of their respective fields.</p>
             
            </div>
          </div>
          
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row row_m" id="page_content"> 
          </div>
          <div className="row1">
            <div className="col-md-18 pt-10">
            <h3 className="mspace course_main_title">
                <strong style={{ color: '#fc9928' }}>Prime Focus </strong>
              </h3>
            <p >KSVS Coaching Center focuses to establish well-researched and pragmatic business practices to enable the students to meet the challenges of a fast-changing business environment in the new world economic order. KSVS Coaching Center aims to develop conceptual and practical skills to convert the abilities of students into managerial competence, required in today’s competitive environment.</p>
            <p>We, at KSVS Coaching Center, strongly believe that a blend of relevant knowledge, skill, and right attitude is essential for the overall development of students, which determines their growth and success in the world.</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 img-bg">
              <img src={primeImage} alt="Primefocus" /> {/* Corrected variable name */}
            </div>
        </div>
      </section>
    </div>
  );
};

export default About;
