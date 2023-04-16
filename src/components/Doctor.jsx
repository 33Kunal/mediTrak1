import React, { useState } from "react";

const Doctor = () => {

    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleSelectChange = (event) => {
      const selectedOption = event.target.value;
      if (!selectedOptions.includes(selectedOption)) {
        setSelectedOptions([...selectedOptions, selectedOption]);
      }
    };

  return (
    <div className='doctorMain'>
        
     <div className='tabletSelection'>
     
      <div className="ts" >
        <select className="dropBox" value="" onChange={handleSelectChange}>
          <option value="" disabled>
            Choose the Tablets
          </option>
          <option value="Penicillin">Penicillin 20mg</option>
          <option value="Insulin">Insulin</option>
          <option value="Dolo 625mg">Dolo 625mg</option>
          <option value="Cetirizine">Cetirizine</option>
          <option value="Levocetirizine 45mg">Levocetirizine 45mg</option>
          <option value="Nimcee 500mg">Nimcee 500mg</option>
          <option value="Isotet 20mg">Isotet 20mg</option>
          <option value="Retinol 2.5mg">Retinol 2.5mg</option>
          <option value="Sumo">Sumo</option>
          <option value="Neura 490">Neura 490</option>
          <option value="Benzovate 30mg">Benzovate 30mg</option>
          <option value="Digene">Digene</option>
          <option value="Holmate 60mg">Holmate 60mg</option>
          <option value="parazene">parazene</option>
          <option value="acetlo 200mg">acetlo 200mg</option>

          
          
        </select>
        {selectedOptions.length > 0 && (
          <div className="bulletTabs">
            <h2 className="nametag" >SELECTED TABLETS:</h2>
            <ul>
              {selectedOptions.map((option) => (
                <li key={option}>{option}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
     </div> 
     <div className="puid">
     <h4 className="pname">Patient UID  </h4>
     <div >

     <input className= 'puidInput'
      type="text"
      placeholder= "P-uid"
    />
    
     </div>
     </div>


     <div className='patientAge'>
     <h4 className="pname">Patient Age  </h4>
     <div >

     <input className= 'puidAge'
      type="text"
      placeholder= "P-Age"
    />
    
     </div>
     </div>
     <div className='doctorUid'>
     <h4 className="pname">Doctor UID  </h4>
     <div >

     <input className= 'doctorUidBOx'
      type="text"
      placeholder= "D-Uid"
    />
    
     </div>
     </div>
     <div className='patientSymtoms'>
     <h4 className="pname">Patient's Symtoms  </h4>
     <div >

     <input className= 'PatientBox'
      type="text"
      placeholder= "P-symtoms"
    />
    
     </div>
     </div>

     <div className='patientIllness'>
     <h4 className="pname"> Patient's illness </h4>
     <div >
 
     <input className= 'PatientBox'
      type="text"
      placeholder= "P-illness"
    />
    
     </div>
     </div>
   <div >
 <button className="= submitBtn">Save On-chain</button>
   </div>
    </div>
  )
}

export default Doctor


