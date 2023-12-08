/* eslint-disable react/prop-types */
import '../styles/styles.css';
import { useState } from 'react';

function EducationSection({setEducationData, educationData}) {
    const [newEducation, setNewEducation] = useState ({
        school: '',
        degree: '',
        study: '',
        startDate: '',
        endDate: '',
        gpa: 0,
    });

    const handleAddEducation = (e) => {
        e.preventDefault();
        setEducationData([...educationData, newEducation]);

        setNewEducation({
            school: '',
            degree: '',
            study: '',
            startDate: '',
            endDate: '',
            gpa: 0,
        });
    };

    return (
        <div className='sectionComponent' id='educationSection'>
            <form onSubmit={handleAddEducation}>
            <h2>Education</h2>
                <label htmlFor='schoolInput'>Institution</label>
                <input type='text' id='schoolInput' value={newEducation.school} onChange={(e) => setNewEducation({...newEducation, school: e.target.value})}></input>
                <label htmlFor='degreeInput'>Degree</label>
                <input type='text' id='degreeInput' value={newEducation.degree} onChange={(e) => setNewEducation({...newEducation, degree: e.target.value})}></input>
                <label htmlFor='studyInput'>Area of Study</label>
                <input type='text' id='studyInput' value={newEducation.study} onChange={(e) => setNewEducation({...newEducation, study: e.target.value})}></input>
                <label htmlFor='schoolStartInput'>Start Date</label>
                <input type='date' id='schoolStartInput' value={newEducation.startDate} onChange={(e) => setNewEducation({...newEducation, startDate: e.target.value})}></input>
                <label htmlFor='schoolEndInput'>End Date</label>
                <input type='date' id='schoolEndInput' value={newEducation.endDate} onChange={(e) => setNewEducation({...newEducation, endDate: e.target.value})}></input>
                <label htmlFor='gpaInput'>GPA</label>
                <input type='number' id='gpaInput' value={newEducation.gpa} onChange={(e) => setNewEducation({...newEducation, gpa: e.target.value})}></input>
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

export default EducationSection