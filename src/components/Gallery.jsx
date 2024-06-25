import React, { useState, useEffect } from 'react';
import './Gallary.css';


import manImage1 from '../images/boy1.JPG';
import manImage2 from '../images/boy2.JPG';
import manImage4 from '../images/boy3.JPG';
import manImage3 from '../images/boy4.JPG';
import manImage5 from '../images/boy5.JPG';
import manImage6 from '../images/boy6.JPG';
import manImage7 from '../images/boy7.JPG';
import womanImage1 from '../images/woman2.jpg';
import womanImage2 from '../images/woman3.JPG';
import womanImage3 from '../images/woman1.JPG';

const studentsInitial = [
    { name: "Alice", category: "jee", marks: 89, photo: manImage1 },
    { name: "Eve", category: "cet", marks: 88, photo: womanImage1 },
    { name: "Bob", category: "cet", marks: 79, photo: manImage2 },
    { name: "Ivy", category: "neet", marks: 93, photo: womanImage3 },
    { name: "Charlie", category: "neet", marks: 95, photo: manImage3 },
    { name: "David", category: "jee", marks: 92, photo: manImage4 },
    { name: "Hannah", category: "cet", marks: 91, photo: womanImage2 },
    { name: "Frank", category: "neet", marks: 85, photo: manImage5 },
    { name: "Grace", category: "jee", marks: 78, photo: manImage7 },
    { name: "Jack", category: "jee", marks: 87, photo: manImage6 },
];

const Gallery = () => {
    const [students, setStudents] = useState(studentsInitial);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterCategory, setFilterCategory] = useState('all');
    const [suggestions, setSuggestions] = useState([]);
    const [newStudent, setNewStudent] = useState({ name: '', category: '', marks: '', photo: '' });
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        if (searchQuery === '') {
            setSuggestions([]);
        } else {
            const filteredSuggestions = students
                .filter(student =>
                    student.name.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map(student => student.name);
            setSuggestions(filteredSuggestions);
        }
    }, [searchQuery, students]);

    const handleSuggestionClick = (suggestion) => {
        setSearchQuery(suggestion);
        setSuggestions([]);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewStudent(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (newStudent.name && newStudent.category && newStudent.marks && newStudent.photo) {
            setStudents(prevStudents => [...prevStudents, { ...newStudent, marks: parseInt(newStudent.marks) }]);
            setNewStudent({ name: '', category: '', marks: '', photo: '' });
            setShowForm(false);  // Hide the form after submission
        } else {
            alert("Please fill in all fields.");
        }
    };

    const filteredStudents = students.filter(student => {
        const matchesSearchQuery = student.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = filterCategory === 'all' || student.category === filterCategory;
        return matchesSearchQuery && matchesCategory;
    });

    return (
        <div>
            <section
                className="inner-header divider overlay-theme-colored-7"
                style={{ backgroundImage: 'url(https://livingtolead.com/wp-content/uploads/2018/12/group-coaching-background.jpg)' }}
            >
                <div className="container pt-120 pb-60">
                    <div className="section-content">
                        <div className="row">
                            <h2 className="text-theme-colored2 font-36">&nbsp;Gallery</h2>
                            <ol className="breadcrumb text-left mt-10 white">
                                <div className="breadcrumb">
                                    <span><a href="/">Home&nbsp;&nbsp;</a></span> /&nbsp;&nbsp; <span>Gallery</span>
                                </div>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
            <header>
                <div>
                    <br />
                    <h1>Our Successful Students</h1>
                </div>
                <div id="search-container">
                    <input
                        type="text"
                        id="search-input"
                        placeholder="Search students..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <div id="suggestions-container">
                        {suggestions.length > 0 && (
                            <ul id="suggestions-list">
                                {suggestions.map((suggestion, index) => (
                                    <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                                        {suggestion}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
                <div id="filter">
                    <button onClick={() => setFilterCategory('all')}>All</button>
                    <button onClick={() => setFilterCategory('jee')}>JEE</button>
                    <button onClick={() => setFilterCategory('cet')}>CET</button>
                    <button onClick={() => setFilterCategory('neet')}>NEET</button>
                </div>
            </header>
            <div id="products-container">
                {filteredStudents.map((student, index) => (
                    <div className="card" key={index}>
                        <div className="image-container">
                            <img src={student.photo} alt={student.name} />
                        </div>
                        <p>{student.name}</p>
                        <p>Marks: {student.marks}</p>
                        <p>Category: {student.category}</p>
                    </div>
                ))}
            </div>
            <button onClick={() => setShowForm(!showForm)} className="add-student-btn">
                {showForm ? "Close Form" : "Add Student"}
            </button>
            {showForm && (
                <div id="form-container">
                    <h2>Add New Student</h2>
                    <form onSubmit={handleFormSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={newStudent.name}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="category"
                            placeholder="Category (jee, cet, neet)"
                            value={newStudent.category}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            name="marks"
                            placeholder="Marks"
                            value={newStudent.marks}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="photo"
                            placeholder="Photo URL"
                            value={newStudent.photo}
                            onChange={handleInputChange}
                        />
                        <button type="submit">Add Student</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Gallery;
