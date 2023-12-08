/* eslint-disable react/prop-types */
import '../styles/styles.css'

function PersonalSection({setPersonalInfo}) {

    const handleInputChange = (e) => {
        
        const { id, value } = e.target;
        setPersonalInfo((prevInfo) => ({
            ...prevInfo,
            [id]: value,
        }));
    };


    return (
        <div className="sectionComponent" id='personalSection'>
            <form>
            <h2>Personal Information</h2>
                <label htmlFor='firstName'>First Name</label>
                <input type='text' id='firstName' onChange={handleInputChange}></input>
                <label htmlFor='lastName'>Last Name</label>
                <input type='text' id='lastName' onChange={handleInputChange}></input>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' onChange={handleInputChange}></input>
                <label htmlFor='phone'>Phone Number</label>
                <input type='tel' id='phone' onChange={handleInputChange}></input>
                <label htmlFor='address'>Address</label>
                <input type='text' id='address' onChange={handleInputChange}></input>
            </form>
        </div>
        
    );
}

export default PersonalSection;