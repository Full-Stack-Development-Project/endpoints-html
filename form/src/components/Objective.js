import React from 'react'
import './Objective.css';

function Objective({ objective }) {
    return (
        <div className="objective">

            <div className="objective__first">
                <h3>objective</h3>
             <hr className="hr"/>
            </div>
            <div className="objective__second">
                <p>{objective}</p>
              
            </div>
           
        </div>
    )
}

export default Objective
