/* eslint-disable react/prop-types */
import EducationDisplay from "./EducationDisplay";
import CvHeader from "./headerDisplay";
import WorkDisplay from "./WorkDisplay";

function CvDisplay ({personalInfo, educationData, workData, removeEducation, removeWork, hovered, setHovered}) {

    return (
        <div id="resumeDisplay">
            <CvHeader personalInfo={personalInfo}/>
            <h2 className="cvSectionHeader">Education</h2>
            {educationData.map((education, index) => (
                <EducationDisplay key={index} education={education} onRemove={() => removeEducation(index)} hovered={hovered} setHovered={setHovered}/>
            ))}
            <h2 className="cvSectionHeader">Experience</h2>
            {workData.map((work, index) => (
                <WorkDisplay key={index} work={work} onRemove={() => removeWork(index)} hovered={hovered} setHovered={setHovered}/>
            ))}

        </div>
    )
}

export default CvDisplay;