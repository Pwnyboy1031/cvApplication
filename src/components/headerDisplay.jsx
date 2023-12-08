/* eslint-disable react/prop-types */
function CvHeader ({personalInfo}) {

    return (
        <div id="resumeHeader">
            <h2 id="nameTitle">{`${personalInfo.firstName} ${personalInfo.lastName}`}</h2>
            <div id="personalDisplayContainer">
                <div id="phoneDisplay">{`${personalInfo.phone}`}</div>
                <div>{`|`}</div>
                <div id="emailDisplay">{`${personalInfo.email}`}</div>
                <div>{`|`}</div>
                <div id="addressDisplay">{`${personalInfo.address}`}</div>
            </div>
        </div>
    );
}

export default CvHeader;