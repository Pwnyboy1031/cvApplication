/* eslint-disable react/prop-types */
import format from 'date-fns/format';

function EducationDisplay ({education, onRemove, hovered, setHovered}) {
    
    const handleMouseEnter = () => {
        setHovered(education);
    };

    const handleMouseLeave = () => {
        setHovered(null);
    };


    return (
        <div className="resumeEntry" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="entryHeadline">
                <div className="institutionEntry">{education.school}</div>
                <div className="attendedEntry">{format(new Date(education.startDate), 'MMMM y')} - {format(new Date(education.endDate), 'MMMM y')}</div>
            </div>
            <div className="degreeEntry">{education.degree} in {education.study}, GPA {education.gpa}</div>
            {hovered === education && (
                <button onClick={onRemove} className='delete-button'>Delete</button>
            )}
            
        </div>

    );
}

export default EducationDisplay