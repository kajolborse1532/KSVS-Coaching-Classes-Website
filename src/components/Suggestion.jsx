import React from 'react';
import './Suggestion.css';

const Suggestion = () => {
  return (
    <div>
      <section
        className="inner-header divider overlay-theme-colored-7"
        style={{ backgroundImage: 'url(https://livingtolead.com/wp-content/uploads/2018/12/group-coaching-background.jpg)' }}
      >
        <div className="container pt-120 pb-60">
          <div className="section-content">
            <div className="row">
              <div className="col-md-6">
                <h2 className="text-theme-colored2 font-36">&nbsp;&nbsp;&nbsp;Suggestions</h2>
                <ol className="breadcrumb text-left mt-10 white">
                  <div className="breadcrumb">
                    <span><a href="/">Home&nbsp;&nbsp;</a></span> /&nbsp;&nbsp; <span>Suggestions</span>
                  </div>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="suggestions-page">
        <h1>We Value Your Feedback!</h1>
        <p>Your suggestions help us improve our services and provide a better experience for everyone.</p>
        <form action="/submit-suggestion" method="POST">
          <label htmlFor="name">Name (Optional):</label>
          <input type="text" id="name" name="name" />

          <label htmlFor="email">Email (Optional):</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="category">Category of Feedback:</label>
          <select id="category" name="category">
            <option value="course-content">Course Content</option>
            <option value="teaching-methods">Teaching Methods</option>
            <option value="facilities">Facilities</option>
            <option value="website-experience">Website Experience</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor="suggestions">Your Suggestions/Comments:</label>
          <textarea id="suggestions" name="suggestions" rows="4" required></textarea>

          <label htmlFor="rating">Rate Your Overall Experience:</label>
          <input type="number" id="rating" name="rating" min="1" max="10" />

          <label htmlFor="file-upload">Upload File (Optional):</label>
          <input type="file" id="file-upload" name="file-upload" />


          <button type="submit">Submit</button>
        </form>

        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <p><strong>Q: How will my feedback be used?</strong></p>
          <p>A: Your feedback will be reviewed by our team to make necessary improvements and enhancements.</p>
          {/* Add more FAQs as needed */}
        </div>

        <div className="testimonial-section">
          <h2>We’ve Listened!</h2>
          <p>Based on your feedback, we have implemented the following changes:</p>
          <ul>
            <li>Improved course materials for better understanding.</li>
            <li>Enhanced our online learning platform for a seamless experience.</li>
            {/* Add more improvements as needed */}
          </ul>
        </div>

        <div className="contact-info">
          <h2>Need Help?</h2>
          <p>Contact us at <a href="mailto:support@coachingclass.com">support@coachingclass.com</a> or call us at (123) 456-7890.</p>
        </div>
      </div>
    </div>
  );
};

export default Suggestion;
