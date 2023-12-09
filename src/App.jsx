//import { useState } from 'react'
import PersonalSection from './components/personalSection'
import CvDisplay from './components/cvdisplay.jsx'
import EducationSection from './components/EducationSection'
import WorkSection from './components/workSection'
import { useState } from 'react'
import  html2pdf  from 'html2pdf.js'




function App() {

  
  function handlePdfConversion() {
    let resumeBox = document.getElementById('resumeDisplay');

    // Find and store all delete buttons in the resume display
    const deleteButtons = resumeBox.querySelectorAll('delete-button');

    // Temporarily remove delete buttons from the resume display
    deleteButtons.forEach((button) => {
      button.style.display = 'none';
    });

    // Generate the PDF
    html2pdf(resumeBox)

    // Restore delete buttons after generating the PDF
    deleteButtons.forEach((button) => {
      button.style.display = 'block';
    });
  }

  const [personalInfo, setPersonalInfo] = useState({
    firstName: 'John',
    lastName: 'Smith',
    email: 'john.smith@example.com',
    phone: '555-543-1234',
    address: '123 Main St, Cityville, USA',
});

  const [educationData, setEducationData] = useState([{
    school: 'University of Cityville',
    degree: 'Bachelor of Science',
    study: 'Computer Science',
    startDate: '2010-09-01',
    endDate: '2014-06-01',
    gpa: 3.8,
},

{
  school: 'City Tech Institute',
  degree: 'Master of Science',
  study: 'Software Engineering',
  startDate: '2015-09-01',
  endDate: '2017-06-01',
  gpa: 4.0,
},
]);

  const removeEducation = (index) => {
    setEducationData((prevEducationData) => {
      const updatedEducationData = [...prevEducationData];
      updatedEducationData.splice(index, 1);
      return updatedEducationData;
    });
  };

  const [workData, setWorkData] = useState([
    {
    company: "ABC Corporation",
    position: "Software Engineer",
    startDate: "2020-01-01",
    endDate: "2022-06-30",
    responsibilities:
      "Developed and maintained web applications. \nCollaborated with cross-functional teams to design and implement features. \nConducted code reviews and provided constructive feedback.",
  },

  {
    company: "XYZ Tech Solutions",
    position: "Senior Developer",
    startDate: "2018-05-15",
    endDate: "2019-12-31",
    responsibilities: "Led a team of developers in building a scalable backend system. \nDesigned and implemented RESTful APIs. \nPerformed performance optimization and troubleshooting.",
  },
]);

const removeWork = (index) => {
  setWorkData((prevWorkData) => {
    const updatedWorkData = [...prevWorkData];
    updatedWorkData.splice(index,1);
    return updatedWorkData;
  });
}



  return (
    <div id='inputWrapper'>
      <PersonalSection setPersonalInfo={setPersonalInfo} {...personalInfo}></PersonalSection>
      <EducationSection setEducationData={setEducationData} educationData={educationData}></EducationSection>
      <WorkSection setWorkData={setWorkData} workData={workData}></WorkSection>
      <CvDisplay personalInfo={personalInfo} educationData={educationData} workData={workData} removeEducation={removeEducation} removeWork={removeWork}/>
      <button onClick={handlePdfConversion} id='pdfButton'>Convert to PDF</button>
    </div>
  )
}

export default App
