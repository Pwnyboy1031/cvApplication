/* eslint-disable react/prop-types */
import '../styles/styles.css'
import { useState } from 'react';

function WorkSection({setWorkData, workData}) {
    const [newWork, setNewWork] = useState ({
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        responsibilities: '',
    });

    const handleAddWork = (e) => {
        e.preventDefault();
        setWorkData([...workData, newWork]);

        setNewWork({
            company: '',
            position: '',
            startDate: '',
            endDate: '',
            responsibilities: '',
        });
    };


    return(
        <div className="sectionComponent" id='workSection'>
            <form onSubmit={handleAddWork}>
                <h2>Work Experience</h2>
                <label htmlFor='companyNameInput'>Company</label>
                <input type='text' id='companyNameInput' value={newWork.company} onChange={(e) => setNewWork({...newWork, company: e.target.value})}></input>
                <label htmlFor='positionNameInput'>Position</label>
                <input type='text' id='positionNameInput' value={newWork.position} onChange={(e)=> setNewWork({...newWork, position: e.target.value})}></input>
                <label htmlFor='jobStartInput'>Start Date</label>
                <input type='date' id='jobStartInput' value={newWork.startDate} onChange={(e) => setNewWork({...newWork, startDate: e.target.value})}></input>
                <label htmlFor='jobEndInput'>End Date</label>
                <input type='date' id='jobEndInput' value={newWork.endDate} onChange={(e) => setNewWork({...newWork, endDate: e.target.value})}></input>
                <label htmlFor='responsibilities'>Responsibilities</label>
                <textarea type='text' id='responsibilities' value={newWork.responsibilities} onChange={(e) => setNewWork({...newWork, responsibilities: e.target.value})}></textarea>
                <button type='submit' className='submitButton'>Add</button>
            </form>
        </div>
    );
}

export default WorkSection