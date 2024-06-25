import React from 'react';
import './Suggestion.css';
const Suggestion = () => {
  return (

    <div><section
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
      <h1>Suggestions</h1>
      <p>Here are some suggestions for you:</p>
      <ul>
        <li>Try our new courses!</li>
        <li>Check out our latest blog posts.</li>
        <li>Join our upcoming events.</li>
      </ul>
    </div>
  );
};

export default Suggestion;
