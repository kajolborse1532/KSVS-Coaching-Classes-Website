import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Blogs.css';

import studyTips from '../images/study_tips.jpg';
import positiveThinking from '../images/positive-thinking.jpg';
import timeManagement from '../images/time_management.jpg';
import mindfulnessMeditation from '../images/mindfulness_meditation.jpg';
import collegeStress from '../images/college_stress.png';

const Blogs = () => {
  const initialBlogs = [
    {
      id: 1,
      title: "5 Study Tips ",
      image: studyTips,
      info: "Discover effective study strategies to improve your exam performance.",
      link: "https://www.google.com/search?q=study+tips"
    },
    {
      id: 2,
      title: "Positive Thinking",
      image: positiveThinking,
      info: "Learn how cultivating a positive mindset can transform your life.",
      link: "https://www.google.com/search?q=positive+thinking"
    },
    {
      id: 3,
      title: "Mastering Time Management",
      image: timeManagement,
      info: "Unlock the secrets to effective time management and productivity.",
      link: "https://www.google.com/search?q=time+management"
    },
    {
      id: 4,
      title: " Mindfulness Meditation",
      image: mindfulnessMeditation,
      info: "Explore the science-backed benefits of mindfulness meditation for your mental well-being.",
      link: "https://www.google.com/search?q=mindfulness+meditation"
    },
    {
      id: 5,
      title: "Navigating Stress in College",
      image: collegeStress,
      info: "Get practical tips for managing stress and maintaining balance in college life.",
      link: "https://www.google.com/search?q=stress+in+college"
    }
  ];

  const [blogs, setBlogs] = useState(initialBlogs);
  const [newBlog, setNewBlog] = useState({ title: '', image: '', info: '', link: '' });
  const [showForm, setShowForm] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBlog({ ...newBlog, [name]: value });
  };

  const handleAddBlog = (e) => {
    e.preventDefault();
    const newBlogWithId = { ...newBlog, id: blogs.length + 1 };
    setBlogs([...blogs, newBlogWithId]);
    setNewBlog({ title: '', image: '', info: '', link: '' });
    setShowForm(false);
  };

  return (
    <div className="blogs-content">
      <section
        className="inner-header divider overlay-theme-colored-7"
        style={{ backgroundImage: 'url(https://livingtolead.com/wp-content/uploads/2018/12/group-coaching-background.jpg)' }}
      >
        <div className="container pt-120 pb-60">
          <div className="section-content">
            <div className="row">
              <h2 className="text-theme-colored2 font-36">&nbsp;Blogs</h2>
              <ol className="breadcrumb text-left mt-10 white">
                <div className="breadcrumb">
                  <span><a href="/Home">Home&nbsp;&nbsp;</a></span> /&nbsp;&nbsp; <span>Blogs</span>
                </div>
              </ol>
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <h1 className="blogs-cont" style={{ backgroundColor: "lightyellow" }}>Our Blogs ...</h1>
        <h5 style={{ backgroundColor: "lightblue" }}>
          Coaching is the art of unlocking an individual's inherent potential, empowering them to achieve peak performance by fostering self-discovery and growth. It's about guiding and supporting, rather than instructing, to cultivate a journey of learning and personal development.
        </h5>
        <button onClick={() => setShowForm(!showForm)} className="add-blog-button">
          {showForm ? 'Cancel' : 'Add Blog'}
        </button>
        {showForm && (
          <form onSubmit={handleAddBlog} className="add-blog-form">
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={newBlog.title}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={newBlog.image}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="info"
              placeholder="Information"
              value={newBlog.info}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="link"
              placeholder="Link"
              value={newBlog.link}
              onChange={handleInputChange}
              required
            />
            <button type="submit">Add Blog</button>
          </form>
        )}
      </section>

      <div className="blogs">
        {blogs.map(blog => (
          <motion.div
            key={blog.id}
            className="blog"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={blog.image} alt={blog.title} className="blog-image"/>
            <div className="info">
              <h3>{blog.title}</h3>
              <p>{blog.info}</p>
              <button className="more-info-button">
                <a href={blog.link} target="_blank" rel="noopener noreferrer">More Information</a>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
