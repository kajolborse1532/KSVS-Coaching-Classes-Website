import React from 'react';
import './Profile.css'; // Import the CSS file for styles

const Profile = ({ profile }) => {
  return (
    <section className="profile-section">
      <h2 className="section-heading text-center text-white">Profile</h2>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="profile-card">
              <div className="card-body">
                <h5 className="card-title">Profile Information</h5>
                <p className="card-text"><strong>Name:</strong> {profile.name}</p>
                <p className="card-text"><strong>Contact Number:</strong> {profile.contact}</p>
                <p className="card-text"><strong>Email:</strong> {profile.email}</p>
                <h5 className="card-title mt-4">Booked Courses</h5>
                {profile.courses.length > 0 ? (
                  profile.courses.map((course, index) => (
                    <div key={index}>
                      <p className="card-text"><strong>Course Name:</strong> {course.title}</p>
                      <p className="card-text"><strong>Course Fees:</strong> {course.fees}</p>
                      <hr />
                    </div>
                  ))
                ) : (
                  <p>No courses booked yet.</p>
                )}
              </div>
              <div className="profile-progress"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
