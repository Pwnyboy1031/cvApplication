/* eslint-disable react/prop-types */
import format from 'date-fns/format';

function WorkDisplay ({work, onRemove}) {
    return (
        <div className="resumeEntry">
            <div className="entryHeadline">
                <div className="institutionEntry">{work.company}</div>
                <div className="attendedEntry">{format(new Date(work.startDate), 'MMMM y')} - {format(new Date(work.endDate), 'MMMM y')}</div>
            </div>
            <div className='positionEntry'>{work.position}</div>
            <div className="responsibilitiesEntry">{work.responsibilities}</div>
            <button onClick={onRemove} className='delete-button'>Delete</button>
        </div>

    );
}

export default WorkDisplay