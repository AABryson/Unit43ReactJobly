import React from 'react'
// import {Link} from 'react-router-dom'
// import "./CompanyCard.css"


function JobCard ({id, title, equity, salary}) {


    return (
        <div className="card mb-3">
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <li key={id} className='list-group-item'>
                <div>Equity: {equity}</div>
                <div>Salary: {salary}</div>
            </li>
        
            
        </div>
        </div>
        
    )
}

export default JobCard