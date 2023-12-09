/* eslint-disable react/prop-types */
import format from 'date-fns/format';

function WorkDisplay ({work, onRemove, hovered, setHovered}) {

    const handleMouseEnter = () => {
        setHovered(work);
    };

    const handleMouseLeave = () => {
        setHovered(null);
    };

    return (
        <div className="resumeEntry" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="entryHeadline">
                <div className="institutionEntry">{work.company}</div>
                <div className="attendedEntry">{format(new Date(work.startDate), 'MMMM y')} - {format(new Date(work.endDate), 'MMMM y')}</div>
            </div>
            <div className='positionEntry'>{work.position}</div>
            <div className="responsibilitiesEntry">{work.responsibilities}</div>
            {hovered === work && (
                <button onClick={onRemove} className='delete-button'>Delete</button>
            )}
            
        </div>

    );
}

export default WorkDisplay