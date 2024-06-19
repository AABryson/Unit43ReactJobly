import React, {useState, useEffect} from 'react'
import JobCard from './JobCard'

import JoblyApi from './api'

function Jobs () {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        async function getJobs(){
            try {
                let result = await JoblyApi.findAllJobs()
                console.log('Jobs api call', result)
                if (result && Array.isArray(result)) {
                    setJobs(result)
                } else {
                    console.error('Unexpected result format:', result)
                    setJobs([])
                }

            } catch (err) {
                console.error('Error fetching jobs:', err)
                setJobs([])
            }
        }
        getJobs()

    }, [])

    // useEffect(() => {
    //     async function getJobs() {
    //         let allJobs = await JoblyAPI.findAllJobs()
    //         console.log('All jobs', allJobs)
    //         setJobs(allJobs)
    //     }
    //     getJobs()
    // }, [])

    return (
        <>
        <h1>Jobs</h1>
        {jobs.map(job => (
            <JobCard id={job.id} title={job.title} equity={job.equity} salary={job.salary}/>
            
        ))
        }
        </>

    )
}
export default Jobs


// <ul>
            //       <li>Title: {job.title}</li>
            //       <li>Equity: {job.equity}</li>
            //       <li>Salary: {job.salary}</li>
            // </ul>