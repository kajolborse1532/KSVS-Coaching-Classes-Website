import React, { useRef } from 'react';
import emailjs from 'emailjs-com'; // Correct import for emailjs
import './contact.css'; // Import the CSS file

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q24so7n', 'template_9ldacji', form.current, 'Dw9vclJDhsWISGNvn')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert('Message sent successfully!');
          form.current.reset(); // Clear the form after successful submission
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send the message, please try again.');
        }
      );
  };

  return (
    <section className="inner-header divider overlay-theme-colored-7"
      style={{ backgroundImage: 'url(https://livingtolead.com/wp-content/uploads/2018/12/group-coaching-background.jpg)' }}
    >
      <div className="contact-container">
        <div className="contact-form-background">
          <div className="col-md-12">
            <h1 align="center">Enquiry Here</h1>
          </div>
          <section className="contact-info">
            <div className="info-item">
              <div className="icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <div className="info">
                <h4>Connect</h4>
                <span>
                  +91-7014674028 <br />+91-8447737180<br />
                </span>
              </div>
            </div>
            <div className="info-item">
              <div className="icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="info">
                <h4>Address</h4>
                <span>
                  KSVS Coaching Centre<br />
                  Bhuban Apartment, 1st Floor,<br />
                  21/2/1A, B N Ghosal Road.<br />
                </span>
              </div>
            </div>
            <div className="info-item">
              <div className="icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="info">
                <h4>Email Us</h4>
                <span>
                  <a href="mailto:kajolborse@gmail.com">kajolborse@gmail.com</a><br />
                  <a href="mailto:kajolborse@gmail.com">kajolborse@gmail.com</a><br /><br />
                </span>
              </div>
            </div>
          </section>
        </div>
        <div className="maps-form">
          <div className="col-md-6 maps" style={{ boxShadow: '0px 3px 10px -1px rgb(0 0 0 / 34%)', padding: '38px' }}>
            <h3 style={{ color: 'white' }}>Our Location</h3>
            <div className="google-maps">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.239154720162!2d75.78685141504525!3d26.927631783121257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db37b4984225f%3A0xc1e60ee7748c5aee!2sAcademy%20of%20Wedding%20Planning%20And%20Event%20Management!5e0!3m2!1sen!2sin!4v1621324371252!5m2!1sen!2sin"
                width="250"
                height="300"
                style={{ border: '2px' }}
                allowFullScreen=""
                loading="lazy"
                title="Location Map"
              ></iframe>
            </div>
          </div>
          <div className="col-md-6 form" style={{ boxShadow: '0px 3px 10px -1px rgb(0 0 0 / 34%)', padding: '20px' }}>
            <div className="heading">
              <h3 style={{ color: 'white' }}>Contact Us</h3>
              <p style={{ color: 'white' }}>
                Please feel free to ask any questions related to our Courses.
              </p>
            </div>
            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="from_name" placeholder="Your name" required />
              <label>Email</label>
              <input type="email" name="email_id" placeholder="Your email" required />
              <label>Message</label>
              <textarea name="message" placeholder="Your message" required />
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
