import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Enquiry.css'; // Import the CSS file for Enquiry

const Enquiry = () => {
  
  return (
    <>
      {/* New section with background image and content */}
      <section
        className="inner-header divider overlay-theme-colored-7"
        style={{ backgroundImage: 'url(https://livingtolead.com/wp-content/uploads/2018/12/group-coaching-background.jpg)' }}
      >
        <div className="container pt-120 pb-60">
          <div className="section-content">
            <div className="row">
              <div className="col-md-6">
                <h2 className="text-theme-colored2 font-36">&nbsp;&nbsp;&nbsp;Enquiry</h2>
                <ol className="breadcrumb text-left mt-10 white">
                  <li><h5><Link to="/">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Home ▶</Link></h5></li>
                  <li><h5>&nbsp;&nbsp;&nbsp;&nbsp;Enquiry</h5></li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Existing Enquiry section */}
     
     

        <div className="navigate-to-contact">
          <Link to="/contact">Go to Contact</Link> {/* Add Link to navigate to Contact component */}
        </div>
      
    </>
  );
};

export default Enquiry;
