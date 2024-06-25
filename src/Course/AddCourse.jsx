import axios from 'axios';
import React, { useState } from 'react'

export default function AddCourse() {

    const [coursename, setCoursename] = useState("");
    const [fee, setFee] = useState("");
    const [image, setImage] = useState(null); // Change to null
    const handleFileChange = (e) => {
        setImage(e.target.files[0]);
    };

    async function save(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("CourseName", coursename);
        formData.append("fee", fee);
        formData.append("image", image);

        try {
            await axios.post("http://localhost:8080/api/course/addCourse", formData, {
                headers: {
                    "Content-Type": "multipart/form-data", // Make sure to set Content-Type
                },
            });
            alert("Photo added Successfully");
            setCoursename("");
            setFee("");
            setImage(null); // Change to null
        } catch (err) {
            alert("Failed to add Photo");
        }
    }
  return (
    <div style={{ display: 'flex',marginLeft: '50px', justifyContent: 'center', alignItems: 'center', height: '80vh', backgroundColor: '#f0f0f0' }}>
    <div style={{ width: '500px', padding: '20px', borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', backgroundColor: '#ffffff' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '10px', color: '#333333',fontWeight: 'bold', fontSize: '30px' }}>Course</h2>

        <form className='register-form' onSubmit={save} style={{ display: 'flex', flexDirection: 'column' }}>
            {/* <br></br>
            <h1>Sign In</h1> */}

            <input
                type="text"
                name="name"
                placeholder="Course Name"
                value={coursename}
                onChange={(e) => setCoursename(e.target.value)}
                style={{ marginBottom: '10px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
            <input
                type="text"
                name="course"
                placeholder="Course Fee"
                value={fee}
                onChange={(e) => setFee(e.target.value)}
                style={{ marginBottom: '10px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
            
            <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleFileChange} // Use e.target.files[0]
                />

            <button type="submit" style={{ marginBottom: '10px', padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#007bff', color: '#ffffff', cursor: 'pointer' }}>Add</button>
        </form>

    </div>
</div>
  )
}
